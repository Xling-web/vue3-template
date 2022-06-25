<template>
  <div class="navbar">
    <!-- 折叠左侧导航栏 -->
    <div class="fold">
      <transition name="sidebarLogoFade">
        <i class="iconfont" :class="isCollapse ? 'icon-toggle-right' : 'icon-toggle-left'" @click="isFold"></i>
      </transition>
    </div>
    <!-- 面包屑导航 -->
    <breadcrumb />

    <div class="btns_group">
      <!-- 全屏 -->
      <div class="btn_cn">
        <screenfull class="hoverActive"/>
      </div>
      <!-- 退出登陆 -->
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img src="@/assets/avatars.jpg" />
          <p>admin</p>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="logout">
            <el-dropdown-item @click="logout">
              <Icon icon="Place"></Icon>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- 设置 -->
      <div class="btn_cn">
        <Icon icon="Setting" size="18" @click="isSeup = true"></Icon>
      </div>

      <!-- 抽屉 -->
      <el-drawer class="drawer" v-model="isSeup" title="项目配置" :size="315">
        <el-setting />
      </el-drawer>
    </div>
  </div>
</template>

<script lang='ts' setup>
import breadcrumb from './components/breadcrumb.vue'
import screenfull from './components/screenfull.vue'
import elSetting from '../setting/index.vue'
import {reactive,computed,toRefs} from 'vue'
import { mapState,useStore } from 'vuex';
const store = useStore()
const isFold = ()=>{
  store.commit('SET_COLLAPSE',{isActive:!isCollapse.value})
}

const state = reactive({
  isSeup:false
})
const {isSeup} = toRefs(state)

// 侧边栏折叠
const isCollapse = computed(()=>{
  return store.state.navbar.isCollapse
})

// 退出登录
function logout(){

}

</script>

<style lang="scss" scoped>

.navbar{
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .fold{
    display: inline-block;
    vertical-align: middle;
    transition: all 1s;
    padding-right: 20px;
    line-height: 50px;
    &:hover{
      cursor: pointer;
      color: var(--el-color-primary);
    }
    i{
      font-size: 20px;
    }
  }
  .el-breadcrumb{
    display: inline-block;
    vertical-align: middle;
  }
}
.btns_group{
  float: right;
  display: flex;
  align-items: center;
  justify-content: end;
  min-width: 300px;
  height: 100%;
}
.btn_cn{
  padding:0 10px;
  height: 100%;
  &:hover{
    cursor: pointer;
    background-color: #f6f6f6;
  }
}
:deep(.el-drawer__header){
  margin: 0;
  padding-bottom: 20px;
  border-bottom: 1px var(--el-border-color) var(--el-border-style);
}
.el-dropdown{
  .el-dropdown-link {
      height: 50px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      box-sizing: border-box;
      cursor: pointer;
      color: #000000d9;

      &:hover {
        background: #f6f6f6;
      }
      p {
        font-size: 14px;
        padding-left: 7px;
      }
      img{
        width: 25px;
        height: 25px;
        object-fit: contain;
        border-radius: 50%;
      }
    }
}

.el-icon{
  display: block;
  height: 100%;
  line-height: 55px;
}
</style>