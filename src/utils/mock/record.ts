// 导航菜单
export const permissionRouter = {
    path: "/permission",
    redirect: "/permission/page/index",
    meta: {
      title: "menus.permission",
      icon: "lollipop",
    },
    children: [
      {
        path: "/permission/page/index",
        name: "permissionPage",
        meta: {
          title: "menus.permissionPage"
        }
      },
      {
        path: "/permission/button/index",
        name: "permissionButton",
        meta: {
          title: "menus.permissionButton",
        }
      }
    ]
};
