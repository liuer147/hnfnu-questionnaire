<template>
  <div class="questionnaire">
    <div class="count-down-timer" >
      <p>剩余作答时间</p>
      <count-down v-slot="timeObj" time="120" :isMilliSecond="true">
        {{ timeObj.mm }} : {{ timeObj.ss }}
      </count-down>
    </div>
    <div class="questionnaire-content" >
      <h2 class="title" >{{ title }}</h2>
      <question-item v-for="(item, index) of questions" :key="index" v-model="answer[index]" v-bind="item" />
    </div>
    <div class="submit-button">
      <el-button  type="primary" @click="handleSubmit">交卷</el-button>
    </div>

  </div>
</template>

<script>
import CountDown from './components/countDown'
import QuestionItem from './components/questionItem'
import { questions, validateSelected } from './config'
export default {
  name: 'Questionnaire',
  components: {
    CountDown,
    QuestionItem
  },
  data() {
    return {
      questions,
      title: '这货不是试卷',
      answer: [],
    }
  },
  methods: {
    handleSubmit() {
       const isAll = this.questions.every((item, index) => validateSelected(this.answer[index], item.type))
      if (!isAll) this.$message.warning('存在题目未选择')
      else this.$message.success('恭喜完成答题')
    }
  }
}
</script>

<style lang="scss" scoped>
  .questionnaire {
    position: relative;
    height: 100%;
    background: #98dafa;
    .count-down-timer {
      position: fixed;
      left: 50px;
      top: 50px;
    }
    .questionnaire-content {
      width: 50%;
      margin: 0 auto;
      background: white;
      .title {
        text-align: center;
      }
    }
    .submit-button {
      text-align: center;
    }
  }
</style>
