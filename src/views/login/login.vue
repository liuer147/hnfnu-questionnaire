<template>
  <div class="login-page">
    <div class="logo">
      <img src="@/assets/images/login-top.jpg" />
    </div>
    <ElCard class="login card">
      <h2 class="title">一师问卷</h2>
      <MyForm
        ref="myForm"
        :form-items="formItems"
        :form-data.sync="account"
        :rules="rules"
      >
        <template #footer>
          <el-button
            style="width: 100%; font-size: 18px"
            type="primary"
            @click="handleLogin"
            :loading="loading"
            >登 录</el-button
          >
        </template>
      </MyForm>
    </ElCard>
    <div
      class="login-back"
      :style="{
        background:
          'url(' +
          require('@/assets/images/login-back.jpg') +
          ') no-repeat center/cover',
      }"
    ></div>
  </div>
</template>

<script>
import MyForm from '@/base-comp/my-form.vue'
import { rules, formItems } from './login.config'
import { mapActions } from 'vuex'
import { Message } from 'element-ui'
import loadRoutes from '@/utils/load-routes'
export default {
  name: 'login',
  components: {
    MyForm,
  },
  data() {
    return {
      account: {
        userId: '18401050101',
        password: 'admin',
      },
      loading: false,
      rules,
      formItems,
    }
  },
  methods: {
    async handleLogin() {
      const succ = this.$refs.myForm?.validateForm()
      if (!succ) return
      this.loading = true
      const loginSucc = await this.loginAcc(this.account)
      if (loginSucc) {
        Message.success('登录成功')
        loadRoutes(this.$router)
        this.$router.replace('/welcome')
      }
      this.loading = false
    },
    ...mapActions(['loginAcc']),
  },
}
</script>

<style lang="scss" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  min-width: 700px;
  min-height: 600px;
  overflow: hidden;
  position: relative;
  .login {
    position: absolute;
    right: 15%;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 400px;
    padding: 30px;
  }
  .logo {
    text-align: center;
    min-width: 1000px;
  }
  .login-back {
    height: 570px;
    width: 100%;
  }
  .card {
    padding: 30px 40px 50px 40px;
    background-color: rgba($color: #fff, $alpha: 0.6);
    .title {
      margin-bottom: 30px;
      font-size: 38px;
      font-family: '华文行楷', 'Courier New', Courier, monospace;
    }
  }
}
</style>
