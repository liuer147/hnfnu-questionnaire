<template>
  <el-checkbox-group class="options" v-bind="$attrs" v-model="value" @change="handleChange">
    <el-checkbox
      class="option-value"
      v-for="item of options"
      :key="item.mark"
      :label="item.mark"
      >{{ item.text }}</el-checkbox
    >
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
      default: () => [
        { text: '选项一', mark: 'A' },
        { text: '选项二', mark: 'B' },
        { text: '选项三', mark: 'C' },
        { text: '选项四', mark: 'D' },
      ],
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
.options {
  width: 100%;
  display: flex;
  flex-direction: column;
  .option-value {
    margin-right: 0;
    line-height: 30px;
    flex: 1;
    &:hover {
      background: rgba(150, 150, 150, 0.2);
    }
  }
}
</style>
