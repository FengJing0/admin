<template>
  <el-card class="dd-mb">
    <div slot="header" class="dd-clearfix">
      <span class="mock-demo-card-title">{{title}}</span>
      <el-tooltip content="重新 mock 数据" placement="top-end">
        <el-button
          type="primary"
          size="mini"
          class="dd-fr"
          @click="$emit('reload')">刷新</el-button>
      </el-tooltip>
    </div>
    <el-row :gutter="10">
      <el-col :span="12">
        <Highlight :code="code" class="col col-l"></Highlight>
      </el-col>
      <el-col :span="12">
        <Highlight :code="mock" class="col col-r"></Highlight>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    code: {
      type: String,
      required: false,
      default: ''
    },
    mock: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/public.scss";
.mock-demo-card-title{
  font-size: $font-size-mini;
  line-height: 28px;
}
.col{
  padding: $margin;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  font-size: 16px;
}
.col-l {
  background-color: lighten($color-info, 40%);
  border-color: lighten($color-info, 35%);
}
.col-r {
  background-color: lighten($color-success, 47%);
  border-color: lighten($color-success, 40%);
}
</style>
