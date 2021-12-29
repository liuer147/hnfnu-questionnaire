<template>
  <al-select v-model="tableRow[prop]" v-bind="selectConfig" @formChange="formChange" @blur="blur" />
</template>

<script>
import AlSelect from 'e/Form/Select'
import { tablePropsMixin } from '../tableMixins'

export default {
  name: 'TableSelectTest',
  components: {
    AlSelect,
  },
  mixins: [tablePropsMixin],
  computed: {
    selectConfig() {
      return {
        size: 'mini',
        ...this.bindConfig,
      }
    },
  },
  methods: {
    blur() {
      this.tableEvent('selectBlur')
    },
    formChange() {
      this.tableEvent('selectChange')
    },
    tableEvent(type) {
      this.$emit('tableEvent', type, this.prop, this.tableRow)
    },
  },
}
</script>

<style lang="scss" scoped></style>
