<template>
  <div>
    <model-component></model-component>
  </div>
</template>

<script type='text/ecmascript-6'>
  import ModelComponent from 'components/modelComponents/modal.vue'
  import Vue from 'vue'
  import { AlertPlugin } from 'vux' // 引用vux使用单引号
  import axios from 'axios'
  import qs from 'qs'

  Vue.use(AlertPlugin)
  export default {
    mounted () {
      let arg = {
        option1: 'data1',
        option2: 'data2'
      }
      axios.post('/api/post', qs.stringify(arg)).then((rsp) => {
        console.log(rsp)
        if (rsp.data.status === 0) {
          this.$vux.alert.show({
            content: '这是弹框'
          })
        }
      })
    },
    components: {
      ModelComponent
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/index.styl"
  div
    display: flex
</style>
