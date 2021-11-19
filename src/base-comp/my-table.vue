<template>
  <el-table :data="tableData" style="width: 100%" border="">
    <el-table-column type="expand">
      <template v-slot="scope">
        <slot name="expand" :row="scope.row"></slot>
      </template>
    </el-table-column>
    <el-table-column type="index" align="center" width="60" label="序号" />
    <el-table-column
      v-for="item of tableColumns"
      align="center"
      :key="item.prop"
      :label="item.label"
      :prop="item.prop"
    >
      <template v-slot="{ row }">
        <slot :name="item.prop" :row="row">
          {{ row[item.prop] }}
        </slot>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center" width="130" v-if="hasOperatorPermission">
      <template v-slot="scope">
        <slot name="operator" :row="scope.row"></slot>
      </template>
    </el-table-column>
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
    hasOperatorPermission: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style lang="scss" scoped></style>
