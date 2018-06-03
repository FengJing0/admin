<template>
  <Container type="ghost" class="page">
    <el-card>
      <p slot="title">只设置目标数字</p>
      <div class="group">
        <CountUp :end="100"></CountUp>
      </div>
    </el-card>
  </Container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/public.scss";
  .page {
    .el-card {
      @extend %unable-select;
        margin-bottom: $margin;
        .group {
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            font-size: 60px;
          &.end {
             padding: 0px 20px;
             border-radius: 4px;
             background-color: $color-success;
             color: #FFF;
           }
        }
      }
    }
  }
</style>
