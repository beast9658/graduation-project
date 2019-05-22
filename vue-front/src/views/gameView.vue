<template>
  <div>
<!--     <div>
      <Search></Search>
    </div> -->
    <div>
      <mt-cell
        id="gamelist"
        v-for="(item,index) in items"
        :key="index"
        :title="item.title"
        lable="45"
        :to="{path:'/gamedetail',query:{index: index}}">
        <img slot="icon" :src="item.src" width="100" height="100">
        {{ item.message }}
      </mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gamelist',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.$axios.get('http://localhost:3000/api/gameview')
    .then(response => (this.items = response.data))
  }
}
</script>

<style scoped>

</style>
