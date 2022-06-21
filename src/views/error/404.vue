<template>
  <div class="icon">
    <svg-icon icon-class="404" />
    <div class="icon-text ml-12">
      <p class="mb-4" 
         v-motion="{
          initial:{
            opacity:0,
            y: 100
          },
          enter:{
            opacity: 1,
            y: 0,
          },
          time:600
        }">
        404
      </p>
      <p class="mb-4"
          v-motion="{
          initial:{
            opacity:0,
            y: 100
          },
          enter:{
            opacity: 1,
            y: 0,
          },
          time:900
        }">
        抱歉，你访问的页面不存在 
      </p>
      <el-button type="primary" size="small"
        @click="$router.push('/')"
        v-motion="{
          initial:{
            opacity:0,
            y: 100
          },
          enter:{
            opacity: 1,
            y: 0,
          },
          time:1200
        }">
        返回首页
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/error.scss';
</style>