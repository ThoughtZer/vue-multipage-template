<template>
  <div id="app">
    <div class="dd">
      Home
    
    </div>
    <img v-bind:src="logoImg">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
  import logo from 'assets/img/logo.png'
  export default {
    data () {
      return {
        msg: 'Use Vue 2.0 Today!',
        logoImg: logo
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
