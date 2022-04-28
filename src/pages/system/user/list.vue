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
          label: "用户名",
        },
        {
          dataIndex: "role",
          label: "角色",
        },
      ],
      dataList: [
        {
          id: 1,
          name: 'admin',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>