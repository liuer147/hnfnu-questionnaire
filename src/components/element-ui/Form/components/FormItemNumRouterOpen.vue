<template>
  <div>
    <span v-if="hasNum" class="label" :style="{ color }" @click="labelClick">{{ vModelValue }}个</span>
    <span v-else>{{ vModelValue }}个</span>
  </div>
</template>

<script>
import { vModelMixin } from '@/mixins'
import { routerOpen } from '@/router/config'

export default {
  name: 'FormItemNumRouterOpen',
  mixins: [vModelMixin],
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: '#238efe',
    },
    /**
     * 路由传递的参数对象
     * key为 参数名 name 取formData[name]为值
     */
    queryObj: {
      type: Object,
      default: () => {
        return {
          //  key:name
        }
      },
    },
    routerName: {
      type: String,
      default: 'id',
    },
    formData: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    hasNum() {
      return this.vModelValue > 0
    },
  },
  methods: {
    labelClick() {
      const query = {}
      for (const key in this.queryObj) {
        const name = this.queryObj[key]
        query[key] = this.formData[name]
      }
      routerOpen({
        name: this.routerName,
        query: query,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.label {
  cursor: pointer;
}
</style>
