<template>
  <div class="hello">
    <div class="act">
      <div class="search" @click="toSearch()"><img src="../assets/logo.png" alt=""><p>搜索</p></div>
      <div class="login" @click="toLogin()"><img src="../assets/logo.png" alt=""><p>登录</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    toSearch() {
      this.$router.push('/gamesearch')
    },
    toLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .act {
    float: left;
    width: 100%;
  }
  .act div {
    width: 50%;
    float: left;
    text-align: center;
  }
  .act div img {
    width: 3rem;
    height: 3rem;
  }
</style>
