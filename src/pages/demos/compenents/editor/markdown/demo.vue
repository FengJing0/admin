<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <template slot="header">基本示例</template>
      <SimpleMDE v-model="text" ref="dd"></SimpleMDE>
    </el-card>
    <el-card>
      <template slot="header">输出</template>
      <Markdown :md="text"></Markdown>
    </el-card>
  </Container>
</template>

<script>
import text from './text'

export default {
  data () {
    return {
      text
    }
  },
  watch: {
    text () {
      console.log(this.$refs.dd)
    }
  }
}
</script>
