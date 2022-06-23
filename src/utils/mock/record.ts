// 导航菜单
export const permissionRouter = [
  {
    path: "/admin",
    name:"admin",
    redirect: "/admin/user",
    meta: {
      title: "后台",
      icon:"Cpu"
    },
    children: [
      {
        path: "/admin/user",
        name: "user",
        meta: {
          title: "用户",
          icon:"User"
        }
      },
      {
        path: "/admin/role",
        name: "role",
        meta: {
          title: "权限",
          icon:"Operation"
        }
      }
    ]
  }
]