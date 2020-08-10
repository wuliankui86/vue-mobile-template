<template>
  <div class="node-item">
    <div class="node-content" @click="isshow=!isshow">
      <slot name="node" />
    </div>
    <transition @beforeEnter="beforeEnter" @enter="enter" @afterEnter="afterEnter" @beforeLeave="beforeLeave" @leave="leave">
      <div v-show="isshow" class="node-child">
        <slot />
      </div>
    </transition>

  </div>

</template>

<script>
export default {
  data() {
    return {
      isshow: false
    }
  },
  methods: {
    beforeEnter(el) {
      if (!el.dataset) el.dataset = {};
      const styles = window.getComputedStyle(el);
      // 记录展开前的属性值
      el.dataset.oldOverflow = styles.getPropertyValue('overflow');
      el.dataset.oldPaddingTop = styles.getPropertyValue('padding-top');
      el.dataset.oldPaddingBottom = styles.getPropertyValue('padding-bottom');
      // 这三个都为0，scrollHeight的高度就是真实的内容高度了
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
      el.classList.add('collapse-transition');
      el.style.overflow = 'hidden';
    },

    enter(el) {
      if (el.scrollHeight !== 0) {
        // 动画过程中，逐渐增大到展开前应占的高度值
        el.style.height = el.scrollHeight + 'px';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
    },

    afterEnter(el) {
      el.classList.remove('collapse-transition');
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
    },
    beforeLeave(el) {
    // ...

      el.style.height = el.scrollHeight - parseFloat(el.dataset.oldPaddingTop) - parseFloat(el.dataset.oldPaddingBottom) + 'px';
      el.style.overflow = 'hidden';
      el.classList.add('collapse-transition');
    // var tmp = el.offsetTop;
    },
    leave(el) {
      setTimeout(() => {
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }, 10);
    }
  }

}
</script>

<style lang="scss" scoped>
.node-item{
    height: auto;
    color: #606266;
    .node-child{
        overflow: hidden;
        transition: all .5s
    }
}
</style>
