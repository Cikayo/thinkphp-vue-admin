<template>
  <div class="site-page__container">
    <div class="site-page__functions">
        <el-button type="primary">新增</el-button>
    </div>
    <div class="site-page__main">
      <t-table :columns="columns" :dataList="dataList"></t-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          dataIndex: "id",
          label: "ID",
        },
        {
          dataIndex: "name",
          label: "名称",
        },
        {
          dataIndex: "permission",
          label: "权限",
        },
        {
          dataIndex: "user",
          label: "用户设置",
        },
      ],
      dataList: [
        {
          id: 1,
          name: '管理员',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>