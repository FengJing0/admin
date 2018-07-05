<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <template slot="header">导出表格</template>
      <el-button type="primary"
                 @click="exportCsv">
        <Icon name="download"></Icon>
        导出 CSV
      </el-button>
      <el-button type="primary"
                 @click="exportExcel">
        <Icon name="download"></Icon>
        导出 Excel
      </el-button>
      <div>
        <el-table v-bind="table"
                  ref='tables'>
          <el-table-column v-for="(item, index) in table.columns"
                           :key="index"
                           :prop="item.prop"
                           :label="item.label">
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-card>
      <Markdown url="/static/md/插件 - 导出.md"></Markdown>
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
  created () {
    this.$axios.post('/api/table').then(res => {
      this.table.data = res.data
    })
    this.table.columns = [{label: 'ID', prop: 'id'},
      {label: '名称', prop: 'name'},
      {label: '创建日期', prop: 'creatDate'},
      {label: '地址', prop: 'address'},
      {label: '邮编', prop: 'zip'}]
  },
  methods: {
    exportCsv () {
      this.$export.csv({
        columns: this.table.columns,
        data: this.table.data
      }).then(() => {
        this.$message('导出CSV成功')
      })
    },
    exportExcel () {
      this.$export.excel({
        columns: this.table.columns,
        data: this.table.data,
        title: 'test'
      }).then(() => {
        this.$message('导出表格成功')
      })
    }
  }
}
</script>

<style scoped>
</style>
