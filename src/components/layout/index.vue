<template>
<el-container>
    <el-aside width="auto">
        <el-sidebar />
    </el-aside>
    <el-container>
    <el-header>
        <el-navbar />
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
    </el-container>
</el-container>
</template>

<script lang='ts' setup>
import elSidebar from './components/Sidebar/index.vue'
import elNavbar from './components/Navbar/index.vue'
</script>

<style lang="scss" scoped>
.el-container{
    height:100vh;
    box-sizing: border-box;
}

.el-header{
    padding: 0;
}

</style>
