<template>
<el-container>
    <el-aside width="auto">
        <el-sidebar />
    </el-aside>
    <el-container>
    <el-header>
        <el-navbar />
        <!-- tag标签 -->
        <el-tag />
    </el-header>
    <el-main>
        <!-- 主题内容 -->
        <router-view></router-view>
    </el-main>
    </el-container>
</el-container>
</template>

<script lang='ts' setup>
import elSidebar from './components/Sidebar/index.vue'
import elNavbar from './components/Navbar/index.vue'
import elTag from './components/tag/index.vue'
</script>

<style lang="scss" scoped>
.el-container{
    height:100vh;
    box-sizing: border-box;
}
 
.el-header{
    padding: 0;
    height: 88px;
    box-sizing: border-box;
}

</style>
