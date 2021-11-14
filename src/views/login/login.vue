<template>
  <div
    class="login"
    :style="{
      backgroundImage: 'url(' + require('@/assets/images/login-back.jpg') + ')',
    }"
  >
    <ElCard class="card">
      <h2 class="title">一师问卷</h2>
      <MyForm
        ref="myForm"
        :form-items="formItems"
        :form-data.sync="account"
        :rules="rules"
      >
        <template #footer>
          <el-button
            style="width: 100%"
            type="primary"
            @click="handleLogin"
            :loading="loading"
            >登 录</el-button
          >
        </template>
      </MyForm>
    </ElCard>
  </div>
</template>

<script>
import MyForm from '@/base-comp/my-form.vue'
import { rules, formItems } from './login.config'
import { mapActions } from 'vuex'
import { Message } from 'element-ui'
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
        this.$router.replace('/welcome')
      }
      this.loading = false
    },
    ...mapActions(['loginAcc']),
  },
}
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  right: 15%;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  width: 400px;
  padding: 30px;
  .card {
    padding: 30px 40px 50px 40px;
    .title {
      margin-bottom: 30px;
      font-size: 38px;
      font-family: '华文行楷', 'Courier New', Courier, monospace;
    }
  }
}
</style>
