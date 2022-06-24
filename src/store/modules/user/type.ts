import { RouteRecordRaw } from 'vue-router'

export default interface settingStateTypes {
    wholeMenus: RouteRecordRaw[]
    token:string,
    menusTree: Array<RouteRecordRaw>
}
  