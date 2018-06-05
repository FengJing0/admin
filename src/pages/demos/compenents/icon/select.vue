<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <template slot="header">图标选择器</template>
      <div class="dd-mb">
        <div v-if="icon" class="show">
          选择的图标
          <Icon :name="icon"></Icon>
        </div>
        <div v-else class="show">
          未选择
        </div>
        <IconSelect v-model="icon"></IconSelect>
      </div>
      <div>
        <div v-if="icon2" class="show">
          选择的图标
          <Icon :name="icon2"></Icon>
        </div>
        <div v-else class="show">
          未选择
        </div>
        <IconSelect v-model="icon2" :userInput="true"></IconSelect>
      </div>
    </el-card>
    <el-card>
      <Markdown url="/static/md/组件 - 图标选择器.md"></Markdown>
    </el-card>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      icon: '',
      icon2: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/public.scss";
.show{
  margin-bottom: $margin;
  color:$color-text-sub;
  font-size: $font-size-mini;
}
</style>
