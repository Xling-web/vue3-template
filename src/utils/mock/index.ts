const Mock = require('mockjs');
import{permissionRouter} from './record'

// 登录
Mock.mock("/login", (req, res) => {
  return Mock.mock({status:200,message:"登录成功"});
});

// 菜单栏
Mock.mock("/getMenu", (req, res) => {
  return Mock.mock(permissionRouter);
});