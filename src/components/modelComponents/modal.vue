<script>
  export default {
    props: {
      data: {
        type: String
      }
    },
    render() {
      return (
        <div class="modal">
          <p>{this.data}</p>
        </div>
      )
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/mixin.styl"
  .modal
    position fixed
    top 0
    left 0
    bottom 0
    width 100%
    height 100%
    border: 1px solid #ccc
    background url("./img/timg.jpg") no-repeat 50% 50%
    background-size cover
</style>
