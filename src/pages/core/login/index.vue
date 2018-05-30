<template>
  <div class="login-page">
    <div id="login" class="bg layer"></div>
    <div class="layer flex-center">
      <div class="logo-group">
        <img src="@/assets/image/logo/w500.png" alt="">
      </div>
      <div class="form-group">
        <el-card>
          <el-form>
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
              <el-input type="text" v-model="formLogin.code" placeholder="- - - -">
                <template slot="prepend">验证码</template>
                <template slot="append">
                  <img class="login-code" src="static/image/login-code.png" alt="">
                </template>
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
      }
    }
  },
  methods: {
    submit () {
      console.log('ok')
    }
  },
  mounted () {
    window.particlesJS('login', config)
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/public.scss';
.login-page {
  background-color: $color-primary;
  height: 100%;
  position: relative;
  .layer{
    position: absolute;
    height: 100%;
    width:100%;
    &.flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .bg{
    canvas{
      display: block;
      margin: 0;
      padding: 0;
    }
  }
  .logo-group{
    margin-top: -75px;
    position: relative;
    top: 75px;
    img{
      width:140px;
    }
  }
}
</style>
