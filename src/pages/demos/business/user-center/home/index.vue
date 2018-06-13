<template>
  <Container>
    <template slot="header">用户中心</template>
    <button @click="handleClick">click</button>
    <div :class="{red:status}">
      doing
    </div>
    <div class="test">test</div>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      status: true
    }
  },
  methods: {
    handleClick () {
      this.status = !this.status
    }
  }
}
</script>

<style scoped>
  .red {
    color: red
  }
</style>
