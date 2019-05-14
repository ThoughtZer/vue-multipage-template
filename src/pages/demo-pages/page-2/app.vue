<template>
  <div>
    <model-component></model-component>
  </div>
</template>
<script type='text/ecmascript-6'>
import ModelComponent from 'components/modelComponents/modal.vue';

export default {
  data() {
    return {
      msg: 'demo'
    };
  },
  methods: {
  },
  components: {
    ModelComponent,
  }
};
</script>

<style lang="scss">
  @import 'common/style/reset.scss';
</style>
