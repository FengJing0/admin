<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <template slot="header">
        <el-button @click="ajax">发送请求</el-button>
      </template>
      <el-table style="width:100%" v-bind="table">
        <el-table-column
          v-for="(item, index) in table.columns"
          :key="index"></el-table-column>
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
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
