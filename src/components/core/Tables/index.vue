<template>
  <div>
    <el-table
      :data="data"
      :border="border"
      :stripe="stripe"
      :size="size">
      <el-table-column type="selection" v-if="select && columns.length !== 0"></el-table-column>
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :resizable="resizable">
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="150" v-if="control && columns.length !== 0">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: false,
      default: () => ([])
    },
    data: {
      type: Array,
      required: false,
      default: () => ([])
    },
    border: {
      type: Boolean,
      required: false,
      default: true
    },
    stripe: {
      type: Boolean,
      required: false,
      default: true
    },
    size: {
      type: String,
      required: false,
      default: 'small'
    },
    resizable: {
      type: Boolean,
      required: false,
      default: false
    },
    control: {
      type: Boolean,
      required: false,
      default: true
    },
    select: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {}
  },
  methods: {
    handleEdit (index, row) {
      this.$log('handleEdit', index, row)
      this.$emit('handleEdit', index, row)
    },
    handleDelete (index, row) {
      this.$log('handleDelete', index, row)
      this.$emit('handleDelete', index, row)
    }
  }
}
</script>

<style scoped>

</style>
