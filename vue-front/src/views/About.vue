<template>
  <div class="mine">
    <div class="mine-mes">
      <div class="bg"></div>
      <div class="mes">
        <div class="head-icon"></div>
        <div class="name">{{name}}</div>
      </div>
    </div>
    <mt-cell title="战绩信息" is-link :to="{path:'/gamescore'}"></mt-cell>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:"admin"
    }
  }
}
</script>


<style scoped>
.mine-mes {
  width: 100%;
  height: 40vh;
  overflow: hidden;
  margin-bottom: 1rem;
}
.bg {
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: aqua;
  border-radius: 5rem;
  transform: rotate(45deg);
}
.mes {
  width: 100%;
  height: 100%;
  z-index: 1;
  text-align: center;  
}
.head-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-image: url("../assets/logo.png");
  background-repeat: no-repeat;
  background-size: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 6rem;
  margin: 0 auto;
  box-shadow: 1px 1px 50px rgb(108, 223, 133);
}
.name {
  position: fixed;
  left: 0;
  right: 0;
  top: 12rem;
  margin: 0 auto;
}
</style>
