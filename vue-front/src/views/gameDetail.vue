<template>
  <div>
    <div class="bg"></div>
    <PrePage></PrePage>
    <div class="detail" v-for="(message,index) in messages" :key="index">
      <!-- {{ this.$route.query.id }} -->
      <div class="banner">
        <div class="banner-img"></div>
        <div class="banner-mes">
          <div>时间:{{ message.time }}</div>
          <div>作者:{{ message.author }}{{ message.index }}</div>
          <div>tag:{{ message.tag }}</div>
        </div>
      </div>
      <div class="message">
        {{ message.detail }}
      </div>
    </div>
  </div>
</template>

<script>
import PrePage from '@/components/prePage.vue'

export default {
  components: {
      PrePage
  },
  data () {
    return {
      messages:[]
    }
  },
  mounted () {
    this.$axios.get('http://localhost:3000/api/gamedetail/:index')
    .then(response => (this.messages = response.data))
  }
}
</script>

<style scoped>
.bg {
    position: fixed;
    width: 120%;
    height: 100%;
    top: 0px;
    background:linear-gradient(#c9f3c9 5%,#ffffff) ;
    z-index: -1;
    left: -5%;
}
.banner-img {
  width: 50%;
  height: 0;
  padding-bottom: 50%;
  background-color: yellow;
  background-image: url(../assets/logo.png);
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  float: left;
}
.banner-mes {
  width: 50%;
  float: left;
}
.banner-mes div {
  padding: 1rem;
}
.message {
  background-color: coral;
  position: absolute;
  top: 30%;
  padding: 1rem 3rem;
}
</style>
