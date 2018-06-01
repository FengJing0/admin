<template>
  <div>
    <HeaderMenu></HeaderMenu>
    <HeaderRight></HeaderRight>
    <SideMenu></SideMenu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    HeaderMenu: () => import('./components/HeaderMenu'),
    HeaderRight: () => import('./components/HeaderRight'),
    SideMenu: () => import('./components/SideMenu')
  },
  mounted () {},
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
