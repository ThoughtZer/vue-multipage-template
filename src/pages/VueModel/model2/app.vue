<script type='text/ecmascript-6'>
  import Vue from 'vue'
  import { AlertPlugin } from 'vux' // 引用vux使用单引号
  import ModelComponent from 'components/modelComponents/modal.vue'
  import Card from 'components/card/card.jsx'

  Vue.use(AlertPlugin)
  export default {
    data() {
      return {
        msg: 'jsx'
      }
    },
    render() {
      return (
        <div>
          <card></card>
          <model-component data={this.msg} nativeOnClick={this.dropMsg}></model-component>
        </div>
      )
    },
    methods: {
      dropMsg() {
        console.log(123)
      }
    },
    components: {
      ModelComponent,
      Card
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/index.styl"

</style>
