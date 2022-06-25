<template>
  <div class="tags-view">
    <el-tag class="tag" closable>
        首页
    </el-tag>
     <el-tag class="tag" closable>
        首页
    </el-tag>
  </div>
</template>

<script lang='ts' setup>

</script>

<style lang="scss" scoped>
.tags-view{
    height: 38px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 1px #888;
    .tag{
        height: 28px;
        margin: 0 3px;
        background-color: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
    }
}
</style>