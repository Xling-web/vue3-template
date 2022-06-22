const Layout = () => import("@/components/layout/index.vue");

const errorRouter = {
  path: "/error",
  component: Layout,
  name:'error',
  redirect: "/error/403",
  meta: {
    title: '报错',
    showLink:false,//是否在导航上展示
  },
  children: [
    {
      path: "/error/403",
      name: "403",
      component: () => import("@/views/error/403.vue"),
      meta: {
        title: '403'
      }
    },
    {
      path: "/error/404",
      name: "404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        title: '404'
      }
    },
    {
      path: "/error/500",
      name: "500",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: '500'
      }
    }
  ]
};

export default errorRouter;