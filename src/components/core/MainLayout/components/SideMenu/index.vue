<template>
  <div style="height:100%">
    <el-scrollbar>
      <div :style="{ height: `${asideHeight}px` }">
        <el-menu :collapse="collapse"
                 class="dd-side-menu">
          <template v-for="(menu, index) in sideMenu">
            <!--没有子菜单-->
            <el-menu-item :key="index"
                          :index="String(index)"
                          v-if="!menu.children && menu.title"
                          @click.native="active(menu)">
              <i v-if="menu.icon"
                 :class="'fa fa-'+menu.icon"></i>
              <span slot="title">{{menu.title}}</span>
            </el-menu-item>
            <!--有子菜单-->
            <el-submenu :key="index"
                        :index="String(index)"
                        v-if="menu.children">
              <template slot="title">
                <i v-if="menu.icon"
                   :class="'fa fa-'+menu.icon"></i>
                <span slot="title">{{menu.title}}</span>
              </template>
              <el-menu-item :key="menuItemIndex"
                            :index="`${index}-${menuItemIndex}`"
                            v-for="(menuItem, menuItemIndex) in menu.children"
                            @click.native="active(menuItem)"
                            :class="{'is-active': menuItem.name === routeName}">
                <i v-if="menuItem.icon"
                   :class="'fa fa-'+menuItem.icon"></i>
                <span slot="title">{{menuItem.title}}</span>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
        <!--<div v-if="sideMenu.length <= 0">-->
        <!--没有菜单-->
        <!--</div>-->
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {menu, router} from '@/router/menu'
export default {
  data () {
    return {
      menu,
      router,
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
    active (item) {
      this.$router.push({
        name: item.name
      })
    },
    updateAsideHeight () {
      this.asideHeight = this.$el.offsetHeight
    }
  }
}
</script>
