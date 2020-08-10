
import AppLoading from './index.vue'
export default {
  install(Vue, options) {
    const Loading = Vue.extend(AppLoading)
    const Profile = new Loading({
      el: document.createElement('div')
    })

    // 插入到 document.body
    document.body.appendChild(Profile.$el)

    // 定义显示隐藏的方法  open 会传入一个text 字符串。如果有则赋值给组件内默认值。
    const appLoadingMethod = {
      show() {
        Profile.show = true
      },
      hide() {
        Profile.show = false
      }
    }
    // 添加实例方法 把自定义方法挂载到Vue构造器的上,这样每个实例都可以调用。
    Vue.prototype.$appLoading = appLoadingMethod
  }
}
