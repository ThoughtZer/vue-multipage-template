<template>
  <div id="app">
    index
    <div class="bg1"></div>
    <div class="bg2">{{msg}}</div>
    <modal></modal>
  </div>
</template>

<script>
  import logo from 'assets/img/logo.png'
  import modal from 'components/modal.vue'
  export default {
    components: {
      modal
    },
    data () {
      return {
        msg: 'Use Vue 2.0 Today!',
        logoImg: logo
      }
    },
    methods: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .bg1
    background: green
    width: 100px
    height: 20px

</style>
