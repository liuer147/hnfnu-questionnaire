<template>
  <div class="questionnaire">
    <div class="questionnaire-content">
      <div class="content-header">
        <h2 class="title">{{ title }}</h2>
      </div>
      <div class="score-wrapper">
        <div class="score-item">
          <p class="score">{{ score }}</p>
          <img
            src="@/assets/images/score-underline.png"
            class="score-underline"
          />
          <div class="bottom-text">总分100分</div>
        </div>
        <div class="score-item right">
          <p class="correct-num">{{ correctNum }}</p>
          <p class="num-describe">答对</p>
          <div class="bottom-text">共{{ questions.length }}题</div>
        </div>
      </div>
      <question-item
        class="content-item"
        v-for="(item, index) of questions"
        :key="index"
        :index="index + 1"
        v-model="answer[index]"
        v-bind="item"
        :comp-config="{ disabled: true }"
      />
      <div class="submit-button">
        <el-button type="primary" @click="handleSubmit">交卷</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionItem from './components/questionItem'
import { questions, validateSelected } from './config'
export default {
  name: 'Questionnaire',
  components: {
    QuestionItem,
  },
  data() {
    return {
      questions,
      title: '这货不是试卷',
      answer: [],
      score: 70,
      correctNum: 0,
    }
  },
  methods: {
    handleSubmit() {
      const isAll = this.questions.every((item, index) =>
        validateSelected(this.answer[index], item.type)
      )
      if (!isAll) this.$message.warning('存在题目未选择')
      else this.$message.success('恭喜完成答题')
    },
  },
}
</script>

<style lang="scss" scoped>
.questionnaire {
  position: relative;
  background: #98dafa;
  padding: 10px 0;
  .count-down-timer {
    position: fixed;
    left: 50px;
    top: 50px;
    padding: 15px 25px;
    background: white;
  }
  .questionnaire-content {
    width: 920px;
    margin: 0 auto;
    padding: 20px 50px 50px 50px;
    background: white;
    .content-header {
      line-height: 20px;
      text-align: center;
      width: 96%;
      padding: 40px 2% 30px;
      .title {
        text-align: center;
        color: #f5495d;
        font-size: 24px;
        font-weight: bold;
        vertical-align: middle;
        margin: 0;
        padding: 15px 0;
        line-height: 30px;
      }
    }
    .score-wrapper {
      width: 100%;
      display: flex;
      .score-item {
        flex: 1;
        border: 1px solid #efefef;
        height: 122px;
        text-align: center;
        position: relative;
        &.right {
          border-left: none;
        }
        .score {
          font-size: 40px;
          color: #ff6a00;
          word-break: keep-all;
          line-height: 30px;
          text-align: center;
          margin-top: 22px;
        }
        .score-underline {
          background-size: 47px 16px;
          display: inline-block;
          height: 16px;
          width: 47px;
          margin-top: 7px;
        }
        .bottom-text {
          color: #b3b3b3;
          font-size: 12px;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 27px;
          line-height: 27px;
          background: #f7f7f7;
        }
        .correct-num {
          margin-top: 22px;
          line-height: 28px;
          height: 28px;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #262626;
          font-size: 20px;
        }
        .num-describe {
          font-size: 12px;
          color: #999;
          margin-top: 6px;
          line-height: 17px;
        }
      }
    }
    .content-item {
      padding: 10px 15px 10px 15px;
    }
    .submit-button {
      text-align: center;
      margin: 40px 0 10px 0;
    }
  }
}
</style>
