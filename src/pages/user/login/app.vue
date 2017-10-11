<template>
  <div>
    <div class="bg"></div>
    {{msg}}
  </div>
</template>

<script type='text/ecmascript-6'>
  import Vue from 'vue'
  import logo from 'assets/img/logo.png'

  import {AlertPlugin} from 'vux'
  Vue.use(AlertPlugin)

  export default {
    mounted() {
      this.$vux.alert.show({
        content: '这是弹框',
      })
    },
    data() {
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
