<template>
  <Container type="ghost" :responsive="true" class="demo-chart-index">
    <GridLayout v-bind="layout"  @layout-updated="layoutUpdatedHandler">
      <GridItem v-bind="layout.layout[0]" @resized="handleResized(chart[0].refName)">
        <el-card class="header-in">
          <ChartCardHeader
            :title="chart[0].refName"
            slot="header"
            @refresh="handleRefreshData(0)">
          </ChartCardHeader>
            <Loading :loading="!ready"></Loading>
            <G2LineBase
              v-bind="chart[0]"
              @ready="isReady(0)"
              :ref="chart[0].refName"
              :autoInit="true"></G2LineBase>
        </el-card>
      </GridItem>
      <GridItem v-bind="layout.layout[1]" @resized="handleResized(chart[1].refName)">
        <el-card class="header-in">
          <Loading :loading="!ready"></Loading>
          <ChartCardHeader
            :title="chart[1].refName"
            slot="header"
            @refresh="handleRefreshData(1)"></ChartCardHeader>
          <G2LineStep
            v-bind="chart[1]"
            @ready="isReady(1)"
            :ref="chart[1].refName"
            :autoInit="true"></G2LineStep>
        </el-card>
      </GridItem>
      <GridItem v-bind="layout.layout[2]" @resized="handleResized(chart[2].refName)">
        <el-card class="header-in">
          <Loading :loading="!ready"></Loading>
          <ChartCardHeader
            :title="chart[2].refName"
            slot="header"
            @refresh="handleRefreshData(2)"></ChartCardHeader>
          <G2ColumnBase
            v-bind="chart[2]"
            @ready="isReady(2)"
            :ref="chart[2].refName"
            :autoInit="true"></G2ColumnBase>
        </el-card>
      </GridItem>
      <GridItem v-bind="layout.layout[3]" @resized="handleResized(chart[3].refName)">
        <el-card class="header-in">
          <ChartCardHeader
            :title="chart[3].refName"
            slot="header"
            @refresh="handleRefreshData(3)"></ChartCardHeader>
          <Loading :loading="!ready"></Loading>
          <G2BarBase
            v-bind="chart[3]"
            @ready="isReady(3)"
            :ref="chart[3].refName"
            :autoInit="true"></G2BarBase>
        </el-card>
      </GridItem>
      <GridItem v-bind="layout.layout[4]" @resized="handleResized(chart[4].refName)">
        <el-card class="header-in">
          <ChartCardHeader
            :title="chart[4].refName"
            slot="header"
            @refresh="handleRefreshData(4)"></ChartCardHeader>
          <Loading :loading="!ready"></Loading>
          <G2PieBase
            v-bind="chart[4]"
            @ready="isReady(4)"
            :ref="chart[4].refName"
            :autoInit="true"></G2PieBase>
        </el-card>
      </GridItem>
      <GridItem v-bind="layout.layout[5]" @resized="handleResized(chart[5].refName)">
        <el-card class="header-in">
          <ChartCardHeader
            :title="chart[5].refName"
            slot="header"
            @refresh="handleRefreshData(5)"></ChartCardHeader>
          <Loading :loading="!ready"></Loading>
          <G2NightingaleRoseBase
            v-bind="chart[5]"
            @ready="isReady(5)"
            :ref="chart[5].refName"
            :autoInit="true"></G2NightingaleRoseBase>
        </el-card>
      </GridItem>
      <GridItem v-bind="layout.layout[6]" @resized="handleResized(chart[6].refName)">
        <el-card class="header-in">
          <ChartCardHeader
            :title="chart[6].refName"
            slot="header"
            @refresh="handleRefreshData(6)"></ChartCardHeader>
          <Loading :loading="!ready"></Loading>
          <G2RadarBase
            v-bind="chart[6]"
            @ready="isReady(6)"
            :ref="chart[6].refName"
            :autoInit="true"></G2RadarBase>
        </el-card>
      </GridItem>
      <GridItem v-bind="layout.layout[7]" @resized="handleResized(chart[7].refName)">
        <el-card class="header-in">
          <ChartCardHeader
            :title="chart[7].refName"
            slot="header"
            @refresh="handleRefreshData(7)"></ChartCardHeader>
          <Loading :loading="!ready"></Loading>
          <G2AreaBase
            v-bind="chart[7]"
            @ready="isReady(7)"
            :ref="chart[7].refName"
            :autoInit="true"></G2AreaBase>
        </el-card>
      </GridItem>
    </GridLayout>
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
          ready: false,
          data: []
        },
        {
          api: {url: '/api/chart/G2Line', data: {type: 'step'}},
          refName: 'G2LineStep',
          ready: false,
          data: []
        },
        {
          api: {url: '/api/chart/G2Column', data: {type: 'base'}},
          refName: 'G2ColumnBase',
          ready: false,
          data: []
        },
        {
          api: {url: '/api/chart/G2Bar', data: {type: 'base'}},
          refName: 'G2BarBase',
          ready: false,
          data: []
        },
        {
          api: {url: '/api/chart/G2Pie', data: {type: 'base'}},
          refName: 'G2PieBase',
          ready: false,
          data: []
        },
        {
          api: {url: '/api/chart/G2NightingaleRose', data: {type: 'base'}},
          refName: 'G2NightingaleRoseBase',
          ready: false,
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
      ],
      layout: {
        layout: [
          {'x': 7, 'y': 8, 'w': 5, 'h': 8, 'i': '0'},
          {'x': 4, 'y': 16, 'w': 4, 'h': 7, 'i': '1'},
          {'x': 8, 'y': 16, 'w': 4, 'h': 7, 'i': '2'},
          {'x': 0, 'y': 16, 'w': 4, 'h': 7, 'i': '3'},
          {'x': 3, 'y': 8, 'w': 4, 'h': 8, 'i': '4'},
          {'x': 9, 'y': 0, 'w': 3, 'h': 8, 'i': '5'},
          {'x': 0, 'y': 8, 'w': 3, 'h': 8, 'i': '6'},
          {'x': 0, 'y': 0, 'w': 9, 'h': 8, 'i': '7'}
        ],
        colNum: 12,
        rowHeight: 30,
        isDraggable: true,
        isResizable: true,
        isMirrored: false,
        verticalCompact: true,
        margin: [10, 10],
        useCssTransforms: true
      }
    }
  },
  computed: {
    ready () {
      return !this.chart.find(e => !e.ready)
    }
  },
  watch: {
    ready (ready) {
      if (ready) {
        this.showInfo()
        this.syncData()
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
    // 请求图表数据
    syncData () {
      this.$axios.all(this.chart.map(e => this.$axios.post(e.api.url, e.api.data))).then(this.$axios.spread((...res) => {
        res.forEach((e, index) => {
          this.chart[index].data = e
        })
      }))
    },
    // 刷新
    handleRefreshData (index) {
      const api = this.chart[index].api
      this.$axios.post(api.url, api.data).then(res => {
        this.chart[index].data = res
      })
    },
    layoutUpdatedHandler (newLayout) {
      console.group('layoutUpdatedHandler')
      newLayout.forEach(e => {
        console.log(`{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`)
      })
      console.groupEnd()
    },
    handleResized (name) {
      this.$nextTick(() => {
        this.$refs[name].resize()
      })
    }
  },
  components: {
    ChartCardHeader: () => import('./components/ChartCardHeader')
  }
}
</script>

<style lang="scss">
  @import './style.scss';
</style>
