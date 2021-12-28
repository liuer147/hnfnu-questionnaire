<template>
  <span :style="itemStyle">{{ tableRowSpanValue }}</span>
</template>

<script>
import { tablePropsMixin } from '../tableMixins'
import _ from 'lodash'
export default {
  name: 'TableItemSpan',
  mixins: [tablePropsMixin],
  computed: {
    itemStyle() {
      const { itemStyle } = this.bindConfig
      if (_.isFunction(itemStyle)) {
        return itemStyle(this.tableRow)
      } else {
        return itemStyle || ''
      }
    },
    tableRowSpanValue() {
      const row = this.tableRow
      const value = this.tableColumnValue
      const { formatter, emptyValue = '' } = this.bindConfig
      // 如果定义了格式化函数，返回格式化内容
      if (formatter && _.isFunction(formatter)) {
        return formatter(row)
      } else if (_.isNil(value) || value === '') {
        return emptyValue
      }
      return value
    },
  },
}
</script>

<style scoped></style>
