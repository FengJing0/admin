<template>
  <textarea ref="mde"></textarea>
</template>

<script>
import SimpleMDE from 'simplemde'
export default {
  props: {
    // 值
    value: {
      type: String,
      required: false,
      default: ''
    },
    // 配置参数
    config: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data () {
    return {
      mde: null
    }
  },
  mounted () {
    this.init()
  },
  destroyed () {
    this.mde = null
  },
  methods: {
    init () {
      this.mde = new SimpleMDE({
        ...this.config,
        autoDownloadFontAwesome: false,
        element: this.$refs.mde,
        initialValue: this.value
      })
      this.mde.codemirror.on('change', () => {
        this.$emit('input', this.mde.value())
      })
    }
  }
}
</script>
