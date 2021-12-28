<template>
  <el-radio-group class="options" v-bind="$attrs" v-model="value" @change="handleChange">
    <el-radio class="option-value" v-for="item of options" :key="item.mark" :label="item.mark">{{
      item.text
    }}</el-radio>
  </el-radio-group>
</template>

<script>
import { vModelMixin } from '@/mixins'
export default {
  name: 'QuestionItemJudge',
  mixins: [vModelMixin],
  props: {
    options: {
      type: Array,
      default: () => [
        { text: '选项一', mark: true },
        { text: '选项二', mark: false },
      ],
    },
  },
  data() {
    return {
      value: '',
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
