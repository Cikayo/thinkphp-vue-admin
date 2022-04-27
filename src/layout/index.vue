<template>
  <el-container class="site-layout__container">
    <Aside />

    <el-container direction="vertical">
      <Header />
      <Main />
    </el-container>
  </el-container>
</template>

<script>
import Aside from './aside'
import Header from './header'
import Main from './main'
export default {
  components: {
    Aside,
    Header,
    Main
  }
}
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

