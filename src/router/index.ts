import { Router,createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'
import _ from 'lodash';
import {initRouter} from './utils'
import homeRouter from "./modules/home";
import errorRouter from "./modules/error";
import surplusRouter from "./modules/surplus";
import NProgress from "@/utils/progress";

// 原始静态路由（未做任何处理）
const routes:Array<RouteRecordRaw> = [homeRouter, errorRouter, surplusRouter];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:_.cloneDeep(routes)
})

// 白名单
const whiteRoute:Array<string> = ['/login']

// 全局前置守卫
router.beforeEach((to,from,next)=>{
  NProgress.start();
  if(!from?.name && from.name !== '/login'){
    initRouter('admin').then((router:Router)=>{
      router.push(to.fullPath)
    })
  }
  
  // 前置守卫，没有token跳转登录页
  const token:string = store.getters['tokenVal']
  if(token === ""){
    if(whiteRoute.indexOf(to.path) === -1){
      next('/login')
    }else{
      next()
    }
  }else{
    next()
  }
})

router.afterEach(() => {
  NProgress.done();
});

export {
  routes
}

export default router