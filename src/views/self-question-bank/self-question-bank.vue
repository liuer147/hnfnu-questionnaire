<template>
  <div>
    <PageSearch :search-items="formItems" :rules="rules" page="self" />
    <PageContent
      :table-columns="tableColumns"
      page="self"
      @create="handleCreate"
      @edit="handleEdit"
    />
    <!--    <QuestionDialog-->
    <!--      ref="dialog"-->
    <!--      :type="QuestionType"-->
    <!--      :question.sync="question"-->
    <!--      :dialog-items="dialogItems"-->
    <!--      :rules="dialogRules"-->
    <!--      @close="handleClose"-->
    <!--      @submit="handleCreateSubmit"-->
    <!--    />-->
  </div>
</template>

<script>
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
// import QuestionDialog from '@/components/question-dialog/question-dialog.vue'
import { formItems, rules } from './search.config'
import { tableColumns } from './content.config'
// import { createQuestion, createDialogItems, dialogRules } from './dialog.config'
export default {
  name: 'self-question-bank',
  components: {
    PageSearch,
    PageContent,
    // QuestionDialog,
  },
  data() {
    return {
      formItems, // $等会应该试一下看不放在data里面会怎样
      rules,
      tableColumns,
      dialogItems: [],
      // dialogRules,
      question: {},
      QuestionType: 0,
    }
  },
  methods: {
    handleCreate(type = 0) {
      this.question = createQuestion(type)
      this.dialogItems = createDialogItems(type)
      this.QuestionType = type
      this.$refs.dialog.isVisible = true
    },
    handleEdit() {},
    handleClose() {
      console.log('close')
      this.question = createQuestion()
    },
    handleCreateSubmit() {
      this.$store.dispatch('questions/createQuestion', this.question)
    },
  },
}
</script>

<style lang="scss" scoped></style>
