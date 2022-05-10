<template>
  <div>
    <h2>About</h2>

    <p>
      Hello, this is about page.
    </p>

    <p>
      <el-button @click="handleClick" :loading="loading">点击</el-button>
    </p>
    <p>
      <router-link to="/404">404</router-link>
    </p>
  </div>
</template>

<script>
  import { post } from '@/utils/request'
  import { userLoginUrl } from '@/api'
  export default {
    name: 'About',
    data() {
      return {
        loading: false
      }
    },
    methods: {
      handleClick() {
        this.loading = true
        post(userLoginUrl).then(res => {
          console.log(res)
          this.$message.success(res.msg)
          this.loading = false
        })
      }
    },
  }
</script>

<style scoped>

</style>