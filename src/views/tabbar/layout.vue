<template>
  <div class="layout">
    <transition name="fadeIn">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <van-tabbar
      :z-index="parseInt(999)"
      route
      active-color="#1296db"
      inactive-color="#7d7e80"
    >
      <van-tabbar-item
        v-for="(x,y) in tabbar"
        :key="y"
        replace
        :to="x.route"
      >
        <span>{{ x.name }}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? x.active : x.inactive"
        >

      </van-tabbar-item>

    </van-tabbar>
  </div>
</template>
<script type="text/ecmascript-6">
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'Layout',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      tabbar: [{
        route: '/home',
        name: '主页',
        active: require('@/assets/icon/home_select.png'),
        inactive: require('@/assets/icon/home.png')
      }, {
        route: '/personalCenter',
        name: '我的',
        active: require('@/assets/icon/admin_select.png'),
        inactive: require('@/assets/icon/admin.png')
      }]
    }
  }

}
</script>
<style scoped lang="scss"  rel="stylesheet/scss">
.layout{
    overflow: hidden;
    padding-bottom: 50px;

}
</style>
