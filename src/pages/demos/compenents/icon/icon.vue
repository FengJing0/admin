<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <template slot="header">图标组件</template>
      <Icon></Icon>
      <Icon name="github"></Icon>
      <Icon name="github" style="font-size: 100px;"></Icon>
      <Icon name="github" class="icon-class-demo"></Icon>
    </el-card>
    <el-card>
      <Markdown url="/static/md/组件 - 图标组件.md"></Markdown>
    </el-card>
  </Container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.icon-class-demo{
  transition: all .5s linear;
  font-size: 100px;
  color: #409EFF;
  cursor: pointer;
  user-select: none;
  &:hover{
    color: #F56C6C;
    transform: scale(1.2) rotate(360deg);
  }
}
</style>
