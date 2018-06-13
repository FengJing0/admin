<template>
  <div class="login-page">
    <div id="login" class="layer bg"></div>
    <div class="flex-center">
      <div class="logo-group">
        <img src="@/assets/image/logo/w500.png" alt="">
      </div>
      <div class="form-group">
        <el-card>
          <el-form :model="formLogin" :rules="rules" ref="loginForm">
            <el-form-item  prop="username">
              <el-input type="text" v-model="formLogin.username" placeholder="用户名">
                <i slot="prepend" class="fa fa-user-circle-o"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="formLogin.password" placeholder="密码">
                <i slot="prepend" class="fa fa-keyboard-o"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input type="text" v-model="formLogin.code" placeholder="请输入验证码">
                <span slot="prepend">验证码</span>
                <span slot="append">
                  <img class="login-code" src="static/image/login-code.png" alt="">
                </span>
              </el-input>
            </el-form-item>
            <el-button @click="submit" type="primary" class="button-login">登陆</el-button>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import config from './config/default'
import Cookies from 'js-cookie'
// 配置地址
// https://vincentgarreau.com/particles.js/#default
require('particles.js')

export default {
  data () {
    return {
      formLogin: {
        username: 'admin',
        password: 'admin',
        code: 'v9am'
      },
      rules: {
        username: {required: true, message: '请输入用户名', trigger: 'blur'},
        password: {required: true, message: '请输入密码', trigger: 'blur'},
        code: {required: true, message: '请输入验证码', trigger: 'blur'}
      }
    }
  },
  methods: {
    submit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$axios({
            method: 'POST',
            url: '/api/login',
            data: {
              username: this.formLogin.username,
              password: this.formLogin.password,
              code: this.formLogin.code
            }
          }).then(res => {
            const setting = {
              expires: 1
            }
            // Cookies设置
            // 不要像下面这样写 请改写为你的保存用户逻辑
            // 保存用户名密码 不等于真正保存到了本地
            // Cookies.set('username', res.username, setting)
            // Cookies.set('password', res.password, setting)
            Cookies.set('token', res.token, setting)
            this.$router.push({
              name: 'index'
            })
          }).catch(err => console.log('错误信息' + err))
        } else {
          return false
        }
      })
    }
  },
  mounted () {
    window.particlesJS('login', config)
  }
}
</script>

<style lang="scss">
@import '@/assets/style/public.scss';
.login-page {
  background-color: $color-primary;
  height: 100%;
  position: relative;
  // 层
  .layer {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .flex-center {
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  // 背景
  .bg {
    canvas {
      display: block;
      margin: 0px;
      padding: 0px;
    }
  }
  // logo
  .logo-group {
    margin-top: -145px;
    position: relative;
    top: 75px;
    img {
      height: 140px;
    }
  }
  // 登陆表单
  .form-group {
    width: 300px;
    // 重新设置卡片阴影
    .el-card {
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
      .el-card__body {
        padding-top: 70px;
      }
    }
    // 登陆按钮
    .button-login {
      width: 100%;
    }
    // 输入框左边的图表区域缩窄
    .el-input-group__prepend {
      padding: 0px 14px;
    }
    .login-code {
      height: 40px - 2px;
      display: block;
      margin: 0px -20px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }
  // 帮助按钮
  .button-help {
    width: 300px;
    margin-top: $margin;
  }
}
</style>
