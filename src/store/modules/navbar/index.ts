import { Module } from 'vuex'
import navbarTypes from './type'
import RootStateTypes from '../../type'

const store: Module<navbarTypes,RootStateTypes> = {
    state: {
        isCollapse:false,//侧边栏是否折叠
        routeTags:[{name:"首页",path:"/welcome"}],//标签栏
    },
    mutations: {
      // 控制菜单栏折叠
      SET_COLLAPSE(state,payload:{isActive:boolean}){
        state.isCollapse = payload.isActive
      },
      // 控制标签页
      SET_TAGS(state,{routeActive,isDelete}){
        let index = state.routeTags.findIndex((v)=> v.name === routeActive.name)
        if(index === -1) state.routeTags.push(routeActive)
        if(index !== -1 && isDelete) state.routeTags.splice(index,1)
      },
    }
};
  
export default store;