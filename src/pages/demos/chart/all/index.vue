<template>
  <Container type="ghost">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <ChartCardHeader
            title="G2LineBase"
            slot="header"
            @refresh="refresh"></ChartCardHeader>
          <G2AreaBase
            v-bind="chart[7]"
            @ready="isReady(7)"
            :ref="chart[7].refName"></G2AreaBase>
        </el-card>
      </el-col>
    </el-row>
    <div>{{ready}}</div>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      chart: [
        {
          api: {url: '/api/chart/G2Line', data: {type: 'base'}},
          refName: 'G2LineBase',
          ready: true,
          data: []
        },
        {
          api: {url: '/api/chart/G2Line', data: {type: 'step'}},
          refName: 'G2LineStep',
          ready: true,
          data: []
        },
        {
          api: {url: '/api/chart/G2Column', data: {type: 'base'}},
          refName: 'G2ColumnBase',
          ready: true,
          data: []
        },
        {
          api: {url: '/api/chart/G2Bar', data: {type: 'base'}},
          refName: 'G2BarBase',
          ready: true,
          data: []
        },
        {
          api: {url: '/api/chart/G2Pie', data: {type: 'base'}},
          refName: 'G2PieBase',
          ready: true,
          data: []
        },
        {
          api: {url: '/api/chart/G2NightingaleRose', data: {type: 'base'}},
          refName: 'G2NightingaleRoseBase',
          ready: true,
          data: []
        },
        {
          api: {url: '/api/chart/G2Radar', data: {type: 'base'}},
          refName: 'G2RadarBase',
          ready: true,
          data: []
        },
        {
          api: {url: '/api/chart/G2Area', data: {type: 'base'}},
          refName: 'G2AreaBase',
          ready: false,
          data: []
        }
      ]
    }
  },
  computed: {
    ready () {
      return !this.chart.find(e => !e.ready)
    }
  },
  watch: {
    ready (ready) {
      console.log(ready)
      if (ready) {
        this.showInfo()
      }
    }
  },
  methods: {
    // 显示提示
    showInfo () {
      this.$notify({
        title: '提示',
        message: '点击卡片右上角的刷新按钮可以重新载入某个图表的数据',
        duration: 10000
      })
    },
    // 图表 mounted
    isReady (index) {
      this.chart[index].ready = true
    },
    refresh () {
      console.log('ok')
    }
  },
  components: {
    ChartCardHeader: () => import('./components/ChartCardHeader')
  }
}
</script>

<style scoped>

</style>
