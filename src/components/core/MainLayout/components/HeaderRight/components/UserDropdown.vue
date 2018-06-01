<template>
  <el-dropdown class="dd-mr">
      <span class="el-dropdown-link">
        您好<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item><Icon name="user-circle-o" />个人中心</el-dropdown-item>
      <el-dropdown-item>退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {}
</script>

<style scoped>
  .el-dropdown-link{
    cursor: pointer;
  }
</style>
