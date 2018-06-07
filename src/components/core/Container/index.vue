<template>
  <div class="container-component">
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
</style>
