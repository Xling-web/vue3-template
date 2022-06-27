<template>
  <div class="tags-view">
    <el-tag class="tag" 
      v-for="v in tags" :key="v.id" 
      :color="route.path === v.path ? '' : 'white'" 
      :class="route.path === v.path ? 'schedule-active' : ''" 
      :closable="v.path !== '/welcome'"
      @click="onTags(v)" 
      @close="delTags(v)"
      v-on:mouseenter="moveIn($event)"
      v-on:mouseleave="moveOut($event)">
        {{v.name}}
        <div class="schedule"></div>
    </el-tag>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, watch, ref } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute()
const router = useRouter()
const store = useStore()

const state = reactive({
  tags:store.state.navbar.routeTags
})
const {tags} = toRefs(state)

// 点击标签栏
interface tagType {
  id:number,
  name:string,
  path:string
}

//激活标签栏 
function onTags(val:tagType){
  router.push(val.path)
}

// 删除标签栏
function delTags(val:tagType){
  store.commit('SET_TAGS',{routeActive:val,isDelete:true})
  console.log(state.tags[state.tags.length-1].path)
  router.push(state.tags[state.tags.length-1].path)
}

// 鼠标移入
function moveIn(el){
  let schedule = el.target.children[0]?.children
  if(schedule !== undefined && schedule.length === 1)
  schedule[0].setAttribute('class','schedule-in')
}

// 鼠标移出
function moveOut(el){
  let schedule = el.target.children[0]?.children
  if(schedule !== undefined && schedule.length === 1)
  schedule[0].setAttribute('class','schedule-out')
}

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
    position: relative;
    transition: all 0.4s;
    padding-right: 5px;
    &:hover{
      cursor: pointer;
    }
  }
}

/* 激活时显示 */
.schedule-active {
   &:after{
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: var(--el-color-primary);
  }
}

/* 鼠标移入显示蓝色进度条 */
.schedule-in {
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: var(--el-color-primary);
  animation: scheduleInWidth 400ms ease-in;
}

/* 鼠标移出隐藏蓝色进度条 */
.schedule-out {
  width: 0;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: var(--el-color-primary);
  animation: scheduleOutWidth 400ms ease-in;
}
@keyframes scheduleInWidth {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes scheduleOutWidth {
  from {
    width: 100%;
  }

  to {
    width: 0;
  }
}
</style>