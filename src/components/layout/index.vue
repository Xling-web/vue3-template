<template>
<el-container>
    <el-aside width="200px">
        <el-sidebar />
    </el-aside>
    <el-container>
    <el-header>Header</el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
    </el-container>
</el-container>
</template>

<script lang='ts' setup>
import elSidebar from './components/sidebar.vue'
</script>

<style lang="scss" scoped>
.el-container{
    height:100vh;
    box-sizing: border-box;
}
.el-menu{
    border:0;
}
</style>
