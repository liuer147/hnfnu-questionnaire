<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path || item.id">
        <span
          v-if="item.redirect === 'noRedirect' || (!item.redirect && item.path) || index == levelList.length - 1"
          class="no-redirect"
          >{{ item.meta.title }}</span
        >
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
import { breadcrumbBus, PAGE_LEVEL_SET } from '@/components/Breadcrumb/breadcrumbBus'

export default {
  data() {
    return {
      levelList: null,
      eventName: '',
      pageLevelList: [],
    }
  },
  watch: {
    $route() {
      this.clearPageLevel()
      this.getBreadcrumb()
    },
  },
  created() {
    breadcrumbBus.$on(PAGE_LEVEL_SET, this.setPageLevel)
    this.getBreadcrumb()
  },
  destroy() {
    breadcrumbBus.$off(PAGE_LEVEL_SET)
  },
  methods: {
    clearPageLevel() {
      this.pageLevelList = []
      this.eventName = ''
    },
    setPageLevel({ eventName, crumbsList }) {
      // console.log(eventName, crumbsList)
      this.pageLevelList = crumbsList.map((item) => {
        return {
          ...item,
          meta: { title: item.name },
        }
      })
      this.eventName = eventName
      this.getBreadcrumb()
    },
    // 面包屑获取
    getBreadcrumb() {
      const matched = this.$route.matched.filter((item) => item.meta && item.meta.title)
      // 路由菜单可设置面包屑不显示
      const levelList = matched.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      this.levelList = [...levelList, ...this.pageLevelList]
    },
    pathCompile(path) {
      const { params } = this.$route
      const toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path, name } = item
      // 页面内面包屑
      if (name === this.$route.name || !path) {
        if (this.eventName) breadcrumbBus.$emit(this.eventName, item)
      } else {
        if (redirect) {
          this.$router.push(redirect)
          return
        }
        return
        // this.$router.push(this.pathCompile(path))
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
