<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="item of tableColumns"
      :key="item.prop"
      :label="item.label"
      :prop="item.prop"
    />
  </el-table>
</template>

<script>
// $暂时规定展示字段为 编号，题目描述，类型, 操作
export default {
  name: 'my-table',
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    tableColumns: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
