<template>
  <al-input v-model="tableRow[prop]" :bind-config="bindConfig">
    <el-button
      slot="append"
      icon="el-icon-more expanded"
      @click="buttonClick"
    />
  </al-input>
</template>

<script>
import Input from 'e/Form/Input'
import { tablePropsMixin } from '../tableMixins'

export default {
  name: 'TableInputExpandBtn',
  components: {
    AlInput: Input,
  },
  mixins: [tablePropsMixin],
  methods: {
    buttonClick() {
      this.$emit('tableEvent', 'tableInputExpand', this.prop, this.scope)
    },
  },
}
</script>

<style lang="scss" scoped>
.expanded {
  font-size: 16px;
}
::v-deep .el-input-group__append {
  padding: 0 10px;
}
</style>
