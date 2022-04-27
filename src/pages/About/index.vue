<template>
  <div>
    <h2>About</h2>

    <p>
      Hello, this is about page.
    </p>

    <p>
      <el-button @click="handleClick">点击</el-button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'About',
    methods: {
      handleClick() {
        this.$message.success('点击了')
      }
    },
  }
</script>

<style scoped>

</style>