<template>
  <div class="container-component"
       :class="{responsive}"
       v-loading='ready'>
    <!--卡片容器-->
    <el-card v-if="type === 'card'"
             style='max-height:calc(100% - 20px);width:calc(100% - 20px)'>
      <slot v-if="$slots.header"
            slot="header"
            name="header"></slot>
      <el-scrollbar style='height:100%'>
        <slot></slot>
      </el-scrollbar>
    </el-card>
    <!--隐形-->
    <div v-if="type === 'ghost'"
         class="dd-mr"
         style='height:calc(100% - 20px)'>
      <el-scrollbar style='height:100%'>
        <slot></slot>
      </el-scrollbar>
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
      <el-scrollbar style='height:100%'>
        <slot></slot>
      </el-scrollbar>
      <slot v-if="$slots.footer"
            slot="footer"
            name="footer"></slot>
    </card-full>
  </div>
</template>

<script>
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
      default: 20
    },
    bottom: {
      type: Number,
      required: false,
      default: 20
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
    ready: {
      type: Boolean,
      required: false,
      default: false
    }
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
  overflow: auto;
  .el-scrollbar__wrap {
    overflow-x: hidden;
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
  .container-component.responsive {
    margin: 0px auto;
    margin-bottom: 20px;
    max-width: 1920px - 200px;
  }
}
</style>
