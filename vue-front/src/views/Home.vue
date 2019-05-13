<template>
  <div class="home">
    <mt-swipe class="swipe">
      <mt-swipe-item><img src="../assets/logo.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/logo.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/logo.png" alt=""></mt-swipe-item>
    </mt-swipe>
    <HelloWorld/>
    <GameList/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GameList from '@/components/gameList.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    GameList
  }
}
</script>

<style scoped>
.swipe {
  height: 15rem;
}
.swipe img {
  width: 100%;
  height: 100%;
}
</style>
