<template>
  <div class="wrapper">
    <model-component></model-component>
  </div>
</template>

<script type='text/ecmascript-6'>
import ModelComponent from 'components/modelComponents/modal.vue';
import { submit } from 'common/service/server';

export default {
  mounted () {
    let arg = {
      option1: 'data1',
      option2: 'data2'
    };
    submit(arg).then((rsp) => {
      if (rsp.data.status === 0) {
        console.log(rsp); // eslint-disable-line
      }
    });
  },
  methods: {
    
  },
  components: {
    ModelComponent
  }
};
</script>

<style lang="scss">
  @import 'common/style/reset.scss';
</style>
