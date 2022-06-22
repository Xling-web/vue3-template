<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    background-color="#001529"
    text-color="rgba(254, 254, 254, 0.65)"
    active-text-color="#fff"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang='ts' setup>
import { ref,computed } from 'vue'
import {useStore} from 'vuex'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const store = useStore()

const isCollapse = ref(false)

// 导航数据
const routeList = computed(()=>{
  return store.state.user.menusTree
})

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
  height:100%
}
</style>