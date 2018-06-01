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
    if (this.md) {
      this.initWithMd()
    } else if (this.url) {
      this.initWithUrl()
    }
  },
  methods: {
    initWithMd () {
      this.markedHTML = this.marked(this.md)
    },
    async initWithUrl () {
      this.markedHTML = await this.getReadme(this.url)
    },
    async getReadme (url) {
      const data = await this.$axios.get(url)
      return this.marked(data)
    },
    marked (data) {
      const renderer = new marked.Renderer()
      renderer.blockquote = (quote) => {
        return `<blockquote>${quote}</blockquote>`
      }
      marked.setOptions({
        renderer,
        highlight: (code) => {
          highlight.highlightAuto(code).value
        }
      })
      return marked(data)
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
