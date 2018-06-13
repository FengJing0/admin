<template>
  <el-card>
    <template slot="header">
      <el-button
        type="primary"
        size="mini"
        @click="syncData">
        <Icon name="refresh"></Icon>
        加载数据
      </el-button>
      <el-radio-group size="mini" v-model="height">
        <el-radio-button
          v-for="(item, index) in heightOptions"
          :key="index" :label="item">
          {{item}}px
        </el-radio-button>
      </el-radio-group>
    </template>
    <div :style="style">
      <slot :data="data"></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    api: {
      type: Object,
      required: false,
      default: () => ({})
    },
    isReady: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      data: [],
      height: 400,
      heightOptions: [300, 400, 500, 600]
    }
  },
  mounted () {
    this.syncData()
  },
  watch: {
    style () {
      this.resize()
    }
  },
  computed: {
    style () {
      return {
        height: this.height + 'px'
      }
    }
  },
  methods: {
    syncData () {
      this.$axios.post(this.api.url, this.api.data).then(res => {
        this.data = res
      })
    },
    resize () {
      this.$nextTick(() => {
        this.$emit('resize')
      })
    }
  }
}
</script>

<style scoped>

</style>
