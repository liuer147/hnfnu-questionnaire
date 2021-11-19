<template>
  <div class="nav-menu">
    <div class="header">
      <img class="img" src="@/assets/images/logo.svg" />
      <h2 class="title">一师问卷</h2>
    </div>
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      background-color="#052646"
      text-color="#eee"
      active-text-color="#1296db"
      router
      :style="{ border: 'none' }"
    >
      <template v-for="menu of menus">
        <el-submenu v-if="menu.type === 1" :index="menu.path" :key="menu._id">
          <template #title>
            <i :class="menu.icon" />
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item
            v-for="item of menu.children"
            :key="item._id"
            :index="item.path"
          >
            {{ item.name }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item
          :key="menu._id"
          v-else-if="menu.type === 2"
          :index="menu.path"
        >
          <i :class="menu.icon" />
          <span>{{ menu.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'nav-menu',
  data() {
    return {
      isCollapse: false,
      // activeMenu: this.$route.fullPath  $直接设置属性不能对fullPath进行响应式的侦听,计算属性可以
    }
  },
  computed: {
    activeMenu() {
      return this.$route.fullPath
    },
    menus() {
      return this.$store.getters['users/menus']
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-menu {
  width: 100%;
  border: none;
  background-color: #052646;
  overflow: hidden;
  .header {
    display: flex;
    /* align-items: center; */
    overflow: hidden;
    padding: 5px 10px;
    .img {
      width: 30px;
      height: 30px;
      margin: 5px 15px 5px 7px;
    }
    .title {
      color: #1296db;
      white-space: nowrap;
      font-size: 22px;
      line-height: 46px;
      font-family: '华文行楷', 'Courier New', Courier, monospace;
    }
  }
}
</style>
