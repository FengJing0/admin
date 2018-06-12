<template>
  <Container type="ghost">
    <ChartDemoCard v-bind="card" @resize="$refs.chart.resize()">
      <G2BarBase
        slot-scope="{data}"
        ref="chart"
        :data="data"
        v-bind="chart"
        @ready="ready"></G2BarBase>
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
        api: {url: '/api/chart/G2Bar', data: {type: 'base'}}
      },
      chart: {}
    }
  }
}
</script>
