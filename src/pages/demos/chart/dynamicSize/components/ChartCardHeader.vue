<template>
  <div>
    {{title}}
    <span class="dd-fr">
      <Icon
        name="refresh"
        @click.native="handleRefresh"
        ref="icon"
        :style="`transform:rotate(${angle}deg)`"
        class="chart-card-header-icon"></Icon>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      angle: 0
    }
  },
  methods: {
    handleRefresh () {
      this.angle += 360
      this.$emit('refresh')
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/public.scss";
.chart-card-header-icon{
  color: $color-text-sub;
  transition: all .25s;
  cursor:pointer;
}
</style>
