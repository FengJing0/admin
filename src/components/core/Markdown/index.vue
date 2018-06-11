<template>
  <div class="component-markdown">
    <div class="spin-group" v-if="!markedHTML">
      <div>正在加载</div>
    </div>
    <div class="markdown-body" v-html="markedHTML"></div>
  </div>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: ''
    },
    md: {
      type: String,
      required: false,
      default: ''
    },
    highlight: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      markedHTML: ''
    }
  },
  mounted () {
    this.which()
  },
  watch: {
    md () {
      this.which()
    }
  },
  methods: {
    // 判断用哪种方式渲染
    which () {
      if (this.md) {
        this.initWithMd()
      } else if (this.url) {
        this.initWithUrl()
      }
    },
    // 渲染md获得的文本
    initWithMd () {
      this.markedHTML = this.marked(this.md)
    },
    // 渲染从url获得的文本
    async initWithUrl () {
      this.markedHTML = await this.getReadme(this.url)
    },
    // 异步获取url中的文本
    async getReadme (url) {
      const data = await this.$axios.get(url)
      return this.marked(data)
    },
    // 编译
    marked (data) {
      const renderer = new marked.Renderer()
      renderer.blockquote = (quote) => {
        return `<blockquote>${quote}</blockquote>`
      }
      return marked(data, {
        renderer,
        ...this.highlight ? {highlight: (code) => highlight.highlightAuto(code).value} : {}
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/style/public.scss';
.component-markdown {
  .spin-group {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $color-primary;
  }
}
</style>
