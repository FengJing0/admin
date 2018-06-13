export default {
  components: {
    ChartDemoCard: () => import('../components/ChartDemoCard.vue')
  },
  methods: {
    ready () {
      this.$nextTick(() => {
        this.isReady = true
        this.$refs.chart.resize()
      })
    }
  }
}
