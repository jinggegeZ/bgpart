import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import layout from '../views/layout1/layout'

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/index',
        name: 'Home',
        component: Home,
        meta: {
          parentPath: '/index'
        }
      }
    ]
  },
  {
    path:'/goods',
    redirect:'/goods/index'
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/index',
        name: 'Home',
        component: Home,
        meta: {
          parentPath: '/index'
        }
      }
    ]
  },
  {
    path:'/order',
    redirect:'/order/index'
  },
  {
    path:'/order',
    redirect:'/marketing/index'
  },
  {
    path:'/order',
    redirect:'/system/index'
  },



  {
    path:'/',
    name:'layout',
    component: layout,
    children: [
      {
        path: '/index',
        name: 'Home',
        component: Home,
        meta:{
          parentPath: '/index'
        }
      },
      //index页面
      {
        path: '/index',
        name: 'index',
        component: () => 
        import("../views/index/index")
      },
      //商品
      {
        path: '/goods',
        name: 'goods',
        component: () => 
        import("../views/goods/goods")
      },
      {
        path: '/goods/index',
        name: 'goods/index',
        component: () => 
        import("../views/goods1/goods1")
      },
      {
        path: '/order',
        name: 'order',
        component: () => 
        import("../views/order/order")
      },
      {
        path: '/order/index',
        name: 'order/index',
        component: () => 
        import("../views/order1/order1")
      },
      {
        path: '/marketing',
        name: 'marketing',
        component: () => 
        import("../views/marketing/marketing")
      },
      {
        path: '/marketing/index',
        name: 'marketing/index',
        component: () => 
        import("../views/marketing1/marketing1")
      },
      {
        path: '/system',
        name: 'system',
        component: () => 
        import("../views/system/system")
      },
      {
        path: '/system/index',
        name: 'system',
        component: () => 
        import("../views/system1/system1")
      },
      {
        path: '/member',
        name: 'member',
        component: () => 
        import("../views/member/member")
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => 
        import("../views/setting/setting")
      },

    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
