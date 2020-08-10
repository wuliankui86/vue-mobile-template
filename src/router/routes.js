export const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/tabbar/layout'),
    redirect: 'home',
    meta: { },
    children: [
      {
        path: 'home',
        component: () => import('@/views/tabbar/home'),
        name: 'home',
        meta: { title: '首页', isTab: true }
      },
      {
        path: 'personalCenter',
        component: () => import('@/views/tabbar/personalCenter'),
        name: 'personalCenter',
        meta: { title: '我的', isTab: true }
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('@/views/components'),
    meta: { title: '基础组件' }
  }
];
