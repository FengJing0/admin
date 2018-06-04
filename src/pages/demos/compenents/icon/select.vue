<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <template slot="header">图标选择器</template>
      <Icon :name="icon"></Icon>
      <IconSelect v-model="icon"></IconSelect>
    </el-card>
    <el-card>
      <Markdown url="/static/md/组件 - 图标选择器.md"></Markdown>
    </el-card>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      icon:''
    }
  }
}
</script>

<style scoped>

</style>
