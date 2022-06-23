const Layout = () => import("@/components/layout/index.vue");

const homeRouter= {
  path: "/",
  name: "home",
  component: Layout,
  redirect: "/welcome",
  meta: {
    title: 'home',
    icon:"House"
  },
  children: [
    {
      path: "/welcome",
      name: "welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "首页",
        icon:"House"
      }
    }
  ]
};

export default homeRouter;