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
        title="标题文"
        lable="45"
        :to="{path:'/gamedetail',query:{id:index}}">
        <img slot="icon" src="../assets/logo.png" width="100" height="100">
        {{ index }}:{{ item.message }}:{{ item.id }}
      </mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gamelist',
  data () {
    return {
      items: [
      { message: 'Foo',
        id: '001' },
      { message: 'Bar',
        id: '002' },
      { message: 'Foo',
        id: '001' },
      { message: 'Foo',
        id: '001' },
      { message: 'Bar',
        id: '002' },
      { message: 'Foo',
        id: '001' },
      { message: 'Foo',
        id: '001' },
      { message: 'Bar',
        id: '002' },
      { message: 'Foo',
        id: '001' }
    ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
