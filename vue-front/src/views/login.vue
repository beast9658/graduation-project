<template>
  <div class="login">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button type="primary" @click.native="handleClick">登录</mt-button>
    <PrePage></PrePage>
  </div>
</template>

<script>
import PrePage from '@/components/prePage.vue'

export default {
  components: {
    PrePage
  }
}
</script>
