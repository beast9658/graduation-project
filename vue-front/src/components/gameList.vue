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
      items: []
    }
  },
  mounted () {
    this.$axios.get('http://localhost:3000/api/gamelist')
    .then(response => (this.items = response.data))
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
  overflow: hidden;
  text-align: center;
}
.list-item img {
  width: 100%;
  height: 100%;
}
.list::after {
  float: left;
  width: 100%;
  content : '';
  height : 50px;
  display :block;
}
</style>
