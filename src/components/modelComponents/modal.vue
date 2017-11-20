<template lang="html">
  <div class="modal">
    This is a modal
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/mixin.styl"
  .modal
    px2rem(width ,100)
    px2rem(height ,100)
    border: 1px solid #ccc
    background url("./img/fn.png") no-repeat
    background-size 100% 100%
</style>
