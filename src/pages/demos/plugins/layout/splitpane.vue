<template>
  <Container>
    <template slot='header'>区域划分</template>
    <div style="height: 400px;">
      <SplitPane :min-percent='10'
                 :default-percent='30'
                 split="vertical">
        <template slot="paneL">
          <div class="dd-m-10">左</div>
        </template>
        <template slot="paneR">
          <SplitPane split="horizontal">
            <template slot="paneL">
              <div class="dd-m-10">右上</div>
            </template>
            <template slot="paneR">
              <div class="dd-m-10">右下</div>
            </template>
          </SplitPane>
        </template>
      </SplitPane>
    </div>
  </Container>
</template>

<script>
export default {
  mounted () {
    this.showInfo()
  },
  methods: {
    showInfo () {
      this.$notify({
        title: '提示',
        message: '在横向或者纵向的分割线上拖拽调整分区大小'
      })
    }
  }
}
</script>

<style scoped>
</style>
