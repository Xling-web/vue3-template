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
  breadcrumb:[],
  homePage:{path: "/welcome",name: "welcome",meta: {"title": "首页","icon": "House"}}
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
  if(route.name === 'welcome')matched = []
  state.breadcrumb = [state.homePage,...matched]
}
</script>

<style lang="scss" scoped>
// 进入前
.breadcrumb-enter-from{
  opacity: 0;
  transform: translateX(20px);
}
.breadcrumb-leave-to{
  opacity: 0;
  transform: translateX(-20px);
}

// 进入时（离开时）
.breadcrumb-enter-active,
.breadcrumb-leave-active
{
  transition: all 0.5s;
}

</style>