<template>
  <Container>
    <template slot="header">用户中心</template>
    <el-table :data="tableData"
              style="width: 100%;"
              border>
      <el-table-column label="日期"
                       width='150'>
        <template slot-scope="scope">
          <div v-if='scope.row.isEdit'
               style='height:32px;line-height:32px;'>
            {{ scope.row.date }}
          </div>
          <el-input v-model="scope.row.date"
                    size="small"
                    clearable
                    v-else></el-input>
        </template>
      </el-table-column>
      <el-table-column label="姓名"
                       width="180">
        <template slot-scope="scope">
          <div v-if='scope.row.isEdit'>
            {{ scope.row.name }}
          </div>
          <el-input v-model="scope.row.name"
                    size="small"
                    clearable
                    v-else></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.$index, scope.row)"
                     v-if="scope.row.isEdit">编辑</el-button>
          <el-button size="mini"
                     @click="handleSave(scope.$index, scope.row)"
                     v-else>保存</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        isEdit: true
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        isEdit: true
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        isEdit: true
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        isEdit: true
      }]
    }
  },
  mounted () {
    // console.log(this.tableData.map(e => {
    //   delete e.isEdit
    //   return e
    // }))
  },
  methods: {
    handleEdit (index, row) {
      row.isEdit = false
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleSave (index, row) {
      row.isEdit = true
      console.log(row)
    }
  }
}
</script>
