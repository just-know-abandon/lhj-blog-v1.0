<template>
  <div id="app">
    <router-view name="header"/>
    <router-view class="site-content" name="main"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.site-content{
  padding-left: 3vw;
  padding-right: 3vw;
  /* background-color: red; */
  max-width: 50%;
}
@media only screen and (min-width: 1001px){
  .site-content{
    margin-left: 300px;
    padding-bottom: 3.33333em;
    padding-top: 3.33333em;
  }
}
@media only screen and (min-width: 801px) and (max-width: 1001px) {
  .site-content{
    margin-left: 30vw;
    padding-bottom: 3.33333em;
    padding-top: 3.33333em;
  }
}
@media only screen and (min-width: 800px){}
</style>
