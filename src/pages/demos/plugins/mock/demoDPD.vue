<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <template slot="header">数据占位符</template>
      <Markdown url="/static/md/插件 - mock演示页面介绍.md"></Markdown>
    </el-card>
    <MockDemoCard
      v-for="(item, index) in settingDPD"
      :key="index"
      :title="item.title"
      :code="JSON.stringify(item.json, null, 2)"
      :mock="mockResult[index]"
      @reload="doMock(index)"></MockDemoCard>
  </Container>
</template>

<script>
import Vue from 'vue'
import Mock from 'mockjs'
import settingDPD from './data/settingDPD'
export default {
  data () {
    return {
      mockResult: [],
      settingDPD
    }
  },
  mounted () {
    this.settingDPD.forEach((e, i) => {
      this.doMock(i)
    })
  },
  methods: {
    doMock (n = 0) {
      Vue.set(this.mockResult, n, JSON.stringify(Mock.mock(this.settingDPD[n].json), null, 2))
    }
  },
  components: {
    MockDemoCard: () => import('./components/MockDemoCard')
  }
}
</script>

<style scoped>

</style>
