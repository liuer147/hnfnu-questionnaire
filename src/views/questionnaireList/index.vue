<template>
  <table-page
    v-bind="questionnaireListTablePageConfig"
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
import { questionnaireListTablePageConfig } from './config'
export default {
  name: 'QuestionnaireList',
  mixins: [tablePageMixin, confirmMixin],
  components: {
    TablePage,
  },
  data() {
    return {
      questionnaireListTablePageConfig,
      tableData: [],
    }
  },
  created() {
    this.getPageTableList()
  },
  methods: {
    getPageTableList() {
      setTimeout(() => {
        if (this.pageData.pageNum === 1) {
          this.tableData = [
            { id: '10010', name: '问君能有几多愁卷', createTime: '2021-12-28 14:00:00' },
            { id: '10011', name: '静夜诗卷', createTime: '2021-12-28 14:00:00' },
            { id: '10086', name: '这不是试卷', createTime: '2021-12-28 14:00:00' }
          ]
        }
        this.pageData.total = 3
      }, 0)
    },
    tableEvent(eventName, prop, scope) {
      switch (prop) {
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
    async handleDelete() {
      const isConfirm = await this.confirmOperate('是否确认和删除？')
      if (!isConfirm) return
      console.log('delete')
      this.getPageTableList()
    },
  },
}
</script>

<style scoped></style>
