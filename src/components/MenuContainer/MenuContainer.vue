<template>
  <div
    v-show="vModelValue"
    class="menu-container"
    :class="{ 'menu-container-hide': !vModelValue }"
    :style="{ top: top, left: left }"
  >
    <div class="menu-group" @mousedown.stop>
      <menu-container-item
        v-for="(item, index) in menuList"
        :key="item.text === 'link' ? index : item.text"
        :menu-item="item"
        @buttonClick="buttonClick"
      />
    </div>
  </div>
</template>

<script>
import MenuContainerItem from './MenuContainerItem'
import { vModelMixin } from '@/mixins'

export default {
  name: 'MenuContainer',
  components: { MenuContainerItem },
  mixins: [vModelMixin],
  props: {
    top: {
      type: String,
      default: '35px',
    },
    left: {
      type: String,
      default: '0px',
    },
    menuList: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      menuHover: '',
    }
  },
  mounted() {
    document.body.addEventListener('mousedown', this.menuHide)
  },
  destroyed() {
    document.body.removeEventListener('mousedown', this.menuHide)
  },
  methods: {
    buttonClick(data) {
      this.$emit('buttonClick', data)
      this.menuHide()
    },
    menuHide() {
      this.vModelValue = false
      this.menuHover = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-container {
  position: absolute;
  transition: opacity 0.5s;
  .menu-group {
    display: inline-block;
    min-width: 160px;
    max-width: 300px;
    min-height: 32px;
    margin: 0;
    padding: 4px 0;
    background-color: #fff;
    outline: 0;
    box-shadow: 0 2px 10px rgb(0 0 0 / 12%);
  }
}
.menu-container-hide {
  position: absolute;
  opacity: 0;
}
</style>
