<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <template slot="header">SVG图标组件</template>
      <el-row>
        <el-col
          :span="4"
          v-for="(icon, index) in $IconSvg"
          :key="index"
          class="icon-card">
          <IconSvg :name="icon" class="icon"></IconSvg>
          <p class="icon-title">{{icon}}</p>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <Markdown url="/static/md/组件 - 图标组件 - svg.md"></Markdown>
    </el-card>
  </Container>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    // console.log(this.$IconSvg)
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/public.scss";
.icon-card{
  margin-bottom: $margin;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover{
    .icon{
      transform: scale(1.1) ;
    }
    .icon-title{
      color: $color-text-main
    }
  }
}
.icon{
  width:70px;
  height: 70px;
  transition: all .2s linear;
}
.icon-title{
  font-size: $font-size-sub;
  color: $color-text-placehoder
}
</style>
