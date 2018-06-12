<template>
  <Container>
    <template slot="header">demo-1</template>
    <DemoI18nControl></DemoI18nControl>
    <DemoI18n></DemoI18n>
  </Container>
</template>

<script>
export default {
  components: {
    DemoI18n: () => import('./components/DemoI18n'),
    DemoI18nControl: () => import('./components/DemoI18nControl')
  }
}
</script>

<style scoped>

</style>
