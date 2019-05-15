<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import imageUrl from './img/timg.jpg';

export default @Component({
  watch: {
    inputValue(newValue) {
      console.log(newValue);
    },
  },
  props: {
    data: {
      type: String,
      default: '',
    },
  },
})
class Modal extends Vue {
  // data
  inputValue = '';

  imageUrl = imageUrl;

  render() {
    return (
      <div class="modal" vOn:click={this.handleClick}>
        { this.data }
        <input vModel={ this.inputValue } />
        <div class="imageWrapper"></div>
        <img class="image" src={ this.imageUrl } />
        { this.count }
      </div>
    );
  }
  // methods
  handleClick() {
    console.log('click event');
  }
  // computed
  get count() {
    return this.inputValue + ' computed ';
  }
}
</script>

<style lang="scss" src="./modal.scss"></style>

