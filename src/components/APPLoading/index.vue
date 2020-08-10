<!--
 * @Descripttion:
 * @version: 1.0
 * @Author: wlk
 * @Date: 2020-06-04 17:34:52
 * @LastEditors: wlk
 * @LastEditTime: 2020-07-09 10:00:31
-->
<template>
  <div v-show="show" class="loading-container" :class="{loaded:show}">
    <div class="mask" />
    <div class="load-container">
      <div class="boxLoading" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'AppLoading',
  data() {
    return {
      show: false
    }
  },
  watch: {
    show(status) {
      if (status) {
        this.offPageScroll()
      } else {
        this.onPageScroll()
      }
    }
  },
  methods: {
    offPageScroll() {
      document.body.style.height = '100vh'
      document.body.style.overflow = 'hidden'
    },
    onPageScroll() {
      document.body.style.height = 'inherit'
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped lang="scss"  rel="stylesheet/scss">
.loading-container {
 // transform: translateY(-100%);
  filter: blur(30px);
  opacity: 0;
  transition: all 1s;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

  }
.load-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  .boxLoading {
    width: 30px;
    height: 30px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &:before {
      content: "";
      width: 30px;
      height: 3px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: 62px;
      left: 0;
      border-radius: 50%;
      animation: shadow 0.5s linear infinite;
    }
    &:after {
      content: "";
      width: 30px;
      height: 30px;
      background: #2f74ff;
      animation: animate-loading 0.5s linear infinite,animate-loading-color 2s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
  }
}
  &.loaded {
   // transform: translateY(0);
     filter: blur(0);
    transition: none;
    opacity: 1;
  }
}

</style>
