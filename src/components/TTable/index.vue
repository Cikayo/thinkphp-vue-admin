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
</style>