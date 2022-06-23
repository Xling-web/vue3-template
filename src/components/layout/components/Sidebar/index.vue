<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical"
    :collapse="isCollapse"
    router
    @open="handleOpen"
    @close="handleClose"
    background-color="#001529"
    text-color="rgba(254, 254, 254, 0.65)"
    active-text-color="#fff"
  >
    <sidebar-item v-for="v in routeList" :key="v.name" :routes="v"></sidebar-item>
  </el-menu>
</template>

<script lang='ts' setup>
import { ref,computed,reactive,toRefs } from 'vue'
import {useStore} from 'vuex'
import { useRouter } from 'vue-router';
import SidebarItem from './SidebarItem.vue'
const store = useStore()
const router = useRouter()

const state = reactive({
    activeMenu:router.currentRoute._rawValue.path,      //当前激活的路由
    isCollapse:false,                                   //是否水平折叠收起菜单
    routeList:store.state.user.menusTree,               // 导航数据
})
const {activeMenu,isCollapse,routeList} = toRefs(state)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height:100%;
}
</style>