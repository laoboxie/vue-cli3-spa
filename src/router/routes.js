import Home from '../views/Home.vue'

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("../views/demo/demo.vue"),
    children:[
			{
				path: 'list',
				component: resolve => require(['@/components/list.vue'],resolve),
				meta:{
					keepAlive: false,
					requiresAuth: true
				}
			},
			{
				path: 'hello',
				component: resolve => require(['@/components/HelloWorld.vue'],resolve),
				meta:{
					keepAlive: false,
					requiresAuth: true
				}
			},

		],
  }
];
