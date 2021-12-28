<template>
  <div class="item-is-html">
    <span v-if="isHtml" v-html="tableColumnValue" />
    <span v-else>{{ tableColumnValue | rowFilter(tableRow, bindConfig) }}</span>
  </div>
</template>
<script>
import { tablePropsMixin } from '../tableMixins'
import _ from 'lodash'
export default {
  name: 'TableItemIsHtml',
  filters: {
    rowFilter(value, row, { formatter }) {
      // 如果定义了格式化函数，返回格式化内容
      if (formatter && _.isFunction(formatter)) {
        return formatter(row)
      }
      return value
    },
  },
  components: {},
  mixins: [tablePropsMixin],
  inheritAttrs: false,
  props: {
    bindConfig: {
      type: Object,
      default: () => {
        return {
          isHtml: false,
        }
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    isHtml() {
      const { isHtml } = this.bindConfig
      return isHtml || false
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.item-is-html {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
