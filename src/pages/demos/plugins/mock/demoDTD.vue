<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <template slot="header">数据模板</template>
      <Markdown url="/static/md/插件 - mock演示页面介绍.md"></Markdown>
    </el-card>
    <MockDemoCard
      v-for="(item, index) in settingDTD"
      :key="index"
      :title="item.title"
      :code="JSON.stringify(item.json, null, 2)"
      :mock="mockResult[index]"
      @reload="doMock(index)"></MockDemoCard>
    <MockDemoCard
      :title="fn.title"
      :code="fn.code"
      :mock="fn.mocked"
      @reload="fnMock"></MockDemoCard>
    <MockDemoCard
      :title="regexp.title"
      :code="regexp.code"
      :mock="regexp.mocked"
      @reload="regexpMock"></MockDemoCard>
  </Container>
</template>

<script>
import Vue from 'vue'
import settingDTD from './data/settingDTD'
import Mock from 'mockjs'
import fn from './mixins/function'
import regexp from './mixins/regexp'
export default {
  mixins: [
    fn,
    regexp
  ],
  data () {
    return {
      mockResult: [],
      settingDTD
    }
  },
  mounted () {
    this.settingDTD.forEach((e, i) => {
      this.doMock(i)
    })
    this.fnMock()
    this.regexpMock()
  },
  methods: {
    doMock (n = 0) {
      Vue.set(this.mockResult, n, JSON.stringify(Mock.mock(this.settingDTD[n].json), null, 2))
    }
  },
  components: {
    MockDemoCard: () => import('./components/MockDemoCard')
  }
}
</script>

<style scoped>
</style>
