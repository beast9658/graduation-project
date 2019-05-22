<template>
  <div>
    <PrePage></PrePage>
    <div class="mine-mes">
      <div class="bg"></div>
      <div class="mes">
        <div class="head-icon"></div>
        <div class="name">{{name}}</div>
      </div>
    </div>
    <div class="score" v-for="(item,index) in items" :key="index">
      <div @click="change(item)">
        <p class="d-title">{{ item.title }}</p>
      </div>
      <div v-if="item.show" @click="close(item)">
        <img :src=item.src alt="" class="s-img">
        <p class="d-score">K:{{ item.k }} D:{{ item.d }} A:{{ item.a }}</p>
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
      name:"4ds8a94d",
      items: [
        {
          title:"001",
          k:"10",
          d:"10",
          a:"5",
          src:"http://localhost:3000/img/logo.png",
          show:false
        },
        {
          title:"0101",
          k:"110",
          d:"110",
          a:"51",
          show:false
        }
      ]
    }
  },
  methods: {
    change(item) {
      item.show=!item.show
    },
    close(item) {
      item.show=false
    }
  }
  
}
</script>

<style scoped>
.mine-mes {
  width: 100%;
  height: 20vh;
  overflow: hidden;
  margin-bottom: 1rem;
}
.bg {
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: pink;
  border-radius: 5rem;
  transform: rotate(60deg);
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
  top: 3rem;
  margin: 0 auto;
  box-shadow: 1px 1px 50px rgb(241, 203, 154);
}
.name {
  position: fixed;
  left: 0;
  right: 0;
  top: 8rem;
  margin: 0 auto;
}
.s-img {
  width:6em;
  height:8em;
}
.d-title {
  color: blue;
  font-size: 1.5rem;
  text-align: center;
}
.d-detail {
  position: relative;
  float: right;
}
.d-score {
  float: right;
  position: relative;
  right: 3rem;
  top: 1rem;
  font-size: 2rem;
}
</style>