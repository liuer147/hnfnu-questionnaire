<template>
  <div>
    <h2>component</h2>
    <MyTable :table-columns="tableColumns"></MyTable>
  </div>
</template>

<script>
import MyTable from '@/base-comp/my-table.vue'
export default {
  name: 'page-content',
  components: {
    MyTable,
  },
  props: {
    tableColumns: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
