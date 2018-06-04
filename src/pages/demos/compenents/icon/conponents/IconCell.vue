<template>
  <div>
    <el-popover
      placement="right"
      trigger="click"
      ref="pop">
      <div class="icon-group">
        <Icon :name="icon"></Icon>
      </div>
      <el-row :gutter="10">
        <el-col :span="8">
          <el-tooltip
            effect="dark"
            placement="top"
            :content="iconClass">
            <el-button
              width="100%"
              @click="copy(iconClass)">Class</el-button>
          </el-tooltip>
        </el-col>
        <el-col :span="8">
          <el-tooltip
            effect="dark"
            placement="top"
            :content="iconHtml">
            <el-button
              width="100%"
              @click="copy(iconHtml)">HTML</el-button>
          </el-tooltip>
        </el-col>
        <el-col :span="8">
          <el-tooltip
            effect="dark"
            placement="top"
            :content="iconComponent">
            <el-button
              width="100%"
              @click="copy(iconComponent)">组件</el-button>
          </el-tooltip>
        </el-col>
      </el-row>
    </el-popover>
    <span v-popover:pop style="cursor: pointer;">
      <el-tag type="info">
        <Icon :name="icon"></Icon>
      </el-tag>
      <span style="font-size: 10px;">{{icon}}</span>
    </span>
  </div>
</template>

<script>
import clipboard from 'clipboard-polyfill'
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    iconClass () {
      return `fa fa-${this.icon}`
    },
    iconHtml () {
      return `<i class="fa fa-${this.icon}" aria-hidden="true"></i>`
    },
    iconComponent () {
      return `<Icon name="${this.icon}"></Icon>`
    }
  },
  methods: {
    copy (text) {
      clipboard.writeText(text)
      this.$message({
        message: `${text}复制到剪切板`,
        type: 'success'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.icon-group{
  text-align: center;
  font-size: 200px;
}
</style>
