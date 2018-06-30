<template>
  <div class="dd-card-full"
       :style="cardStyle">
    <div v-if="$slots.header"
         class="dd-card-full__header"
         ref="header">
      <slot name="header"></slot>
    </div>
    <div class="dd-card-full__body"
         :style="bodyStyle">
      <el-scrollbar style='height:100%;'>
        <div class="dd-card-full__main">
          <slot></slot>
        </div>
      </el-scrollbar>
    </div>
    <div v-if="$slots.footer"
         class="dd-card-full__footer"
         ref="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    top: {
      type: Number,
      required: false,
      default: 0
    },
    right: {
      type: Number,
      required: false,
      default: 0
    },
    bottom: {
      type: Number,
      required: false,
      default: 0
    },
    left: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      headerHeight: 0,
      footerHeight: 0
    }
  },
  mounted () {
    this.headerHeight = this.$slots.header ? this.$refs.header.offsetHeight : 0
    this.footerHeight = this.$slots.footer ? this.$refs.footer.offsetHeight : 0
  },
  computed: {
    cardStyle () {
      return `
      top:${this.top}px;
      right:${this.right}px;
      bottom:${this.bottom}px;
      left:${this.left}px`
    },
    bodyStyle () {
      return `
      top:${this.headerHeight}px;
      bottom:${this.footerHeight}px`
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/public.scss';
.dd-card-full {
  position: absolute;
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: $border-radius;
  overflow: hidden;
  transition: 0.3s;
  color: $color-text-main;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  .dd-card-full__header {
    position: absolute;
    top: 0;
    left: 0;
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
    width: 100%;
  }
  .dd-card-full__body {
    position: absolute;
    // padding: $margin;
    /*width:calc(100% - 40px);*/
    left: 0;
    right: 0;
    overflow: auto;
    .dd-card-full__main {
      margin: $margin;
    }
  }
  .dd-card-full__footer {
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 18px 20px;
    border-top: 1px solid #ebeef5;
    box-sizing: border-box;
    width: 100%;
  }
}
</style>
