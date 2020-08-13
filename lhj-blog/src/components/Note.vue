<template>
  <div>
    <div class="hero">
      <h1>note</h1>
    </div>
    <ul>
      <router-link tag="div" :to="'/article/' + item.name" v-for="(item, index) in noteList" :key="index">
        <li>
          <p class="item_header">{{item.name}}</p>
          <p>{{item.ctime}}</p>
          <p>{{item.content}}</p>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Note',
  data () {
    return {
      noteList: []
    }
  },
  comments: {},
  mounted () {
    // this.$axios.get('http://localhost/users/user')
    //   .then(function (res) {
    //     console.log(res.data)
    //   })
    //   .catch(function (error) {
    //     console.log('接口调用失败' + error)
    //   })
    this.$axios.get('http://localhost/note/getNoteList')
      .then((res) => {
        this.noteList = res.data
        console.log(this.noteList)
      })
      .catch((error) => {
        console.log('接口调用失败' + error)
      })
  }
}
</script>

<style scoped>
.hero:after {
  background-color: #d4a259;
  display: block;
  content: "";
  margin-top: 1.66667em;
  height: 1px;
  width: 60px;
}
p {
  margin: 0;
  padding: 0;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul{
  margin-top: 30px;
}
li{
  height: 100%;
  padding-left: 30px;
  /* 火狐 */
  -moz-transition: padding-left 0.5s;
  /* 谷歌 */
  -webkit-transition: padding-left 0.5s;
  /* opera */
  -o-transition: padding-left 0.5s;
  transition: padding-left 0.5s;
}
ul>div{
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  height: 126px;
  position: relative;
}
ul>div:nth-child(1){
  border-top: 1px solid #cccccc;
}
ul>div:hover{
  background-color: #2d87db;
}
ul>div:hover li{
  color: #ffffff;
  padding-left: 100px;
}
.item_header{
  padding-top: 1em;
}
</style>
