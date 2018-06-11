<template>
  <el-container class="layout-main" :class="theme">
    <el-header>
      <div class="logo-group" :style="logoGroupStyle">
        <img v-if="collapse" src="@/assets/image/logo/header-icon-only.png">
        <img v-else src="@/assets/image/logo/header.png">
      </div>
      <el-tooltip placement="left" v-if="!isIndex">
        <div slot="content">{{content}}</div>
        <div class="toggle-sidemenu-btn" @click="toggleAside">
          <Icon name="bars"></Icon>
        </div>
      </el-tooltip>
      <HeaderMenu></HeaderMenu>
      <HeaderRight></HeaderRight>
    </el-header>
    <el-container>
      <el-aside :style="logoGroupStyle" v-if="!isIndex">
        <SideMenu :collapse="collapse"></SideMenu>
      </el-aside>
      <el-main>
        <transition name="fade-transverse">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      theme: 'default',
      collapse: false,
      content: '展开菜单'
    }
  },
  methods: {
    toggleAside () {
      this.collapse = !this.collapse
      this.content = this.collapse ? '展开菜单' : '收起菜单'
    }
  },
  computed: {
    logoGroupStyle () {
      return `width:${this.collapse ? 65 : 200}px;`
    },
    isIndex () {
      return this.$route.name.indexOf('index') === 0
    }
  },
  components: {
    HeaderMenu: () => import('./components/HeaderMenu'),
    HeaderRight: () => import('./components/HeaderRight'),
    SideMenu: () => import('./components/SideMenu')
  }
}
</script>

<style lang="scss">
@import '@/assets/style/theme/default.scss';
</style>
