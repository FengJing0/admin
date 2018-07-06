<template>
  <div class="page-index-article-body">
    <div class="page-index-article-body__logo"
         v-if="$slots.default">
      <slot></slot>
    </div>
    <p class="page-index-article-body__title">{{title}}</p>
    <p class="page-index-article-body__sub-title">{{subTitle}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: false,
      default: 'Title'
    },
    subTitle: {
      type: String,
      require: false,
      default: 'SubTitle'
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/public.scss';
.page-index-article-body {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
  }
  .page-index-article-body__title {
    color: $color-text-main;
  }
  .page-index-article-body__sub-title {
    color: $color-text-sub;
  }
}
</style>
