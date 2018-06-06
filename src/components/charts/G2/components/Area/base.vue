<template>
  <div ref="chart" style="height:100%;">Area</div>
</template>

<script>
import G2 from '@/components/charts/G2/mixins/G2'
export default {
  mixins: [
    G2
  ],
  data () {
    return {}
  },
  methods: {
    init () {
      // mixin 中提供 createChart
      this.createChart()
      this.chart.source(this.data)
      this.chart.scale({
        y: {
          min: 0
        },
        x: {
          range: [0, 1]
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
