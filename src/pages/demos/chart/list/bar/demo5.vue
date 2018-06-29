<template>
  <Container type='card-full'>
    <template slot='header'>纵轴为连续的数值轴</template>
    <div class="inner">
      <ve-bar :data="chartData"
              v-bind="pubSetting"
              :settings="chartSettings"></ve-bar>
    </div>
  </Container>
</template>

<script>
import list from '../_mixin/list.js'
export default {
  mixins: [list],
  data () {
    this.chartSettings = {
      yAxisType: 'value'
    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': 1, '访问用户': 1393 },
          { '日期': 2, '访问用户': 3530 },
          { '日期': 5, '访问用户': 2923 },
          { '日期': 10, '访问用户': 1723 },
          { '日期': 15, '访问用户': 3792 },
          { '日期': 36, '访问用户': 4593 }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../_mixin/style.css';
</style>
