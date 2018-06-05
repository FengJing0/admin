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
        prefix-icon="el-icon-search"
        v-if="!userInput"></el-input>
      <el-collapse v-model="activeName" accordion class="group">
        <el-collapse-item
          v-for="(iconList,index) in iconFilted"
          :key="index" :title="iconList.title"
          :name="index"
          class="class">
          <el-row class="class-row">
            <el-col :span="4" v-for="(iconItem,iconIndex) in iconList.icon" :key="iconIndex" class="class-col" @click.native="selectIcon(iconItem)">
              <el-tooltip effect="dark" placement="top" :content="iconItem">
                <Icon :name="iconItem"></Icon>
              </el-tooltip>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-popover>
    <div class="dd-clearfix">
      <el-button v-popover:pop type="primary" v-if="!userInput" class="dd-fl">
        <Icon :name="currentValue"></Icon>
        {{value || '请选择'}}
      </el-button>
      <el-input
        v-else
        class="dd-fl"
        style="max-width: 200px;"
        v-model="searchText2"
        clearable>
        <el-button slot="append" v-popover:pop>
          <i class="fa fa-list"></i>
        </el-button>
      </el-input>
      <el-button
        @click="clear"
        type="danger"
        v-if="clearable"
        icon="el-icon-delete"
        class="dd-fl dd-ml">清空</el-button>
    </div>
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
    placeholder: {
      type: String,
      required: false,
      default: '搜索'
    },
    // 是否在选择后关闭
    autoClose: {
      type: Boolean,
      required: false,
      default: true
    },
    // 是否允许用户输入
    userInput: {
      type: Boolean,
      required: false,
      default: false
    },
    // 是否允许清空
    clearable: {
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
      searchText2: '',
      // 组件内输入框的值
      currentValue: '',
      activeName: [ ]
    }
  },
  computed: {
    iconFilted () {
      let text = this.userInput ? this.searchText2 : this.searchText
      if (text === '') {
        return this.Icon
      } else {
        return this.Icon.map(iconClass => ({
          title: iconClass.title,
          icon: iconClass.icon.filter(icon => icon.indexOf(text.toLowerCase()) >= 0)
        })).filter(iconClass => iconClass.icon.length > 0)
      }
    }
  },
  methods: {
    selectIcon (iconName) {
      this.$emit('input', iconName)
      this.currentValue = iconName
      this.searchText2 = iconName
      if (iconName && this.autoClose) {
        this.pop = false
      }
    },
    clear () {
      this.currentValue = ''
      this.searchText2 = ''
      this.$emit('input', '')
    }
  },
  created () {
    this.currentValue = this.value.toLowerCase()
  },
  watch: {
    searchText2 (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/public.scss';
.el-button+.el-button{
  margin-left: $margin;
}
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
          font-size: 28px;
           background-color: $color-bg;
           border-radius: $border-radius;
           box-shadow: inset 0px 0px 0px 1px $color-border-1;
         }
      }
    }
  }
}
</style>
