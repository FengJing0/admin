<template>
  <Container type='card-full'>
    <template slot='header'>多圆饼图</template>
    <div class="inner">
      <ve-pie :data="chartData"
                    v-bind="pubSetting"
                    :settings="chartSettings"></ve-pie>
    </div>
  </Container>
</template>

<script>
import list from '../_mixin/list.js'
export default {
  mixins: [list],
  data () {
    this.chartSettings = {
      level: [
        ['1/1', '1/2', '1/3'],
        ['1/4', '1/5']
      ]
    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../_mixin/style.css';
</style>
