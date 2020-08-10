<template>
  <div class="page1">
    <van-nav-bar
      title="基础组件"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <van-button v-wave size="large" type="info">点击波浪（指令v-wave）</van-button>
      <van-button v-wave size="large" type="primary" @click="loading">加载动画(this.$appLoading.show)</van-button>
      <van-button v-wave size="large" type="info" @click="toast">toast轻提示</van-button>
      <van-button v-wave size="large" type="default">更多组件</van-button>
    </div>
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    loading() {
      this.$appLoading.show()
      setTimeout(() => {
        this.$appLoading.hide()
      }, 1500);
    },
    toast() {
      this.$appToast({
        type: 'success',
        msg: '成功提示'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
   text-align: start;
  padding: 10px;
  button{
    margin: 10px 0;
  }
}
</style>
