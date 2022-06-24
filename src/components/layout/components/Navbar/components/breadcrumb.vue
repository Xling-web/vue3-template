<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="v in breadcrumb" :key="v.name" :to="{ path: v.path }">{{v.meta.title}}</el-breadcrumb-item>
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
  let matched = route.matched[0].children
  let index = matched.findIndex((v)=>{return v.path === route.path})
  state.breadcrumb = matched.slice(0,index+1)
}
</script>
