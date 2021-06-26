<template>
  <div>

    <el-form ref="loginFormRef" :model="loginForm" label-width="0px" align="center" @keyup.enter.native="login()">

        <!-- logo -->
        <div>
          <img src="../assets/logo.png" class="yj" alt=""/>
        </div>

          <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.userName" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item  prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>

        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button @click="login">登录</el-button>
          <el-button @click="resetLoginForm">重置</el-button>
        </el-form-item>

      </el-form>

  </div>
</template>

<script>
export default {
  data: function () {
    return {

      loginForm: {
        userName: '',
        password: ''
      }
    }
  },

  methods: {
    async login () {
      const { data: res } = await this.$http.post('queryUser', this.loginForm)
      console.log('res :>> ', res)
      console.log('userName :>> ', this.loginForm.userName)
      console.log('password :>> ', this.loginForm.password)
      if (res.status === 200) {
        this.$message.success('登录成功！')
        this.$router.push('/home')
      } else {
        this.$message.error('登录失败！')
        this.resetLoginForm()
      }
    },

    resetLoginForm () {
      // console.log(this)
      this.loginForm.userName = ''
      this.loginForm.password = ''
    }
  }
}
</script>

<style lang="less" scoped>
.yj {
  background-color: #000000;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
