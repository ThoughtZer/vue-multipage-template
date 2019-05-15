<script type='text/ecmascript-6'>
import Vue from 'vue';
import Component from 'vue-class-component';
import ModelComponent from 'components/modelComponents/modal';
import { submit } from 'common/service/server';

export default @Component({
  components: {
    ModelComponent,
  },
})
class PageOne extends Vue {
  parentProps = 'prop message';

  render() {
    return (
      <div class="wrapper">
        <model-component data={ this.parentProps }></model-component>
      </div>
    );
  }

  mounted () {
    const arg = {
      option1: 'data1',
      option2: 'data2'
    };
    submit(arg).then((rsp) => {
      if (rsp.data.status === 0) {
        console.log(rsp);
      }
    });
  }
}
</script>

<style lang="scss">
  @import 'common/style/reset.scss';
</style>
