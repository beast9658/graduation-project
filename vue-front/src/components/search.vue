<template>
  <div class="info-search">
    <mt-search 
    v-model="value" 
    :result.sync="filterResult"
    cancel-text="取消"
    placeholder="搜索"></mt-search>
  </div>
</template>

<script>
export default {
  name: 'info-search',
  data () {
    return {
      value: '',
      defaultResult: []
    }
  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
    }
  },
  mounted () {
    this.$axios.get('http://localhost:3000/api/gameview')
    .then(response => (this.defaultResult = response.data.title))
  }
}
</script>

<style scoped>
.info-search {
  position: absolute;
  width: 95%;
}
</style>
