<template>
  <div>
    <PageSearch
      :search-items="formItems"
      :rules="rules"
      page="self-question-bank"
    />
    <PageContent :table-columns="tableColumns" />
  </div>
</template>

<script>
// $当前的主要问题是什么？
// $退出登录后，添加过的路由仍然是存在的，刷新也存在
// $菜单也是仍然存在的，刷新却没了

import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import { formItems, rules } from './search.config'
import { tableColumns } from './content.config'
export default {
  name: 'self-question-bank',
  components: {
    PageSearch,
    PageContent,
  },
  data() {
    return {
      formItems, // $等会应该试一下看不放在data里面会怎样
      rules,
      tableColumns,
    }
  },
}
</script>

<style lang="scss" scoped></style>
