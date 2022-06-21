<template>
  <div class="home">
    <el-button type="primary">Primary</el-button>
    <button @click="onclick">登录</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script setup lang="ts">
// import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import {getLogin} from '@/utils/api/user'
import {useStore} from 'vuex'
import {xlMessage} from '@/plugins/custom'
import { message } from "@pureadmin/components";
// vuex
const store = useStore()

const onclick = ()=>{
  getLogin().then((res)=>{
    // xlMessage("登陆成功",'success',20)
  })
}

</script>
