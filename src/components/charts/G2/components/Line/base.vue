<template>
  <!-- 如果需要开启自动高度功能 需要在这里设置 style="height: 100%;" -->
  <div ref="chart" style="height: 100%;"></div>
</template>

<script>
import G2 from '@/components/charts/G2/mixins/G2'
export default {
  mixins: [
    G2
  ],
  methods: {
    init () {
      // mixin 中提供 createChart
      this.createChart()
      this.chart.source(this.data)
      this.chart.scale({
        // 设置y轴最小值，不设置即显示负值
        y: {
          min: 0
        },
        x: {
          range: [0, 1]
        }
      })
      this.chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      this.chart.line().position('x*y')
      this.chart.point().position('x*y').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
      })
      // 渲染图表
      this.chart.render()
    },
    // 数据源改变 重新渲染新的数据
    changeData () {
      this.chart.changeData(this.data)
    }
  }
}
</script>
