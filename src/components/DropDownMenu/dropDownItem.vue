<template>
  <div ref="bar" :class="showClass" class="drop-down-item">
    <div class="title" @touchstart="itemClick(!show)">
      <p class="p1">{{ title }}</p>
      <div class="triangle " />
    </div>
    <div v-show="show" :style="`top:${offset}px`" class="container">
      <div class="box">
        <slot />
      </div>
      <div class="overlay" @click.stop="toggle(false)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false,
      showClass: '',
      offset: 0
    };
  },
  watch: {
    show(newValue, oldValue) {
      if (this.show) {
        // eslint-disable-next-line no-unused-vars
        const rect = this.$refs.bar.getBoundingClientRect();
        this.offset = rect.top;
      }
    }
  },
  methods: {
    toggle(show, time = 400) {
      if (show) {
        this.show = show;
        setTimeout(() => {
          this.showClass = 'open';
        }, 10);
        this.$emit('open')
      } else {
        this.showClass = 'close';
        setTimeout(() => {
          this.show = show;
        }, time);
        this.$emit('close')
      }
    },
    itemClick(show) {
      this.$parent.$emit('itemClick', show);
      setTimeout(() => {
        this.toggle(show);
      }, 10);
    }
  }
};
</script>

<style lang="scss" scoped>
.drop-down-item {
  flex: 1;
  height: 100%;
  .title {
    text-align: center;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    .p1 {
      position: relative;
      padding: 0 10px;

    }
    .triangle {
        transition: all .4s;
        width: 0;
        height: 0;
        border-style: solid;
        border-width:    0 5px 6px 5px;
        border-color: transparent transparent #dcdee0 transparent;
    }
  }
  .container {
    // display: none;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    overflow: hidden;
    margin-top: 50px;
    .box {
      z-index: 2111;
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      background: white;
      transform: translate3d(0, -100%, 0);
      transition: all 0.4s;
      max-height: 80%;
      overflow: scroll;
    }
    .overlay {
      top: 0;
      left: 0;
      z-index: 2099;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      transition: all 0.4s;
      opacity: 0;
    }
  }
}
.open {
  .title {
    .triangle {
        transform: rotate(180deg);
    }
  }
  .container {
    .box {
      transform: none;
    }
    .overlay {
      opacity: 1;
    }
  }
}
// .close {
//   .container{
//       .box{
//           animation: box-fadeInDwon  .5s ease   reverse;
//       }
//   }
//   .overlay{
//       animation: overlay-fadeIn .5s ease ;

//   }
// }
</style>
