<template>
  <div class="list">
    <div class="list-item" 
    v-for="(item,index) in items"
    :key="index">
      <img :src="item.src" alt=""><p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src:require('../assets/logo.png'),
          title:'001'
        },
        {
          src:require('../assets/logo.png'),
          title:'002'
        },
        {
          src:require('../assets/logo.png'),
          title:'011'
        },
        {
          src:require('../assets/logo.png'),
          title:'101'
        },
        {
          src:require('../assets/logo.png'),
          title:'111'
        },
      ]
    }
  }
}
</script>


<style scoped>
.list {
  width: 100%;
  float: left;
}
.list-item {
  width: 50%;
  float: left;
}
</style>
