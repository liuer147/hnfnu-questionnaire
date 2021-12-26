<template>
  <div class="page-content" :key="page">
    <div class="table">
      <div class="header">
        <div v-if="hasCreatePermission">
          <el-button size="medium" type="primary" plain @click="create(0)">新增单选</el-button>
          <el-button size="medium" type="primary" plain @click="create(1)">新增多选</el-button>
          <el-button size="medium" type="primary" plain @click="create(2)">新增判断</el-button>
        </div>
      </div>
      <MyTable :key="page" :table-columns="tableColumns" :table-data="tableData" :has-operator-permission="hasOperatorPermission">
        <template #expand="{ row }">
          <ContentQuestion class="question" :type-id="row.typeId" :title="row.text" :options="row.option" :answer="row.answer" />
        </template>
        <template v-for="item of mapColumns" #[item.prop]="{ row }">
          {{ item.map(row[item.prop]) }}
        </template>
        <template #operator v-if="hasOperatorPermission">
          <div class="operator">
            <div class="edit">
              <i class="el-icon-edit" />
              <span>编辑</span>
            </div>
            <div class="delete">
              <i class="el-icon-delete" />
              <span>删除</span>
            </div>
          </div>
        </template>
      </MyTable>
    </div>
    <el-pagination
      v-if="total"
      class="pagination"
      :current-page.sync="pagingData.currentPage"
      background
      layout="prev, pager, next, total"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import MyTable from '@/base-comp/my-table.vue'
import ContentQuestion from '../content-question.vue'
export default {
  name: 'page-content',
  components: {
    MyTable,
    ContentQuestion,
  },
  props: {
    tableColumns: {
      type: Array,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pagingData: {
        currentPage: 1,
        pageSize: 10,
      },
    }
  },
  computed: {
    questionsList() {
      return this.$store.getters[`questions/${this.page}Questions`]
    },
    tableData() {
      this.fetchData()
      const questionsList = this.questionsList
      return questionsList.map((item) => {
        return {
          text: item.content && item.content.text,
          typeId: item.typeId,
          option: item.content && item.content.option,
          username: item.username,
          answer: item.answer,
        }
      })
    },
    mapColumns() {
      return this.tableColumns.filter((item) => item.map)
    },
    total() {
      return this.$store.getters[`questions/${this.page}Total`]
    },
    hasCreatePermission() {
      const permissionPages = ['self']
      return permissionPages.some(item => item === this.page)
    },
    hasOperatorPermission() {
      const permissionPages = ['self']
      return permissionPages.some(item => item === this.page)
    }
  },
  methods: {
    fetchData() {
      const Page = this.page[0].toUpperCase() + this.page.slice(1)
      if (!this.questionsList || this.questionsList.length === 0) {
        this.$store.dispatch(`questions/get${Page}Questions`, this.pagingData)
      }
    },
    create(type) {
      this.$emit('create', type)
    }
  },
}
</script>

<style lang="scss" scoped>
.page-content {
  padding: 10px 20px;
  position: absolute;
  top: 150px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background-color: white;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
  .header {
    padding: 10px 15px;
  }
  .table {
    position: absolute;
    bottom: 45px;
    left: 0;
    right: 0;
    top: 0px;
    overflow-y: scroll;
    .question {
      margin-left: 50px;
    }
    .operator {
      display: flex;
      align-items: center;
      font-size: 12px;
      justify-content: space-around;
      .edit {
        color: rgb(15, 77, 211);
        cursor: pointer;
      }
      .delete {
        color: rgb(226, 107, 92);
        cursor: pointer;
      }
    }
  }

  .pagination {
    position: absolute;
    bottom: 10px;
    right: 20px;
  }
}
</style>
