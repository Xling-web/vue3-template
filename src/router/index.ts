import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'err',
    component: () => import('@/views/error/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 白名单
const whiteRoute:Array<string> = ['/login']

// 全局前置守卫
router.beforeEach((to,from,next)=>{
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

export default router