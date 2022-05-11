<template>
  <div class="site-login-page">
    <div class="site-login-form__container">
      <div class="login-form">
        <div class="login-title">用户登录</div>
        <el-form ref="loginForm" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="loading" @click="handleLoginSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="site-login-bg"></div>
  </div>
</template>

<script>
  import { post } from '@/utils/request'
  import { userLoginUrl } from '@/api'
  import { setToken } from '@/utils/auth'
  export default {
    name: 'Login',
    data() {
      return {
        loading: false,
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      handleLoginSubmit() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.loading = true
            post(userLoginUrl).then(res => {
              console.log(res)
              this.$message.success(res.msg)
              this.loading = false
              setToken(res.token)
              this.$router.replace('/')
            }).catch(err => {
              this.loading = false
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
  };
</script>

<style lang="scss" scoped>
.site-login-page {
  background: #f2f2f2;
  height: 100%;
  display: flex;
  .site-login-form__container {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 10;
  }

  .login-form {
    width: 460px;
    box-sizing: border-box;
    background: #fff;
    padding: 40px 50px;
    border-radius: 4px;
    box-shadow: 0 5px 15px #333;
  }
  .login-title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 14px;
  }
  .site-login-functions {
    margin-top: 20px;
  }

  .site-login-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.8;
    background: url("../../assets/bg.jpg") no-repeat center 100%;
  }
}
</style>