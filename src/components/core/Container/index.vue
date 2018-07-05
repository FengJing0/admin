<template>
  <div class="container-component"
       :class="{responsive}"
       v-loading='loading'>
    <!--卡片容器-->
    <el-card v-if="type === 'card'"
             style='overflow: auto;position:relative;'>
      <slot v-if="$slots.header"
            slot="header"
            name="header"></slot>
      <el-scrollbar style='height:100%'>
        <slot></slot>
      </el-scrollbar>
    </el-card>
    <!--隐形-->
    <div v-if="type === 'ghost'">
      <!-- <el-scrollbar style='height:100%'> -->
      <slot></slot>
      <!-- </el-scrollbar> -->
    </div>
    <!--撑满-->
    <card-full v-if="type === 'card-full'"
               :top="top"
               :right="right"
               :bottom="bottom"
               :left="left">
      <slot v-if="$slots.header"
            slot="header"
            name="header"></slot>
      <slot></slot>
      <slot v-if="$slots.footer"
            slot="footer"
            name="footer"></slot>
    </card-full>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    type: {
      type: String,
      require: false,
      default: 'card'
    },
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
    },
    // 是否开启响应式尺寸变化
    responsive: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      BS: null
    }
  },
  methods: {
    scrollInit (node) {
      this.BS = new BScroll(node, {
        mouseWheel: true,
        scrollbar: {
          fade: true,
          interactive: false
        }
      })
    },
    scrollDestroy () {
      if (this.BS) {
        this.BS.destroy()
      }
    }
  },
  mounted () {
    if (this.type !== 'card-full') {
      this.scrollInit(this.$el)
    }
  },
  beforeDestroy () {
    this.scrollDestroy()
  }
}
</script>

<style lang="scss">
@import '@/assets/style/public.scss';
.container-component {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .bscroll-indicator {
    border-radius: inherit;
    background-color: rgb(144, 147, 153);
    opacity: 0;
  }
  &:hover .bscroll-indicator {
    opacity: 0.3;
  }
}

.container-component.responsive {
  .dd-md-responsive {
    @include MarginBottom($marginList);
  }
  .dd-mt-responsive {
    @include MarginTop($marginList);
  }
}

@media (min-width: 576px) {
  // 根据你的需要在这里添加样式 xs
}
@media (min-width: 768px) {
  // 根据你的需要在这里添加样式 sm
}
@media (min-width: 992px) {
  // 根据你的需要在这里添加样式 md
}
@media (min-width: 1200px) {
  // 根据你的需要在这里添加样式 lg
}
// 在大于1920分辨率的时候 xl
@media (min-width: 1921px) {
  // .container-component.responsive {
  //   margin: 0px auto;
  //   margin-bottom: 20px;
  //   max-width: 1920px - 200px;
  // }
}
</style>
