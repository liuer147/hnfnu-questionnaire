<template>
  <el-select
    ref="elSelect"
    v-model="vModelValue"
    :size="size"
    v-bind="$attrs"
    :automatic-dropdown="automatic"
    @blur="$emit('blur', $event)"
  >
    <el-option v-for="item in selectList" :key="item.value" v-bind="item">
      <span
        class="select-label text-ellipsis"
        :class="{ 'select-label-left': isShowRight }"
        >{{ item.label }}</span
      >
      <span v-if="isShowRight" class="select-value text-ellipsis">{{
        item[rightLabelKey]
      }}</span>
    </el-option>
  </el-select>
</template>

<script>
import { Select as ElSelect, Option as ElOption } from 'element-ui'
import { vModelMixin } from '@/mixins'

export default {
  components: {
    ElSelect,
    ElOption,
  },
  mixins: [vModelMixin],
  inheritAttrs: false,
  props: {
    // 选项列表
    options: {
      type: Array,
      default: () => {
        return []
      },
    },
    size: {
      type: String,
      default: 'mini',
    },
    isAll: {
      type: Boolean,
      default: false,
    },
    allValue: {
      type: String,
      default: null,
    },
    automatic: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否显示 右侧 字段
     */
    isShowRight: {
      type: Boolean,
      default: false,
    },
    rightLabelKey: {
      type: String,
      default: 'value',
    },
  },
  computed: {
    selectList() {
      const list = [...this.options]
      if (this.isAll) list.unshift({ label: '全部', value: this.allValue })
      return list
    },
  },
}
</script>

<style lang="scss" scoped>
.select-label {
  float: left;
}
.select-label-left {
  width: 50%;
}
.select-value {
  float: right;
  color: #8492a6;
  font-size: 13px;
}
</style>
