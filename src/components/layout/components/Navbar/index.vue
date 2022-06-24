<template>
  <div class="navbar">
    <div class="fold">
      <transition name="sidebarLogoFade">
        <i class="iconfont" :class="isCollapse ? 'icon-toggle-right' : 'icon-toggle-left'" @click="isFold"></i>
      </transition>
    </div>
    <breadcrumb />
  </div>
</template>

<script lang='ts' setup>
import breadcrumb from './components/breadcrumb.vue'
import { computed } from '@vue/reactivity';
import { mapState,useStore } from 'vuex';
const store = useStore()
const isFold = ()=>{
  store.commit('SET_COLLAPSE',{isActive:!isCollapse.value})
}

const isCollapse = computed(()=>{
  return store.state.navbar.isCollapse
})

</script>

<style lang="scss" scoped>

.navbar{
  height: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .fold{
    transition: all 1s;
    padding-right: 20px;
    &:hover{
      cursor: pointer;
      color: var(--el-color-primary);
    }
    i{
      font-size: 20px;
    }
  }
}
</style>