import {RouteRecordRaw } from 'vue-router'
import router from './index'
import store from '@/store'
import { getMenu } from "@/utils/api/user";
const Layout = () => import("@/components/layout/index.vue");

// 初始化路由
function initRouter(name: string) {
    return new Promise(resolve => {
        getMenu({ name }).then((res:RouteRecordRaw) =>{
            if(!Array.isArray(res))return
            formatRoutes(res)
            res.forEach((v:RouteRecordRaw)=>{
                if (!router.hasRoute(v?.name)) router.addRoute(v)
                // 切记将路由push到routes后还需要使用addRoute，这样路由才能正常跳转
                router.options.routes.push(v);
                if (!router.hasRoute(v?.name)) router.addRoute(v);
                const flattenRouters = router.getRoutes().find(n => n.path === "/");
                router.addRoute(flattenRouters)
            })
            resolve(router);
            store.commit('asyncActionRoutes',res)
        })
    })
}

// 递归给每个对象添加component
function formatRoutes(routesList: RouteRecordRaw[]){
    routesList.forEach((v:RouteRecordRaw)=>{
        if(v.redirect){
            v = Object.assign(v,{component: Layout})
        }else{
            v = Object.assign(v,{component: () => import(`@/views${v.path}/index.vue`)})
        }
        if(v.children)formatRoutes(v.children)
    })
}

/**
 * 将多级嵌套路由处理成一维数组
 * @param routesList 传入路由
 * @returns 返回处理后的一维路由
 */
 function formatFlatteningRoutes(routesList: RouteRecordRaw[]) {
    if (routesList.length === 0) return routesList;
    for (let i = 0; i < routesList.length; i++) {
      if (routesList[i].children) {
        routesList = routesList
          .slice(0, i + 1)
          .concat(routesList[i].children, routesList.slice(i + 1));
      }
    }
    return routesList;
}

export {
    initRouter
}