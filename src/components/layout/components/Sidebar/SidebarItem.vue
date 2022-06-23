<template>
    <template v-if="hasOneShowingChild(routes.children,routes) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)">
        <el-menu-item :index="onlyOneChild.path">
            <el-icon><icon-menu /></el-icon>
            <template #title>{{onlyOneChild.meta.title}}</template>
        </el-menu-item>
    </template>
    <el-sub-menu v-else :index="routes.path">
        <template #title>
        <el-icon><location /></el-icon>
        <span>{{routes.meta.title}}</span>
        </template>
        <el-menu-item v-for="v in routes.children" :key="v.name" :index="v.path">{{v.meta.title}}</el-menu-item>
    </el-sub-menu>
</template>

<script lang='ts' setup>
import {reactive,toRefs} from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const state = reactive({
    onlyOneChild:{},//但只有一个子路由时，默认显示子路由
})
const {onlyOneChild} = toRefs(state)

const props = defineProps<{
    routes:{
        type:Object,
        required:true
    }
}>()

// 判断菜单显示层级
function hasOneShowingChild(children = [], parent) {
    const showingChildren = children.filter(item => {
        state.onlyOneChild = item
        return true
    })
    // 当只有一个子路由器时，默认情况下会显示子路由器
    if (showingChildren.length === 1) {
        return true
    }

    // 则如果没有要显示的子路由器，显示父路由器
    if (showingChildren.length === 0) {
        state.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
    }
    return false
}

</script>

<style lang="scss" scoped>
</style>