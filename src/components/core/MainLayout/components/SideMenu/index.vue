<template>
  <div>
    <el-menu :collapse="collapse">
      <template v-for="(menu, index) in sideMenu">
        <!--没有子菜单-->
        <el-menu-item
          :key="index"
          :index="String(index)"
          v-if="!menu.children && menu.title">
          <i v-if="menu.icon" :class="'fa fa-'+menu.icon"></i>
          <span slot="title">{{menu.title}}</span>
        </el-menu-item>
        <!--有子菜单-->
        <el-submenu
          :key="index"
          :index="`${menu.title}${index}`"
          v-if="menu.children">
          <template slot="title">
            <i v-if="menu.icon" :class="'fa fa-'+menu.icon"></i>
            <span slot="title">{{menu.title}}</span>
          </template>
          <el-menu-item
            :key="menuItemIndex"
            :index="`${menuItem.name}${menuItemIndex}`"
             v-for="(menuItem, menuItemIndex) in menu.children"
            @click.native="active(menuItem)"
            :class="{'is-active': menuItem.name === routeName}">
            <i v-if="menuItem.icon" :class="'fa fa-'+menuItem.icon"></i>
            <span slot="title">{{menuItem.title}}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
    <!--<div v-if="sideMenu.length <= 0">-->
      <!--没有菜单-->
    <!--</div>-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {menu, router} from '@/router/menu'
export default {
  data () {
    return {
      menu,
      router
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
  methods: {
    active (item) {
      this.$router.push({
        name: item.name
      })
    }
  }
}
</script>
