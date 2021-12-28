<template>
  <el-button
    v-if="isPermission"
    class="al-button"
    :style="itemStyle"
    :type="type"
    :size="size"
    :icon="iconPosition === 'left' ? icon : null"
    v-bind="$attrs"
    @click="$emit('click', prop)"
    @mousedown="$emit('mousedown', prop)"
  >
    <slot />
    <i v-if="iconPosition === 'right'" class="button-icon" :class="icon" />
  </el-button>
</template>

<script>
import { Button as ElButton } from 'element-ui'
import { tablePropsMixin } from '../Table/tableMixins'

export default {
  name: 'Button',
  components: { ElButton },
  mixins: [tablePropsMixin],
  inheritAttrs: false,
  props: {
    prop: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'mini',
    },
    type: {
      type: String,
      default: 'primary',
    },
    icon: {
      type: String,
      default: null,
    },
    iconPosition: {
      type: String,
      default: 'left',
    },
    permission: {
      type: [Array, String],
      default: '',
    },
  },
  computed: {
    itemStyle() {
      const { itemStyle } = this.bindConfig
      if (this.$_.isFunction(itemStyle)) {
        return itemStyle(this.tableRow)
      } else {
        return itemStyle || ''
      }
    },
    isPermission() {
      let permission = this.permission
      if (permission && this.$_.isString(permission)) {
        permission = [permission]
      }
      return !permission || (permission && this.$checkPermission(permission))
    },
  },
}
</script>

<style lang="scss" scoped>
.al-button {
  height: 28px;
  padding: 0 15px;
}
.button-icon {
  margin-left: 5px;
}
</style>
