<template>
  <el-header height="48px" class="site-layout__header">
    <el-dropdown>
      <span class="el-dropdown-link">
        Admin <i class="el-icon-caret-bottom"></i>
      </span>
      
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    
  </el-header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
</style>