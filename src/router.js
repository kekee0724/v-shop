import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/pages/home/home'),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('@/mall/user/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('@/mall/cart/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/mall/login/login'),
    meta: {
      title: '登录/注册'
    }
  },
  {
    name: 'goods-detail',
    path: '/goods-detail',
    component: () => import('@/mall/goods-detail/goods-detail'),
    meta: {
      title: '商品详情'
    }
  },
  {
    name: 'goods-reputation',
    path: '/goods-reputation',
    component: () => import('@/mall/goods-reputation/goods-reputation'),
    meta: {
      title: '全部评价'
    }
  },
  {
    name: 'order-submit',
    path: '/order-submit',
    component: () => import('@/mall/order-submit/order-submit'),
    meta: {
      title: '提交订单'
    }
  },
  {
    name: 'order-list',
    path: '/order-list',
    component: () => import('@/mall/order-list/order-list'),
    meta: {
      title: '订单列表'
    }
  },
  {
    name: 'order-detail',
    path: '/order-detail',
    component: () => import('@/mall/order-detail/order-detail'),
    meta: {
      title: '订单详情'
    }
  },
  {
    name: 'address-list',
    path: '/address-list',
    component: () => import('@/mall/address-list/address-list'),
    meta: {
      title: '管理收货地址'
    }
  },
  {
    name: 'address-edit',
    path: '/address-edit',
    component: () => import('@/mall/address-edit/address-edit'),
    meta: {
      title: '管理收货地址'
    }
  },
  {
    name: 'coupons',
    path: '/coupons',
    component: () => import('@/mall/user/coupons'),
    meta: {
      title: '我的优惠券'
    }
  },
  {
    name: 'setting',
    path: '/setting',
    component: () => import('@/mall/user/setting'),
    meta: {
      title: '我的资料'
    }
  },
  {
    name: 'favgoods',
    path: '/favgoods',
    component: () => import('@/mall/user/favgoods'),
    meta: {
      title: '我的收藏'
    }
  },
  {
    name: 'cashlog',
    path: '/cashlog',
    component: () => import('@/mall/user/cashlog'),
    meta: {
      title: '资金明细'
    }
  },
  {
    name: 'refund',
    path: '/refund',
    component: () => import('@/mall/refund/refund'),
    meta: {
      title: '退款/售后'
    }
  },
  {
    name: 'refund-apply',
    path: '/refund-apply',
    component: () => import('@/mall/refund/refund-apply'),
    meta: {
      title: '申请售后'
    }
  },
  {
    name: 'pintuan',
    path: '/pintuan/pintuan',
    component: () => import('@/mall/pintuan/pintuan'),
    meta: {
      title: '拼团详情'
    }
  },
  {
    name: 'pintuan-rule',
    path: '/pintuan/rule',
    component: () => import('@/mall/pintuan/rule'),
    meta: {
      title: '多人拼团玩法'
    }
  },
  {
    name: 'pintuan-joiner',
    path: '/pintuan/joiner',
    component: () => import('@/mall/pintuan/joiner'),
    meta: {
      title: '团员情况'
    }
  },
  {
    name: 'kanjia',
    path: '/kanjia/kanjia',
    component: () => import('@/mall/kanjia/kanjia'),
    meta: {
      title: '砍价购'
    }
  },
  {
    name: 'kanjia-rule',
    path: '/kanjia/rule',
    component: () => import('@/mall/kanjia/rule'),
    meta: {
      title: '玩法详情'
    }
  },
  {
    name: 'test',
    path: '/test',
    component: () => import('@/mall/test/index'),
    meta: {
      title: '测试'
    }
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/mall/error-page/404'),
    meta: {
      title: '404'
    }
  },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// add route title
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router
