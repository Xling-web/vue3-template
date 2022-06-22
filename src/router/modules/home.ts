const Layout = () => import("@/components/layout/index.vue");

const homeRouter= {
  path: "/",
  name: "home",
  component: Layout,
  redirect: "/welcome",
  meta: {
    title: 'home',
  },
  children: [
    {
      path: "/welcome",
      name: "welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "首页"
      }
    }
  ]
};

export default homeRouter;