import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // 站点标题赋值
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }

  // 页面跳转动画赋值
  const isBack = router.isBack
  if (isBack) {
    router.transitionName = 'slide-right'
  } else {
    router.transitionName = 'slide-left'
  }
  router.isBack = false

  next()
})

window.addEventListener('popstate', (event) => {
  router.isBack = true
//  window.history.go(-1)
});

// 解决Loading chunk (\d)+ failed问题
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  if (isChunkLoadFailed) {
    // 用路由的replace方法，并没有相当于F5刷新页面，失败的js文件并没有从新请求，会导致一直尝试replace页面导致死循环，而用 location.reload 方法，相当于触发F5刷新页面，虽然用户体验上来说会有刷新加载察觉，但不会导致页面卡死及死循环，从而曲线救国解决该问题
    location.reload();
  }
});
export default router;
