<template>
  <div>
    <el-form
      :model="modelData"
      :rules="rules"
      ref="formRef"
      label-width="60px"
      hide-required-asterisk
      v-bind="otherConfig"
    >
      <el-row :gutter="10">
        <template v-for="item of formItems">
          <el-col v-bind="layout" :key="item.field">
            <el-form-item :label="item.label" :prop="item.field">
              <el-input
                :type="item.type"
                v-model="modelData[item.field]"
                :placeholder="item.placeholder"
              />
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'my-form',
  props: {
    formData: {
      type: Object,
      required: true,
    },
    formItems: {
      type: Array,
      required: true,
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    layout: {
      type: Object,
      default: () => ({ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }),
    },
    otherConfig: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    modelData: {
      // 什么玩意儿？？？vue2中直接就这样就行了？？？按理说modelData的引用值没修改呀，还是说element-ui内部修改了？
      get() {
        return this.formData
      },
      set(newVal) {
        this.$emit('update:model-data', newVal)
      },
    },
  },
  methods: {
    resetForm() {
      this.$refs.formRef?.resetFields()
    },
    validateForm() {
      let succ = false
      this.$refs.formRef?.validate((valid) => {
        if (valid) {
          succ = true
        } else {
          return false // 注意：这个 return 是在回调函数里面
        }
      })
      return succ
    },
  },
}
</script>

<style lang="scss" scoped></style>
