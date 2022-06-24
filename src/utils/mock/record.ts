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
  },
  {
    path: "/ceshi",
    name:"ceshi",
    redirect: "/ceshi/user",
    meta: {
      title: "测试",
      icon:"Cpu"
    },
    children: [
      {
        path: "/ceshi/user",
        name: "ceshi1",
        meta: {
          title: "测试子1",
          icon:"User"
        }
      },
      {
        path: "/ceshi/role",
        name: "ceshi2",
        meta: {
          title: "测试子2",
          icon:"Operation"
        }
      }
    ]
  }
]