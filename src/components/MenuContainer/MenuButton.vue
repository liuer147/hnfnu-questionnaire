<template>
  <div class="menu-box" @mousedown.stop>
    <al-button @click="isMenuShow = !isMenuShow">{{ label }} <i class="el-icon-arrow-down" /></al-button>
    <menu-container v-model="isMenuShow" :menu-list="menuList" @buttonClick="buttonClick" />
  </div>
</template>

<script>
import MenuContainer from './MenuContainer'
export default {
  name: 'MenuButton',
  components: {
    MenuContainer,
  },
  props: {
    label: {
      type: String,
      default: '按钮',
    },
    menuList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      isMenuShow: false,
    }
  },
  methods: {
    buttonClick(data) {
      this.$emit('buttonClick', data)
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-box {
  position: relative;
  display: inline-block;
}
</style>
