<template>
  <transition name="toast">
    <div v-show="show" :style="`background:${typeList[type].color}`" class="app-toast">
      <van-icon class="icon" :name="typeList[type].icon" />
      <p>{{ msg }}</p>
    </div>
  </transition>

</template>

<script>
import { Icon } from 'vant';
export default {
  name: 'AppToast',
  components: {
    [Icon.name]: Icon
  },
  data() {
    return {
      show: false,
      msg: '',
      options: {
        duration: 3000
      },
      toast: null,
      typeList: {
        'default': {
          color: 'rgba(172, 172, 172,1)',
          icon: ''
        },
        'success': {
          color: 'rgba(98, 165, 102,1)',
          icon: 'passed'
        },
        'warning': {
          color: 'rgba(253, 175, 23,1)',
          icon: 'info-o'
        },
        'erro': {
          color: 'rgba(253, 70, 31,1)',
          icon: 'close'
        }
      },
      type: 'erro'
    }
  },
  methods: {
    showToast(ty) {
      if (this.toast) {
        clearTimeout(this.toast);
      }
      this.show = true
      this.toast = setTimeout(() => {
        this.show = false
      }, this.options.duration);
    }
  }

}
</script>

<style lang="scss" scoped>
.app-toast{
  position: fixed;
  bottom: 7%;
  width: 80%;
  left: 10%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  background: #806464;
  min-height: 50px;
  border-radius: 36px;
  border-width: 0;
  padding: 5px 20px;
  p{
    color: white;
    font-size: 14px;
    line-height: 20px;
     display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; //需要显示的行数
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon{
    font-size: 24px;
    margin-right: 10px;
    color:white;
  }

}
</style>
<style >
   .toast-enter-active, .toast-leave-active {
    transition: all .8s ease;
  }
  .toast-enter, .toast-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(50px);
    opacity: 0;
  }
</style>
