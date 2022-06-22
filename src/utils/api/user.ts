import { http } from "../http";

// 登录
export const getLogin = (data: object) => {
    return http.request("post", "/login", { data });
}; 

// 导航栏
export const getMenu = (data: object) => {
    return http.request("post", "/getMenu", { data });
}; 