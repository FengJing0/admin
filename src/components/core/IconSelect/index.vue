<template>
  <div>
    <el-popover
      ref="pop"
      v-model="pop"
      :placement="placement"
      width="300"
      trigger="click">
      <el-input
        :placeholder="placeholder"
        v-model="searchText"
        prefix-icon="el-icon-search"></el-input>
      <el-collapse v-model="activeName" accordion class="group">
        <el-collapse-item
          v-for="(iconList,index) in Icon"
          :key="index" :title="iconList.title"
          :name="index"
          class="class">
          <el-row :gutter="10" class="class-row">
            <el-col :span="4" v-for="(iconItem,iconIndex) in iconList.icon" :key="iconIndex" class="class-col" @click.native="selectIcon(iconItem)">
              <Icon :name="iconItem"></Icon>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-popover>
    <el-button v-popover:pop>click me</el-button>
    <el-button>clear</el-button>
  </div>
</template>

<script>
import Icon from '@/assets/library/font-awesome-4.7.0-icon/icon.js'
export default {
  props: {
    // 值
    value: {
      type: String,
      required: false,
      default: ''
    },
    // 弹窗方向
    placement: {
      type: String,
      required: false,
      default: 'right'
    },
    // 占位符
    placeholder:{
      type: String,
      required: false,
      default: '搜索'
    },
    // 是否在选择后关闭
    autoClose: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      Icon,
      // 绑定弹出框
      pop: false,
      // 搜索的文字
      searchText: '',
      // 组件内输入框的值
      currentValue: '',
      activeName: '0'
    }
  },
  methods: {
    selectIcon (iconName) {
      this.$emit('input', iconName)
      if(iconName && this.autoClose){
        this.pop = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/public.scss';
.group{
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-top: $margin;
  border-top:none;
  border-bottom:none;
  .class{
    .class-row{
      .class-col{
        line-height: 40px;
        text-align: center;
        color: $color-text-sub;
        cursor:pointer;
        &:hover{
          color: $color-text-main;
          font-size: 26px;
           background-color: $color-bg;
           border-radius: 4px;
           box-shadow: inset 0px 0px 0px 1px $color-border-1;
         }
      }
    }
  }
}
</style>
