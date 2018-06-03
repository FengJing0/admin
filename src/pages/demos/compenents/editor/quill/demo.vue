<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <template slot="header">基本示例</template>
      <QuillEditor
        style="min-height:200px;"
        v-model="value"
        @text-change="textChangeHandler"></QuillEditor>
    </el-card>
    <el-card>
      <template slot="header">输出</template>
      <Highlight :code="formated"
                 style="min-height:200px;"></Highlight>
    </el-card>
  </Container>
</template>

<script>
import value from './value'
import htmlFormat from '@/utils/htmlFormat.js'
export default {
  data () {
    return {
      htmlFormat,
      value
    }
  },
  computed: {
    formated () {
      return htmlFormat(this.value)
    }
  },
  methods: {
    textChangeHandler (delta, oldDelta, source) {
      // console.group('QuillEditor textChangeHandler')
      // console.log(delta, oldDelta, source)
      // console.groupEnd()
    }
  }
}
</script>
