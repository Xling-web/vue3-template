<template>
  <div class="icon">
    <svg-icon icon-class="404" />
    <div class="icon-text ml-12">
      <p class="mb-4">
        404
      </p>
      <p class="mb-4">
        抱歉，你访问的页面不存在
      </p>
      <el-button type="primary"
        @click="$router.push('/')">
        返回首页
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon{
  display:flex;
  height: 640px;
  justify-content:center;
  align-items: center;
  .icon-text{
    padding-left: 50px;
  }
}
</style>