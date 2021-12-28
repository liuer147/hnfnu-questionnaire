<template>
    <el-radio-group v-model="value" @change="handleChange">
        <el-radio
                v-for="item of options"
                :key="item.mark"
                :label="item.mark"
        >{{ item.text }}</el-radio
        >
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
        default: () => ([
          { text: '选项一', mark: true },
          { text: '选项二', mark: false },
        ]),
      },
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {
      handleChange(newValue) {
        this.$emit('change', newValue)
      }
    }
  }
</script>

<style scoped></style>
