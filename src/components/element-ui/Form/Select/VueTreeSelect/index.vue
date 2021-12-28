<template>
  <tree-select
    v-model="vModelValue"
    :class="[`${size}-size`]"
    :style="{ width: width + 'px' }"
    :options="options"
    :normalizer="normalizer"
    :placeholder="placeholder"
    :no-options-text="noOptionsText"
    :no-children-text="noOptionsText"
    :no-results-text="noOptionsText"
  />
</template>

<script>
import { vModelMixin } from '@/mixins'
import TreeSelect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  name: 'VueTreeSelect',
  components: {
    TreeSelect,
  },
  mixins: [vModelMixin],
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      default: () => {
        return []
      },
    },
    defaultProps: {
      type: Object,
      default: () => {
        return {
          id: 'id',
          label: 'label',
          children: 'children',
        }
      },
    },
    size: {
      type: String,
      default: 'mini',
    },
    width: {
      type: Number,
      default: 200,
    },
    noOptionsText: {
      type: String,
      default: '无数据',
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
  },
  methods: {
    /** 转换部门数据结构 */
    normalizer(node) {
      const {
        id = 'id',
        label = 'label',
        children = 'children',
      } = this.defaultProps
      if (node[children] && !node[children].length) {
        delete node[children]
      }
      return {
        id: node[id],
        label: node[label],
        children: node[children],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.mini-size ::v-deep {
  .vue-treeselect__control {
    height: 28px;
  }
  .vue-treeselect__placeholder {
    line-height: 28px;
  }
  .vue-treeselect__single-value {
    line-height: 28px;
  }
}
</style>
