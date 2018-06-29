<template>
  <div style="height:100%">
    <el-scrollbar>
      <div :style="{ height: `${asideHeight}px` }">
        <el-menu :collapse="collapse"
                 class="dd-side-menu"
                 :default-active='routeName'
                 @select="active">
          <template v-for="(menu, index) in sideMenu">
            <!--没有子菜单-->
            <MenuItem :key="index"
                      v-if="menu.children === undefined && menu.title !== undefined"
                      :menu='menu' />
            <!--有子菜单-->
            <el-submenu :key="index"
                        :index="String(index)"
                        v-if="menu.children">
              <template slot="title">
                <i :class="`fa fa-${menu.icon || 'folder-o'}`"></i>
                <span slot="title">{{menu.title}}</span>
              </template>
              <template v-for="(menuItem, menuItemIndex) in menu.children">
                <MenuItem :key="menuItemIndex"
                          v-if="!menuItem.children && menuItem.title"
                          :menu='menuItem'
                          :class="{'is-active': menuItem.name === routeName}" />
              </template>
            </el-submenu>
          </template>
        </el-menu>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      asideHeight: 300
    }
  },
  props: {
    collapse: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    routeName () {
      return this.$route.name
    },
    ...mapState({
      sideMenu: state => state.menu.sideMenu
    })
  },
  components: {
    MenuItem: () => import('../MenuItem')
    // MenuSub: () => import('../MenuSub')
  },
  mounted () {
    this.updateAsideHeight()
    window.onresize = () => {
      this.updateAsideHeight()
    }
  },
  beforeDestroy () {
    window.onresize = function () {}
  },
  methods: {
    active (name) {
      this.$router.push({name})
    },
    updateAsideHeight () {
      this.asideHeight = this.$el.offsetHeight
    }
  }
}
</script>
