<template>
  <div class="container-component" :class="{responsive}">
    <!--卡片容器-->
    <el-card v-if="type === 'card'">
      <slot v-if="$slots.header" slot="header" name="header"></slot>
      <slot></slot>
    </el-card>
    <!--隐形-->
    <div v-if="type === 'ghost'" class="dd-mr dd-mb">
      <slot name="header"></slot>
      <slot></slot>
    </div>
    <!--撑满-->
    <card-full v-if="type === 'card-full'" :top="top" :right="right" :bottom="bottom" :left="left">
      <slot v-if="$slots.header" slot="header" name="header"></slot>
      <slot></slot>
      <slot v-if="$slots.footer" slot="footer" name="footer"></slot>
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
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/public.scss";
  .container-component{
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    right:0;
    overflow: auto;
  }
@media (min-width: 576px) {
  // 根据你的需要在这里添加样式 xs
  .container-component.responsive {
    .dd-md-responsive{
      margin-bottom: $margin;
    }
    .dd-mt-responsive{
      margin-bottom: $margin;
    }
  }
}
@media (min-width: 768px) {
  // 根据你的需要在这里添加样式 sm
  .container-component.responsive {
    .dd-md-responsive{
      margin-bottom: $margin;
    }
    .dd-mt-responsive{
      margin-bottom: $margin;
    }
  }
}
@media (min-width: 992px) {
  // 根据你的需要在这里添加样式 md
  .container-component.responsive {
    .dd-md-responsive{
      margin-bottom: $margin;
    }
    .dd-mt-responsive{
      margin-bottom: $margin;
    }
  }
}
@media (min-width: 1200px) {
  // 根据你的需要在这里添加样式 md
  .container-component.responsive {
    .dd-md-responsive{
      margin-bottom: 0;
    }
    .dd-mt-responsive{
      margin-bottom: 0;
    }
  }
}
// 在大于1920分辨率的时候 xl
@media (min-width: 1921px) {
  .container-component.responsive {
    margin: 0px auto;
    margin-bottom: 20px;
    max-width: 1920px - 200px;
    .dd-md-responsive{
      margin-bottom: 0;
    }
    .dd-mt-responsive{
      margin-bottom: 0;
    }
  }
}
</style>
