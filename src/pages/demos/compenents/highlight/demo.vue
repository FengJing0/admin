<template>
  <Container type="ghost">
    <el-card class="dd-mb">代码高亮组件</el-card>
    <el-card class="dd-mb">
      <template slot="header">javascript</template>
      <Highlight :code="codeJavascript"></Highlight>
    </el-card>
    <el-row class="dd-mb" :gutter="20">
      <el-col :span="8">
        <el-card>
          <template slot="header">css</template>
          <Highlight :code="codeCSS"></Highlight>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template slot="header">scss</template>
          <Highlight :code="codeSCSS"></Highlight>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template slot="header">html</template>
          <Highlight :code="codeHTML"></Highlight>
        </el-card>
      </el-col>
    </el-row>
    <el-card>
      <markdown url="/static/md/组件 - 代码高亮.md"></markdown>
    </el-card>
  </Container>
</template>

<script>
import codeJavascript from './code/javascript'
import codeCSS from './code/css'
import codeSCSS from './code/scss'
import codeHTML from './code/html'
export default {
  data () {
    return {
      codeJavascript,
      codeCSS,
      codeSCSS,
      codeHTML
    }
  }
}
</script>
