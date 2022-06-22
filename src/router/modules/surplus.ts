const Layout = () => import("@/components/layout/index.vue");

const surplusRouter = {
  path: "/login",
  name: "login",
  component: () => import("@/views/login/index.vue"),
  meta: {
    title: '登录',
    showLink:false,
  }
}

export default surplusRouter;