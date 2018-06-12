<template>
  <Container type="ghost">
    <ChartDemoCard v-bind="card">
      <G2AreaBase solt-scope="{data}"></G2AreaBase>
    </ChartDemoCard>
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
    return {
      card: {
        api: {
          url: '/api/chart/G2Area',
          data: {
            type: 'base'
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
