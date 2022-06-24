<template>
    <template v-if="hasOneShowingChild(routes.children,routes) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)">
        <el-menu-item :index="onlyOneChild.path">
            <Icon :icon="onlyOneChild.meta.icon"></Icon>
            <template #title>{{onlyOneChild.meta.title}}</template>
        </el-menu-item>
    </template>
    <el-sub-menu v-else :index="routes.path">
        <template #title>
            <Icon :icon="routes.meta.icon"></Icon>
            <span>{{routes.meta.title}}</span>
        </template>
        <el-menu-item v-for="v in routes.children" :key="v.name" :index="v.path">
            <Icon :icon="v.meta.icon"></Icon>
            {{v.meta.title}}
        </el-menu-item>
    </el-sub-menu>
</template>

<script lang='ts' setup>
import {reactive,toRefs} from 'vue'

interface stateProps {
    [propName:string]:any
}

const state:stateProps = reactive({
    onlyOneChild:{},//但只有一个子路由时，默认显示子路由
})
const {onlyOneChild} = toRefs(state)

const props = defineProps<{
    routes:{
        [x: string]: any;
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