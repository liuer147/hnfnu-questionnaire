<template>
  <div class="nav-header">
    <div class="icon" @click="handleCollapse">
      <i class="el-icon-s-fold" />
    </div>
    <div class="header">
      <el-breadcrumb>
        <el-breadcrumb-item>
          <router-link to="/"> 首页 </router-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item v-for="item of breadList" :key="item.name">
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="userInfo">
        <div class="role">{{ myRole }}</div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <span>{{ user.username }}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>{{ user.mailbox }}</el-dropdown-item>
            <el-dropdown-item>修改信息</el-dropdown-item>
            <el-dropdown-item divided @click.native="handleLogout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import menus from '../config/menu.config'
import role from '../config/role.config'
export default {
  name: 'nav-header',
  data() {
    return {
      breadList: [],
      isCollapse: false,
      myRole: role,
    }
  },
  computed: {
    user() {
      return this.$store.state.user || {}
    },
  },
  watch: {
    $route: {
      handler(to) {
        // $对于当前路由的变化，不能通过在data里设置属性，然后再监听这个属性看其是否变化来判断当前路由是否变化
        this.breadList = this.getBreadList(to.fullPath)
      },
      immediate: true,
    },
  },
  // $ 计算引用属性，若是引用不改变，其是不会发生变化的,
  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse
      this.$emit('collapse', this.isCollapse)
    },
    getBreadList(currPath) {
      const list = []
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].type === 1) {
          const children = menus[i].children
          for (let j = 0; j < children.length; j++) {
            if (children[j].path === currPath) {
              list.push({ name: menus[i].name })
              list.push({ name: children[j].name })
            }
          }
        }
      }
      return list
    },
    handleLogout() {
      this.$store.dispatch('logout')
      this.$router.replace('/login')
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-header {
  display: flex;
  align-items: center;
  height: 100%;
  .icon {
    font-size: 20px;
    margin-right: 15px;
    cursor: pointer;
    font-weight: bolder;
  }
  .header {
    width: 100%;
    display: flex;
    padding-right: 20px;
    justify-content: space-between;
    align-items: center;
    min-width: 400px;
    .userInfo {
      display: flex;
      align-items: center;
      .role {
        width: 30px;
        height: 15px;
        border-radius: 5px;
        padding: 3px 5px;
        background-color: #bee9fc;
        border: 1px solid #1296db;
        text-align: center;
        line-height: 15px;
        font-size: 10px;
        color: #1296db;
        margin-right: 5px;
      }
    }
  }
}
</style>
