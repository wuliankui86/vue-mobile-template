<template>
  <div v-if="show" class="home">
    <van-cell v-for="(item,index) in list" :key="index" v-wave size="large" class="animate__animated animate__fadeInRight" :style="`animation-delay:${0.1*(index+1)}s`" icon="success" :title="item.name" @click="go(item.path)" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { API_GET_APP } from '@/api/app.js'
export default {
  data() {
    return {
      show: false,
      list: [
        {
          path: 'components',
          name: '基础组件封装'
        },
        {
          path: '',
          name: 'Vant组件按需加载'
        },
        {
          path: '',
          name: 'scss'
        },
        {
          path: '',
          name: 'axios请求封装'
        },
        {
          path: '',
          name: 'Vue-router'
        },
        {
          path: '',
          name: 'Vuex状态管理'
        },
        {
          path: '',
          name: 'animate 动画封装'
        },
        {
          path: '',
          name: '界面动画'
        },

        {
          path: '',
          name: '默认样式清除'
        },

        {
          path: '',
          name: 'vw移动端适配'
        }

      ]
    }
  },
  mounted() {
  //  API_GET_APP()
    this.$appLoading.show()
    setTimeout(() => {
      this.show = true
      this.$appLoading.hide()
    }, 1500);
  },
  methods: {
    go(name) {
      if (name) this.$router.push({ name })
    }
  }
}
</script>

<style>

</style>
