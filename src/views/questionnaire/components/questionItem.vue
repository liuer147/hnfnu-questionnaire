<template>
  <div class="question-item">
    <p class="question-text">
      {{ index }}、{{ text }}
    </p>
    <div class="question-options">
      <componnet
        :is="questionItemComp"
        @change="handleChange"
        :options="options.length > 0 ? options : undefined"
        v-bind="compConfig"
      />
    </div>
    <div v-if="analysis">
      <div v-if="analysis && analysis.success">
        <p class="message">
          <span class="">回答正确</span>
        </p>
      </div>
      <div v-else>
        <p class="message">
          <span class="error">回答错误</span>
        </p>
        <div class="message">
          <p class="analysis-title">正确答案:</p>
          <span>我是正确答案</span>
        </div>
      </div>
    </div>
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
    QuestionItemCheckBox,
    QuestionItemJudge,
    QuestionItemRadio,
  },
  mixins: [vModelMixin],
  props: {
    text: {
      type: String,
      default: '这货不是题目',
    },
    options: {
      type: Array,
      default: () => [],
    },
    index: {
      type: Number
    },
    type: {
      type: Number,
      default: 0,
    },
    analysis: {
      type: Object,
      default: null
    },
    compConfig: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    questionItemComp() {
      const mapObj = {
        0: QuestionItemRadio,
        1: QuestionItemCheckBox,
        2: QuestionItemJudge,
      }
      return mapObj[this.type]
    },
  },
  methods: {
    handleChange(val) {
      this.vModelValue = val
    },
  },
}
</script>

<style lang="scss" scoped>
.question-item {
  border-bottom: 1px solid #eee;
  color: #6a6a6a;
  padding: 5px 5px 10px 5px;
  .question-text {
    font-size: 15px;
    color: #444444;
    font-weight: bold;
    height: auto;
    line-height: 20px;
    margin: 5px 0 15px 0;
  }
  .question-options {
    padding: 0 15px;
  }
  .message {
    line-height: 30px;
    background: #f7f7f7;
    border-radius: 10px;
    padding: 0 15px;
    margin: 10px 15px;
    .analysis-title {
      color: #78c47c;
    }
    .error {
      color: red;
    }
    .success {
      color: #2b93ff;
    }
  }
}
</style>
