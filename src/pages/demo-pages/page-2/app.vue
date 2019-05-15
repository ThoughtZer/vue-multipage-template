<template>
  <div class="warpper">
    <model-component></model-component>
  </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import ModelComponent from 'components/modelComponents/modal';

export default @Component({
  components: {
    ModelComponent,
  },
})
class PageTwo extends Vue {

}
</script>

<style lang="scss">
  @import 'common/style/reset.scss';
</style>
