import { Module } from 'vuex'
import navbarTypes from './type'
import RootStateTypes from '../../type'

const store: Module<navbarTypes,RootStateTypes> = {
    state: {
        isCollapse:false,//侧边栏是否折叠
        routeTags:[],//标签栏
    },
    mutations: {
      // 控制菜单栏折叠
      SET_COLLAPSE(state,payload:{isActive:boolean}){
        state.isCollapse = payload.isActive
      },
      // 控制标签页
      SET_TAGS(state,{routeActive}){
        let tags = new Map()
        tags.set(routeActive.name,routeActive.path)
      }
    }
};
  
export default store;