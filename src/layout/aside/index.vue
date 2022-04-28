<template>
  <el-aside class="site-custom-scrollbar site-layout__aside" width="210px" >
    <el-menu router background-color="#304156" text-color="#bfcbd9" active-text-color="#409eff">
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/system">
        <template slot="title">
          <i class="el-icon-message"></i>系统管理
          </template>
        <el-menu-item-group title="用户">
          <el-menu-item index="/system/role/list">角色管理</el-menu-item>
          <el-menu-item index="/system/user/list">用户管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="系统">
          <el-menu-item index="/system/menu/list">菜单管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="43" :route="{path: '/about'}">
        <i class="el-icon-setting"></i>
        <span slot="title">关于</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>