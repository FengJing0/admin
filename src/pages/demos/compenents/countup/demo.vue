<template>
  <Container type="ghost" class="page">
    <el-card class="dd-mb">数字动画组件</el-card>
    <el-row :gutter="20" class="demo">
      <el-col :span="8">
        <el-card>
          <template slot="header">只设置目标数字</template>
          <div class="group">
            <CountUp :end="100"></CountUp>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template slot="header">设置起止数值</template>
          <div class="group">
            <CountUp :start="20" :end="100"></CountUp>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template slot="header">小数位数</template>
          <div class="group">
            <CountUp :end="100" :decimals="2"></CountUp>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20"  class="demo">
      <el-col :span="8">
        <el-card>
          <template slot="header">动画时长</template>
          <div class="group">
            <CountUp :end="100" :duration="6"></CountUp>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template slot="header">回调函数</template>
          <div class="group">
            <CountUp :start="20" :end="100" :callback="() => {className = 'end'}" :class="className"></CountUp>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template slot="header">结束一秒后更新数值</template>
          <div class="group">
            <CountUp :end="end" :callback="update"></CountUp>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-card>
      <Markdown url="/static/md/组件 - 数字动画.md"></Markdown>
    </el-card>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      className: '',
      end: 50
    }
  },
  methods: {
    update () {
      setTimeout(() => {
        this.end = 100
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/public.scss";

  .page {

    .el-card {

      .group {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          font-size: 60px;

          &.end {
            padding: 0px $margin;
            border-radius: $border-radius;
            background-color: $color-success;
            color: #FFF;
          }
        }
      }
    }
  }
  .demo{
    .el-card {
      @extend %unable-select;
      margin-bottom: $margin;
      text-align: center;
    }
  }
</style>
