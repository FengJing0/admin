<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <template slot="header">导入 xlsx</template>
      <el-button @click="download"
                 class="dd-mb">
        <Icon name="download"></Icon>
        下载演示 .xlsx 表格
      </el-button>
      <el-upload :before-upload="handleUpload"
                 action="default"
                 class="dd-mb">
        <el-button type="success">
          <Icon name="file-o"></Icon>
          选择要导入的 .xlsx 表格
        </el-button>
      </el-upload>
      <el-table v-bind="table">
        <el-table-column v-for="(item, index) in table.columns"
                         :key="index"
                         :prop="item.prop"
                         :label="item.label">
        </el-table-column>
      </el-table>
    </el-card>
    <el-card>
      <Markdown url="/static/md/插件 - 导入.md"></Markdown>
    </el-card>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      table: {
        columns: [],
        data: []
      }
    }
  },
  methods: {
    handleUpload (file) {
      this.$import.xlsx(file)
        .then(({header, results}) => {
          this.table.columns = header.map(e => ({
            label: e,
            prop: e
          }))
          this.table.data = results
        })
      return false
    },
    download () {
      window.location.href = 'http://fairyever.qiniudn.com/d2-admin-import-xlsx-demo.xlsx'
    }
  }
}
</script>
