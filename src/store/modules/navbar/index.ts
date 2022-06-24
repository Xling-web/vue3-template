import { Module } from 'vuex'
import navbarTypes from './type'
import RootStateTypes from '../../type'

const store: Module<navbarTypes,RootStateTypes> = {
    state: {
        isCollapse:false,//侧边栏是否折叠
    },
    mutations: {
      SET_COLLAPSE(state,payload:{isActive:boolean}){
        state.isCollapse = payload.isActive
      }
    }
};
  
export default store;