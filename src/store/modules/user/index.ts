interface obj {
  [propName:string]:any
}

import {routes} from '@/router/index'
import _ from 'lodash';

const store = {
  state: {
    token:'1312312',
    // 给侧边导航使用的菜单栏数组
    menusTree: [],
    // 深拷贝一个菜单树，与导航菜单不突出
    wholeMenus:[],
  },
  getters:{
    tokenVal:({token}) => {
      return token
    }
  },
  mutations: {
    readToken(state:obj,payload:obj){
      state.token = payload.token
    },
    // 异步获取路由菜单
    asyncActionRoutes(state:obj,payload){
      let routeList = routes.concat(...payload)
      // 给侧边导航使用的菜单栏数组
      state.menusTree = routeList.filter((v)=>{
        return v.meta?.showLink !== false
      })
      // 深拷贝一个整体的路由数组
      state.wholeMenus = _.cloneDeep(routeList)
    }
  }
};

export default store;