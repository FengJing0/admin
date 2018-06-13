<template>
  <el-dropdown class="dd-mr">
      <span class="el-dropdown-link">
        您好<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="active('demo-business-user-center-home')"><Icon name="user-circle-o" />   个人中心</el-dropdown-item>
      <el-dropdown-item @click.native="loginOut"><Icon name="power-off"></Icon>  退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  methods: {
    active (name) {
      this.$router.push({
        name: name
      })
    },
    loginOut () {
      this.$confirm('确定退出登录吗?', '退出登录', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        Cookies.remove('token')
        this.$router.push({
          name: 'login'
        })
      }).catch()
    }
  }
}
</script>

<style scoped>
  .el-dropdown-link{
    cursor: pointer;
  }
</style>
