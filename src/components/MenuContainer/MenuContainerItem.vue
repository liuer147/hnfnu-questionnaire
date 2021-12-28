<template>
  <div v-if="menuItem.type === 'link'" class="menu-item menu-item-link" />
  <div
    v-else
    class="menu-item menu-has-icon"
    :class="{ 'menu-item-disabled': menuItem.disabled }"
  >
    <div class="menu-item-button" @click="buttonClick(menuItem)">
      <span v-if="menuItem.icon" class="menu-item-icon">
        <i :class="menuItem.icon" />
      </span>
      <span class="menu-item-text">{{ menuItem.text }}</span>
      <span v-if="menuItem.hotkey" class="menu-item-hotkey">{{
        menuItem.hotkey
      }}</span>
      <span v-if="menuItem.children">
        <i class="el-icon-arrow-right" />
      </span>
    </div>
    <div v-if="menuItem.children" class="menu-container menu-item-submenu">
      <div class="menu-group" @mousedown.stop>
        <menu-container-item
          v-for="(item, index) in menuItem.children"
          :key="item.text === 'link' ? index : item.text"
          :menu-item="item"
          @buttonClick="buttonClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuContainerItem',
  props: {
    menuItem: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  methods: {
    buttonClick(data) {
      // 无子元素且可点击
      if (!data.disabled && !data.children) {
        this.$emit('buttonClick', {
          ...data,
          parentType: [this.menuItem.type].concat(data.parentType),
        })
      }
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
.menu-item {
  position: relative;
  .menu-item-button {
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 28px;
    padding: 0 12px;
    color: #595959;
    text-align: left;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    .menu-item-icon {
      position: absolute;
      top: 50%;
      left: 6px;
      width: 24px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      margin-top: -12px;
      font-size: 13px;
    }
    .menu-item-text {
      padding-right: 56px;
      overflow: hidden;
      font-size: 13px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .menu-item-hotkey {
      font-size: 13px;
      opacity: 0.75;
    }
  }
  //&:hover > .menu-item-button{
  //  color: #262626;
  //  background: #f5f5f5;
  //}
  &:hover > .menu-item-button {
    color: #238efe;
    background: #c7e2ff;
  }
  &:hover .menu-item-submenu {
    opacity: 1;
  }
}
.menu-item-link {
  display: block;
  width: 100%;
  height: 1px;
  margin: 4px 0;
  background: hsla(0, 0%, 58.8%, 0.2);
  pointer-events: none;
}
.menu-item-disabled {
  .menu-item-button {
    color: #595959;
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.4;
  }
}
.menu-has-icon {
  .menu-item-button {
    padding-left: 30px;
    .menu-item-text {
      padding-left: 2px;
    }
  }
}
.menu-item-submenu {
  opacity: 0;
  top: 0;
  left: calc(100% + 5px);
}
</style>
