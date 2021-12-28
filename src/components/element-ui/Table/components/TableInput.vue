<template>
  <al-input v-model="tableRow[prop]" :bind-config="bindConfig" />
</template>

<script>
import Input from '@/components/element-ui/Form/Input'
import { tablePropsMixin } from '../tableMixins'

export default {
  name: 'TableInput',
  components: {
    AlInput: Input,
  },
  mixins: [tablePropsMixin],
}
</script>

<style scoped></style>
