<!--表头-展开行组件-->
<template>
  <div class="demo-table-expand">
    <p v-for="(item, index) in expandList" :key="index" class="item-table">
      <span class="title-label" :class="{ illegal: item.illegal }">{{
        item.label
      }}</span>
      <span class="content-value">{{ tableRow[item.prop] }}</span>
    </p>
  </div>
</template>
<script>
import { tablePropsMixin } from 'e/Table/tableMixins'
export default {
  name: 'TableExpandHeader',
  mixins: [tablePropsMixin],
  data() {
    return {}
  },
  computed: {
    expandList() {
      const row = this.tableRow
      const config = this.bindConfig.bindConfig
      return config.handleRowData(row.attrList, this.tableRow)
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.demo-table-expand {
  margin: 0 30px;
  border-top: dashed 1px #999999;
  .item-table {
    border-bottom: dashed 1px #999999;
    span {
      display: inline-block;
      vertical-align: middle;
      height: 32px;
      line-height: 32px;
    }
    .title-label {
      padding: 0 20px;
      width: 100px;
      border-right: dashed 1px #999999;
      text-align: center;
      box-sizing: content-box;
      &.illegal {
        color: red;
      }
    }
    .content-value {
      padding: 0px 40px;
    }
  }
}
</style>
