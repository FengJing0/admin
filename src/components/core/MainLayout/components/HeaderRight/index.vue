<template>
  <div class="btn-group">
    <FullScreen></FullScreen>
    <UserDropdown></UserDropdown>
  </div>
</template>

<script>
export default {
  components: {
    FullScreen: () => import('./components/FullScreen'),
    UserDropdown: () => import('./components/UserDropdown')
  }
}
</script>

<style scoped>

</style>
