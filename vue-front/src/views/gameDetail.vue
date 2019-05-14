<template>
  <div>
    <div class="bg"></div>
    <PrePage></PrePage>
    <div class="detail">
      <!-- {{ this.$route.query.id }} -->
      <div class="banner">
        <div class="banner-img"></div>
        <div class="banner-mes">
          <div>时间:{{ message.time }}</div>
          <div>作者:{{ message.author }}</div>
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
      message:{
        time:"2019.01.01",
        author:"sdsaeqweqe",
        tag:"dsa,dsa,weq",
        detail:"11111111111首先，我们称呼 routes 配置中的每个路由对象为 路由记录。路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录例如，根据上面的路由配置，/foo/bar 这个 URL 将会匹配父路由记录以及子路由记录。一个路由匹配到的所有路由记录会暴露为 $route 对象 (还有在导航守卫中的路由对象) 的 $route.matched 数组。因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。下面例子展示在全局导航守卫中检查元字段："}
    }
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
