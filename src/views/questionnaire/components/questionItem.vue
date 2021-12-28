<template>
  <div class="question-item">
      <p>{{ text }}</p>
      <componnet
        :is="questionItemComp"
        @change="handleChange"
        :options="options.length > 0 ? options : undefined"
      />
  </div>
</template>

<script>
import QuestionItemRadio from './components/questionItemRadio'
import QuestionItemCheckBox from './components/questionItemCheckBox'
import QuestionItemJudge from './components/questionItemJudge'

import { vModelMixin } from '@/mixins'
export default {
  name: 'QuestionItem',
  components: {
    QuestionItemCheckBox, QuestionItemJudge, QuestionItemRadio
  },
  mixins: [vModelMixin],
  props: {
    text: {
      type: String,
      default: '这货不是题目'
    },
    options: {
      type: Array,
      default: () => ([])
    },
    type: {
      type: Number,
      default: 0
    }
  },
  computed: {
    questionItemComp() {
      const mapObj = {
        0: QuestionItemRadio,
        1: QuestionItemCheckBox,
        2: QuestionItemJudge
      }
      return mapObj[this.type]
    }
  },
  methods: {
    handleChange(val) {
      this.vModelValue = val
    }
  }
}
</script>

<style lang="scss" scoped>
.question-item {
    border-bottom: 1px solid #eee;
}
</style>
