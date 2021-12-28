<!--输入框+拓展(按钮)-->
<template>
  <el-input
    v-model="vModelValue"
    v-bind="$attrs"
    @input="formItemEvent('input', prop, vModelValue, $event)"
    @blur="formItemEvent('blur', prop, vModelValue, $event)"
    @focus="formItemEvent('focus', prop, vModelValue, $event)"
    @change="formItemEvent('change', prop, vModelValue, $event)"
    @clear="formItemEvent('clear', prop, vModelValue, $event)"
    @keyup.enter.native="formItemEvent('keyupEnter', prop, vModelValue, $event)"
  >
    <el-button
      slot="append"
      icon="el-icon-more expanded"
      @click="formItemEvent('expandEvent', prop, vModelValue, $event)"
    />
  </el-input>
</template>
<script>
import { Input as ElInput } from 'element-ui'
import { vModelMixin } from '@/mixins'

export default {
  name: 'InputExpandButton',
  components: { ElInput },
  mixins: [vModelMixin],
  data() {
    return {}
  },
  methods: {
    formItemEvent(event, prop, value, e) {
      this.$emit('formItemEvent', {
        event,
        prop,
        value,
        e,
      })
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
