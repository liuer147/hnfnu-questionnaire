<template>
  <div class="page-search">
    <MyForm :form-items="searchItems" :form-data.sync="searchData" :rules="rules" :layout="layout" ref="MyForm">
      <template #footer>
        <div class="operator">
          <el-button type="primary" size="medium"> 搜索 </el-button>
          <el-button size="medium" @click="handleReset"> 重置 </el-button>
        </div>
      </template>
    </MyForm>
  </div>
</template>

<script>
import MyForm from '@/base-comp/my-form.vue'
import { initSearchData } from './use-init'
export default {
  name: 'page-search',
  components: {
    MyForm,
  },
  props: {
    page: {
      type: String,
      required: true,
    },
    searchItems: {
      type: Array,
      required: true,
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    layout: {
      type: Object,
      default: () => ({ xs: 24, sm: 12, md: 8, lg: 8, xl: 8 }),
    },
  },
  data() {
    return {
      searchData: initSearchData(this.searchItems),
    }
  },
  methods: {
    handleReset() {
      this.$refs.MyForm?.resetForm()
    },
  },
}
</script>

<style lang="scss" scoped>
.page-search {
  background-color: white;
  padding: 10px 20px;
  position: relative;
  .operator {
    text-align: center;
    white-space: nowrap;
  }
}
</style>
