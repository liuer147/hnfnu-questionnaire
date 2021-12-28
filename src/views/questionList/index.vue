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
    getPageTableList() {
      setTimeout(() => {
        if (this.pageData.pageNum === 1) {
          this.tableData = [
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '0',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '2',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '0',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
          ]
        } else {
          this.tableData = [
            {
              type: '0',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
            {
              type: '1',
              text: '我是这个题目的题干',
              createTime: '2021-12-28 10:11:35',
            },
          ]
        }
        this.pageData.total = 22
      }, 0)
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
