<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="v in breadcrumb" :key="v.name" :to="{ path: v.path }">{{v.meta.title}}</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang='ts' setup>
import { onBeforeMount, reactive, toRefs, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const state = reactive({
  breadcrumb:[]
})
const {breadcrumb} = toRefs(state)

watch(route,(newValue)=>{
  getBreadcrumb(newValue)
})

onBeforeMount(()=>{
  getBreadcrumb(route)
})

function getBreadcrumb(route){
  let matched = route.matched
  console.log(route)
}
</script>

<style lang="scss" scoped>
.breadcrumb-enter-from,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 1s ease;
}

.breadcrumb-leave-active {
  /* 离开动画生效时，绝对定位就会脱离标准流 */
  opacity: 0;
  transform: translateY(-30px);
}

/* 【删除数字时，列表也做动画。】 */
.breadcrumb-move {
  transition: transform 1s ease;
}
</style>