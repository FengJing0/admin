<template>
  <div ref="editor"></div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: 'sss'
    }
  },
  data () {
    return {
      Quill: null,
      editorOption: {
        // something config
        // 编辑器配置
        theme: 'snow',
        // bounds: document.body,
        debug: 'warn',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            // [{ 'script': 'sub' }, { 'script': 'super' }],
            // [{ 'indent': '-1' }, { 'indent': '+1' }],
            // [{ 'direction': 'rtl' }],
            [{'size': ['small', false, 'large', 'huge']}],
            [{'header': [1, 2, 3, 4, 5, 6, false]}],
            [{'color': []}, {'background': []}],
            // [{ 'font': [] }],
            [{'align': []}],
            ['clean'],
            ['link', 'image']
          ]
        },
        placeholder: '书写你的内容',
        readOnly: false
      }
    }
  },
  methods: {
    init () {
      const editor = this.$refs.editor
      this.Quill = new Quill(editor, this.editorOption)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>

</style>
