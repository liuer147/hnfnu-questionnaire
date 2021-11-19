<template>
  <div>
    <PageSearch :search-items="formItems" :rules="rules" page="self" />
    <PageContent :table-columns="tableColumns" page="self" />
  </div>
</template>

<script>
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
