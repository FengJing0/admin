<template>
  <Container type="ghost">
    <ChartDemoCard></ChartDemoCard>
    <el-card class="dd-mt">
      <Markdown url="/static/md/组件 - 图表.md"></Markdown>
    </el-card>
  </Container>
</template>

<script>
import publicMixin from './mixins/public'
export default {
  mixins: [
    publicMixin
  ],
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
