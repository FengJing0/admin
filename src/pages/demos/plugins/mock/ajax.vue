<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <template slot="header">
        <el-button @click.native="ajax">发送请求</el-button>
      </template>
      <el-table style="width:100%" v-bind="table">
        <el-table-column
          v-for="(item, index) in table.columns"
          :key="index"
          :prop="item.prop"
          :label="item.label"></el-table-column>
      </el-table>
    </el-card>
    <el-card>
      <Markdown url="/static/md/插件 - mock拦截ajax.md"></Markdown>
    </el-card>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      table: {
        columns: [],
        data: [],
        size: 'mini',
        stripe: true,
        border: true
      }
    }
  },
  methods: {
    ajax () {
      this.$axios.get('/api/ajax-demo').then(res => {
        this.table.columns = Object.keys(res.list[0]).map(e => ({
          label: e,
          prop: e
        }))
        this.table.data = res.list
      })
    }
  }
}
</script>
