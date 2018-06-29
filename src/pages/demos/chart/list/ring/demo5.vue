<template>
  <Container type='card-full'>
    <template slot='header'>设置环图半径</template>
    <div class="inner">
      <ve-ring :data="chartData"
                    v-bind="pubSetting"
                    :settings="chartSettings"></ve-ring>
    </div>
  </Container>
</template>

<script>
import list from '../_mixin/list.js'
export default {
  mixins: [list],
  data () {
    this.chartSettings = {
      radius: [30, 100],
      offsetY: 250
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
