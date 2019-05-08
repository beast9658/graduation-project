<template>
  <footer>
    <div id="app">
      <mt-tabbar v-model="selected" class="vfooter" fixed>
        <mt-tab-item id="home">
          <img slot="icon" src="../assets/logo.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="gameview">
          <img slot="icon" src="../assets/logo.png">
          资讯
        </mt-tab-item>
        <mt-tab-item id="own">
          <img slot="icon" src="../assets/logo.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    selected: function(val) {
      console.log(val)
      switch(val) {
        case 'home':
        this.$router.push('/')
        break;
        case 'gameview':
        this.$router.push('/gameView')
        break;
        case 'own':
        this.$router.push('/about')
        break;
      }
    }
  }
}
</script>

<style scoped>

</style>
