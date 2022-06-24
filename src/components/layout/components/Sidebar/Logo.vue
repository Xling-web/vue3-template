<template>
  <div class="logo">
    <router-link class="sidebar-logo-link" :class="isCollapse ? 'el-menu--collapse' : ''" to="/">
      <img :src="logo" class="sidebar-logo">
      <transition name="fade">
        <h1 v-if="!isCollapse" class="sidebar-title">{{ title }} </h1>
      </transition>
    </router-link>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs } from 'vue';

const state = reactive({
  logo:require("@/assets/logo.png"),
  title:"XlingAdmin"
})
const {logo,title} = toRefs(state)

interface Props {
  isCollapse: boolean;
}

withDefaults(defineProps<Props>(), {
  isCollapse: false
});

</script>

<style lang="scss" scoped>
.logo{
  background: #001529;
}
  // 进入前、离开后
.fade-enter-from,.fade-leave-to {
  width: 0;
  opacity: 0;
}
// 离开前、进入后
.fade-leave-from,.fade-enter-to {
  width: 100px;
  opacity: 1;
}
// 进入的这个阶段、进入的这个阶段
.fade-leave-active,.fade-enter-active {
  transition: width 2s ease;
}

.sidebar-logo-link{
  display: block;
  height: 50px;
  box-sizing: border-box;
  background: #001529;
  padding: 0 18px;
  display: flex;
  align-items: center;
  img{
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
  h1{
    display: inline-block;
    color: #1890ff;
    font-weight: 600;
    font-size: 20px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    padding-left: 7px;
  }
}
</style>