<template>
  <al-symbol-icon class="item-symbol-icon" :icon="tableColumnValue" />
</template>

<script>
import { tablePropsMixin } from 'e/Table/tableMixins'
export default {
  name: 'TableItemIcon',
  mixins: [tablePropsMixin],
}
</script>

<style lang="scss" scoped></style>
