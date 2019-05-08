<template>
  <div id="app">
    <router-view/>
    <Footer id="vfooter"></Footer>
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
}
</style>
