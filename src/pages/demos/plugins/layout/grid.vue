<template>
  <Container type="ghost"
             class="demo-plugins-vue-grid-layout-demo">
    <GridLayout v-bind="layout"
                @layout-updated="layoutUpdatedHandler">
      <GridItem v-for="(item, index) in layout.layout"
                :key="index"
                v-bind="item"
                @resize="resizeHandler"
                @move="moveHandler"
                @resized="resizedHandler"
                @moved="movedHandler">
        <el-card style="height:100%">
          <el-tag size="mini"
                  type="info"
                  slot="header">Card {{item.i^0+1}}</el-tag>
          <template v-if="index === 0">
            <div class="dd-mb">拖拽卡片调整位置</div>
            <div class="dd-mb">拖拽卡片右下角的手柄调整卡片大小</div>
            <div class="dd-mb">在控制台打印出数据变化</div>
          </template>
        </el-card>
      </GridItem>
    </GridLayout>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      layout: {
        layout: [
          {'x': 0, 'y': 0, 'w': 4, 'h': 10, 'i': '0'},
          {'x': 4, 'y': 0, 'w': 2, 'h': 5, 'i': '1'},
          {'x': 6, 'y': 0, 'w': 4, 'h': 5, 'i': '2'},
          {'x': 10, 'y': 0, 'w': 2, 'h': 10, 'i': '3'},
          {'x': 4, 'y': 5, 'w': 4, 'h': 5, 'i': '4'},
          {'x': 8, 'y': 5, 'w': 2, 'h': 5, 'i': '5'},
          {'x': 0, 'y': 10, 'w': 8, 'h': 5, 'i': '6'},
          {'x': 8, 'y': 10, 'w': 4, 'h': 5, 'i': '7'}
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
  mounted () {
    this.showInfo()
  },
  methods: {
    showInfo () {
      this.$notify({
        title: '提示',
        message: '你可以按住卡片拖拽改变位置；或者在每个卡片的右下角拖动，调整卡片大小'
      })
    },
    // 测试代码
    layoutUpdatedHandler (newLayout) {
      console.group('layoutUpdatedHandler')
      newLayout.forEach(e => {
        console.log(`{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`)
      })
      console.groupEnd()
    },
    resizeHandler (i, newH, newW) {
      this.$log('resizeHandler', `i: ${i}, newH: ${newH}, newW: ${newW}`)
    },
    moveHandler (i, newX, newY) {
      this.$log('moveHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    },
    resizedHandler (i, newH, newW, newHPx, newWPx) {
      this.$log('resizedHandler', `i: ${i}, newH: ${newH}, newW: ${newW}, newHPx: ${newHPx}, newWPx: ${newWPx}`)
    },
    movedHandler (i, newX, newY) {
      this.$log('movedHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/public.scss';
.demo-plugins-vue-grid-layout-demo {
  .vue-grid-layout {
    .el-card {
      @extend %unable-select;
    }
  }
}
</style>
