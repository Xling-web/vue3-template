import { createStore } from "vuex"
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: ['persist','user']
})

// 动态加载modules
const modules = {};
const files = require.context("./", true, /\.ts$/);
files.keys().filter((key) => {
  if (key === "./index.ts") return false;
    return true;
  })
  .map((key) => {
    // 获取名字
    const modulePath = key.replace("./modules/", "");
    const moduleName = modulePath.replace("/index.ts", "");
    const module = require(`${key}`);
    interface keyd {
        [key:string]:any
    }
    (<keyd>modules)[`${moduleName}`] = module.default;
});

const store = createStore({
  modules: modules,
  plugins: [vuexLocal.plugin]
})

export default store