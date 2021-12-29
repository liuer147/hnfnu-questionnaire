<template>
  <table-page
    v-bind="questionListTablePageConfig"
    :page-data="pageData"
    :table-data="tableData"
    @tableEvent="tableEvent"
    @handleSizeChange="handleSizeChange"
    @handleCurrentChange="handleCurrentChange"
  />
</template>

<script>
import TablePage from '@/components/Page/TablePage'
import { tablePageMixin, confirmMixin } from '@/mixins'
import { questionListTablePageConfig } from './config'
import { getSelfQuestionsByUserId, deleteQuestionByid } from '@/api/questions'
export default {
  name: 'QuestionList',
  mixins: [tablePageMixin, confirmMixin],
  components: {
    TablePage,
  },
  data() {
    return {
      questionListTablePageConfig,
      tableData: [],
    }
  },
  created() {
    this.getPageTableList()
  },
  methods: {
    async getPageTableList() {
      const params = {
        currentPage: this.pageData.pageNum,
        pageSize: this.pageData.pageSize,
      }
      const { total, records } = await getSelfQuestionsByUserId(this.$store.getters['users/userId'], params)
      this.tableData =
        records &&
        records.map((item) => ({
          type: item.typeId,
          userName: item.userName,
          text: item.content.text,
          questionId: item.questionId,
        }))
      this.pageData.total = total
    },
    tableEvent(eventName, prop, scope) {
      switch (prop) {
        case 'preView':
          console.log('preView')
          break
        case 'delete':
          this.handleDelete(scope.row)
          break
        case 'edit':
          console.log('edit')
          break
        default:
          console.warn(eventName, prop, scope)
      }
    },
    async handleDelete(row) {
      const isConfirm = await this.confirmOperate('是否确认和删除？')
      if (!isConfirm) return
      const res = await deleteQuestionByid(row.questionId)
      console.log(res)
      this.getPageTableList()
    },
  },
}
</script>

<style scoped></style>
