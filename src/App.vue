<template>
  <div id="app">
    <transition :name="$router.transitionName">
      <keep-alive :exclude="exclude" :include="aliveComponent">
        <router-view class="view" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: this.$router.transitionName || 'slide-left',
      aliveComponent: ['Layout'], // 需要缓存的路由name
      exclude: [] // 阻止缓存的路由name
    };
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  font-family: PingFang SC,-apple-system, BlinkMacSystemFont, 'Helvetica Neue','Microsoft Yahei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
.view {
  position: absolute!important;
  width: 100%;
  height: 100%;
  transition: all .4s ease-in-out;
   /* transition: all .5s cubic-bezier(0.55, 0, 0.1, 1); */
}
.slide-left-enter, .slide-right-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
