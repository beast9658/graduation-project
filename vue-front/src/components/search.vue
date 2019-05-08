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
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry'
      ]
    }
  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
    }
  }
}
</script>

<style scoped>
.info-search {
  position: absolute;
  width: 95%;
}
</style>
