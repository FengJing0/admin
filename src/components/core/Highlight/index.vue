<template>
  <pre v-html="html"></pre>
</template>

<script>
import highlight from 'highlight.js'

export default {
  props: {
    code: {
      type: String,
      required: false,
      defalut: 'conosle.log("ok")'
    }
  },
  data () {
    return {
      html: ''
    }
  },
  methods: {
    highlight () {
      this.html = highlight.highlightAuto(this.code).value
    }
  },
  mounted () {
    this.highlight()
  },
  watch: {
    code () {
      return this.highlight()
    }
  }
}
</script>
