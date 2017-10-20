<template>
  <div>
    <model-component></model-component>
  </div>
</template>

<script type='text/ecmascript-6'>
  import ModelComponent from 'components/modelComponents/modal.vue'
  import Vue from 'vue'
  import {AlertPlugin} from 'vux'

  Vue.use(AlertPlugin)
  export default {
    mounted() {
      this.$vux.alert.show({
        content: '这是弹框',
      })
    },
    components: {
      ModelComponent
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/index.styl"

</style>
