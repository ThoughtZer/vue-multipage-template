<template>
  <div></div>
</template>

<script type='text/ecmascript-6'>
  import Vue from 'vue'
  import { AlertPlugin } from 'vux' // 引用vux使用单引号
  import BaseService from 'common/service/base-service'
  import $ from 'jquery'

  Vue.use(AlertPlugin)
  export default {
    mounted () {
      let arg = {
        option1: 'data1',
        option2: 'data2'
      }
      $.when(BaseService.get('/api/get', arg)).done((result) => {
        console.log(result)
        // 进入done 就表明已经请求成功了
      }).fail((result) => {
        console.log(result)
        // 进入fail 就表明已经请求失败了
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/index.styl"

</style>
