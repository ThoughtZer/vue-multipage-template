import 'common/stylus/mixin.styl'
import './card.styl'

export default {
  data() {
    return {
      msg: 'jsx文件组件demo'
    }
  },
  render() {
    return (
      <div class='card-wrapper'>
        <h1>{this.msg}</h1>
      </div>
    )
  }
}
