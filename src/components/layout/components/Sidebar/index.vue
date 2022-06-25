<template>
  <el-logo :isCollapse="isCollapse" />
  <el-scrollbar class="scrollbar">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical"
      :collapse="isCollapse"
      router
      @select="handleOpen"
      :unique-opened="false"
      background-color="#001529"
      text-color="rgba(254, 254, 254, 0.65)"
      active-text-color="#fff"
    >
      <sidebar-item v-for="v in routeList" :key="v.name" :routes="v"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang='ts' setup>
import { ref,reactive,toRefs,computed } from 'vue'
import {useStore} from 'vuex'
import { useRoute } from 'vue-router';
import SidebarItem from './SidebarItem.vue'
import elLogo from './Logo.vue'

const store = useStore()
const route = useRoute()

const state = reactive({
    activeMenu:route.path,      //当前激活的路由
    routeList:store.state.user.menusTree,               // 导航数据
})
const {activeMenu,routeList} = toRefs(state)

// 菜单激活回调
const handleOpen = (key: string) => {
  let routeActive = {name:route.meta?.title,path:key}
  console.log(routeActive)
}

//是否水平折叠收起菜单
const isCollapse = computed(()=>{
  return store.state.navbar.isCollapse
})

</script>

<style lang="scss" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.el-menu{
  border:0 !important;
  background: #001529;
  height: 100%;
}
.scrollbar{
  height: calc(100% - 50px);
  :deep(.el-scrollbar__view){
    height: 100%;
  }
}
</style>