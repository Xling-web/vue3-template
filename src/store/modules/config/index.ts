import { Module } from 'vuex'
import configTypes from './type'
import RootStateTypes from '../../type'
import axios from "axios";

const store: Module<configTypes,RootStateTypes> = {
    state: {
        // layout模式以及主题
        Layout:'' 
    },
    mutations: {
        SET_CONFIG(state,{config}){
            let keys = Object.keys(state)
            for(let key in config){
                if(keys.indexOf(key) > -1)
                state[key] = config[key]
            }
        }
    },
    actions:{
        // 获取初始化配置
        async getServerConfig(context){
            try {
                const res = await axios.get('/config.json');
                context.commit('SET_CONFIG', { config: res.data });
            } catch {
                throw "请在public文件夹下添加config.json配置文件";
            }
        }
    }
};
  
export default store;