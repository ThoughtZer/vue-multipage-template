<template>
  <div>
    <div class="bg"></div>
    {{msg}}
  </div>
</template>

<script>
  import logo from 'assets/img/logo.png'

  export default {
    data(){
      return {
        msg: "测试数据"
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bg
    background url("img/logo.png") 100% 100%
    background-size 100% 100%
    width 300px
    height 300px


</style>
