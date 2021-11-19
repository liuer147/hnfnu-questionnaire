<template>
  <el-container class="home">
    <el-aside :width="asideWidth" class="menus">
      <NavMenus ref="menus" />
    </el-aside>
    <el-container>
      <el-header class="header">
        <NavHeader @collapse="handleCollapse" />
      </el-header>
      <el-main class="content">
        <transition name="el-fade-in-linear" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenus from '@/components/nav-menu.vue'
import NavHeader from '@/components/nav-header.vue'
export default {
  name: 'home',
  components: {
    NavMenus,
    NavHeader,
  },
  data() {
    return {
      asideWidth: '220px',
    }
  },
  methods: {
    handleCollapse(newVal) {
      this.$refs.menus.isCollapse = newVal
      this.asideWidth = newVal ? '60px' : '220px'
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  .menus {
    background-color: #052646;
    transition: width 0.3s;
  }
  .header {
    border-bottom: 1px solid #666;
    height: 60px;
    min-width: 400px;
  }
  .content {
    height: 100%;
    background-color: #eee;
    min-width: 400px;
    position: relative;
  }
}
</style>
