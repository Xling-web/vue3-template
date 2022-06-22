<template>
  <div class="icon">
    <svg-icon icon-class="403" />
    <div class="icon-text ml-12">
      <p class="mb-4" 
        v-motion="{
          initial:{ opacity:0, y: 100 },
          enter:{ opacity: 1, y: 0, },
          time:600 }">
        403
      </p>
      <p class="mb-4"
          v-motion="{
          initial:{ opacity:0, y: 100 },
          enter:{ opacity: 1, y: 0, },
          time:900}">
        抱歉，你无权访问该页面
      </p>
      <el-button type="primary" size="small"
        @click="$router.push('/')"
        v-motion="{
          initial:{ opacity:0, y: 100 },
          enter:{ opacity: 1, y: 0, },
          time:1200 }">
        返回首页
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/error.scss';
</style>