<template>
  <el-header height="48px" class="site-layout__header">
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ username }} <i class="el-icon-caret-bottom"></i>
      </span>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided @click.native="handleLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import { mapState, mapActions } from "pinia"; //引入映射函数
import useUser from "@/store/index"; //引入store
export default {
  name: 'PageHeader',
  computed: {
    ...mapState(useUser, ["username"]), //映射函数
  },
  methods: {
    ...mapActions(useUser, ["logout"]), //映射函数
    handleLogout() {
      this.logout().then(res => {
        this.$message.success(res.msg)
        this.$router.replace('/login')
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
</style>