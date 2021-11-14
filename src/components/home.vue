<template>
  <div>
    <div>home</div>
    <ElButton type="primary">GG</ElButton>
    <router-view></router-view>
  </div>
</template>

<script>
import { login } from '../service/users'
export default {
  mounted() {
    login({ userId: '18401050101', password: 'admin' }).then((res) => {
      console.log(res)
    })
  },
}
</script>

<style lang="scss" scoped></style>
