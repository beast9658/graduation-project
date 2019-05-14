<template>
    <div>
      <Search></Search>
      <PrePage></PrePage>
    </div>
</template>

<script>
import Search from '@/components/search.vue'
import PrePage from '@/components/prePage.vue'

export default {
  components: {
    Search,
    PrePage
  }
}
</script>
