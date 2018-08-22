import Vue from "vue";
import Router from "vue-router";
import routes from "./routes.js";

Vue.use(Router);

const router = new Router({
  routes
});

//登陆鉴权
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let user = 0;
    if (!user) {
      //console.log('please login');
      next();
      // next({
      // 	path: '/login',
      // 	query: { redirect: to.fullPath }
      // })
    } else {
      next();
    }
  } else {
    next(); // 确保一定要调用 next()
  }
});

export default router;
