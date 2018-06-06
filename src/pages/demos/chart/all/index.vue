<template>
  <Container type="ghost">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <ChartCardHeader
            title="G2LineBase"
            slot="header"
            @refresh="refresh"></ChartCardHeader>
          <G2AreaBase v-bind="chart[7]"></G2AreaBase>
        </el-card>
      </el-col>
    </el-row>
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
          ready: false,
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
  methods: {
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
