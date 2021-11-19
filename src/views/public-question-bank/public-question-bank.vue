<template>
  <div>
    <PageSearch :search-items="formItems" :rules="rules" page="public" />
    <PageContent :table-columns="tableColumns" page="public" />
  </div>
</template>

<script>
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import { rules, formItems } from './search.config'
import { tableColumns } from './content.config'
export default {
  name: 'public-question-bank',
  components: {
    PageSearch,
    PageContent,
  },
  data() {
    return {
      rules,
      formItems,
      tableColumns
    }
  },
}
</script>

<style lang="scss" scoped></style>
