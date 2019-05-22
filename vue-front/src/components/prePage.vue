<template>
  <div class="pre-page" @click="back()"></div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.pre-page {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-image: url(http://localhost:3000/img/back.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  position: fixed;
  left: 80%;
  top: 80%;
  z-index: 10;
}
</style>
