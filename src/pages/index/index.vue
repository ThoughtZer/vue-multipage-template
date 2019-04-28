<template>
  <div class='index'>
    <div class="count">
      <span v-text='count'></span>
      <button @click="add">add count cc</button>
    </div>
    <img src="../../assets/logo.png" alt="">
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { get } from '@commons/service/http.base';

export default {
  name: 'index',
  computed: {
    ...mapGetters(['count'])
  },
  mounted() {
    get('/api/get', { a: 1 }).then((val) => {
      console.log(val);
    });
  },
  methods: {
    ...mapActions([
      'addCount'
    ]),
    add(){
      this.addCount({num: 10});
    }
  }
};
</script>
<style lang="scss">
.index {
  position: relative;
  font-size: 24px;
  color: $titleColor;
  .count{
    color: blue;
    text-align: center;
  }
  img {
    position: relative;
    margin-top: 60px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
