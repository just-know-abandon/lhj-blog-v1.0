<template>
  <div>
    <div v-html="article"></div>
  </div>
</template>

<script>
// 高亮代码模块 npm install highlight.js --save
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

export default {
  data () {
    return {
      article: ''
    }
  },
  created () {
    console.log(this.$route.params.id)
    this.$axios.get('http://localhost/note/getNoteByName/' + this.$route.params.id)
      .then(res => {
        console.log(res.data)
        this.article = res.data
        // 高亮显示代码
        this.$nextTick(() => {
          const blocks = document.querySelectorAll('pre code')
          blocks.forEach((block) => {
            hljs.highlightBlock(block)
          })
        })
      })
      .catch(err => {
        console.log(err + '连接失败')
      })
  }
}
</script>

<style scoped>

</style>
