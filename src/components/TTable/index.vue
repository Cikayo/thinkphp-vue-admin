<template>
  <div>
    <el-table size="medium" :data="dataList">
      <el-table-column
        v-for="column in columns"
        :key="column.dataIndex"
        :prop="column.dataIndex"
        :label="column.label"
        :width="column.width"
      ></el-table-column>
    </el-table>
    <div class="site-table__pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    dataList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.site-table__pagination {
  margin-top: 1rem;
  text-align: center;
}
</style>