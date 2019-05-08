<template>
  <div>
<!--     <div>
      <Search></Search>
    </div> -->
    <div class="gamelist">
      <mt-cell
        title="标题文"
        lable="45"
        to="/gamedetail"
        value="带链接"><img slot="icon" src="../assets/logo.png" width="100" height="100">
      </mt-cell>
    </div>
  </div>
</template>

<script>
import Search from '@/components/search.vue'

export default {
  components: {
    Search
  }
}
</script>

<style scoped>
.gamelist {
  position: relative;
}
</style>
