import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: (resolve) => require(["@/views/login/index"], resolve),
  },
  {
    path: "/",
    name: "Home",
    component: (resolve) => require(["@/views/home"], resolve),
    redirect: "/center",
    children: [
      {
        path: "/index",
        name: "Index",
        component: (resolve) => require(["@/views/main/index"], resolve),
      },
      {
        path: "/map",
        name: "Map",
        component: (resolve) => require(["@/views/map/index"], resolve),
      },
      {
        path: "/rank",
        name: "Rank",
        component: (resolve) => require(["@/views/rank/index"], resolve),
      },
      {
        path: "/alert",
        name: "Alert",
        component: (resolve) => require(["@/views/alert/index"], resolve),
      },
      {
        path: "/center",
        name: "Center",
        component: (resolve) => require(["@/views/center/index"], resolve),
      },
    ],
  },
];

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

router.beforeEach((to, from, next) => {
  // 当不是登录页时 要判断登录状态，根据状态判断是否跳转登录页
  console.log("当前router:", router);
  const isLogin = router.app.$options.store.state.user.userInfo.isLogin;
  if (to.path.startsWith("/login") || isLogin) {
    next();
  } else {
    next({ name: "Login" });
  }
});
export default router;
