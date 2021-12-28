<template>
  <al-checkbox v-model="tableRow[prop]" :bind-config="bindConfig" />
</template>

<script>
import AlCheckbox from '@/components/element-ui/Form/Checkbox'
import { tablePropsMixin } from '../tableMixins'
export default {
  name: 'TableItemCheck',
  components: {
    AlCheckbox,
  },
  mixins: [tablePropsMixin],
}
</script>

<style lang="scss" scoped></style>
