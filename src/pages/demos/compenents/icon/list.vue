<template>
  <Container type="card-full">
    <template slot="header">
      <el-radio-group v-model="showIndex" size="mini">
        <el-radio-button
          v-for="(item, index) in radioOptions"
          :key="index"
          :label="item.value">
          {{item.label}}
        </el-radio-button>
      </el-radio-group>
    </template>
    <el-alert
      title="点击图标复制代码"
      type="warning"
      :closable="false"
      class="dd-mb">
    </el-alert>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(iconItem, iconIndex) in iconShow" :key="iconIndex">
        <IconCell :icon="iconItem" class="dd-mb iconItem"></IconCell>
      </el-col>
    </el-row>
  </Container>
</template>

<script>
import icon from '@/assets/library/font-awesome-4.7.0-icon/icon.js'
import IconCell from './conponents/IconCell'
export default {
  data () {
    return {
      icon,
      showIndex: 0
    }
  },
  computed: {
    iconShow () {
      return this.icon[this.showIndex].icon
    },
    radioOptions () {
      return this.icon.map((e, index) => ({
        label: e.title,
        value: index
      }))
    }
  },
  components: {
    IconCell
  }
}
</script>

<style scoped lang="scss">
.iconItem{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
