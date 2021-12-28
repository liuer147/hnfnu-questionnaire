<template>
  <el-checkbox-group v-model="value" @change="handleChange">
    <el-checkbox class="check-item" v-for="item of options" :key="item.mark" :label="item.mark">{{
      item.text
    }}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
import { vModelMixin } from '@/mixins'
export default {
  name: 'QuestionItemCheckBox',
  mixins: [vModelMixin],
  props: {
    options: {
      type: Array,
      default: () => ([
        { text: '选项一', mark: 'A' },
        { text: '选项二', mark: 'B' },
        { text: '选项三', mark: 'C' },
        { text: '选项四', mark: 'D' },
      ]),
    },
  },
  data() {
    return {
      value: [],
    }
  },
  methods: {
    handleChange(newValue) {
      this.$emit('change', newValue)
    },
  },
}
</script>

<style lang="scss" scoped>
  .check-item {
    &:hover {
      background: rgba(150, 150, 150, 0.5);
    }
  }
</style>
