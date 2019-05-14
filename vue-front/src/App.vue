<template>
  <div id="app">
    <router-view class="view"/>
    <Footer id="vfooter" v-if="$route.meta.footerShow"></Footer>
  </div>
</template>

<script>

import Footer from '@/components/commonFooter.vue'

export default {
  components: {
    Footer
  }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
.view::after {
  content : '';
  height : 50px;
  display :block;
}
</style>
