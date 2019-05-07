<template>
  <header>
    <div class="wrapper">
      <el-row>
        <el-col :span="4"><div class="logo">logo</div></el-col>
        <el-col :span="20"><div class="nav">
          <el-menu 
            :default-active="activeIndex" 
            class="el-menu-demo" 
            mode="horizontal" 
            background-color="#000000"
            @select="handleSelect">
            <el-menu-item index="1"><router-link to="/#">111</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/#">222</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/#">333</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/#">444</router-link></el-menu-item>
          </el-menu>
        </div></el-col>
      </el-row>
    </div>
  </header>
</template>
<style scoped>
.wrapper {
  background-color: rgb(0, 255, 128);
}
.logo {
  font-size: 3rem;
}
</style>
