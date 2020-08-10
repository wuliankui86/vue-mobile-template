/*
 * @Descripttion:
 * @version: 1.0
 * @Author: wlk
 * @Date: 2020-07-13 13:32:18
 * @LastEditors: wlk
 * @LastEditTime: 2020-07-14 10:04:31
 */
import APPToast from './index.vue'
export default {
  install(Vue, options) {
    const Toast = Vue.extend(APPToast)
    const Profile = new Toast({
      el: document.createElement('div')
    })

    // 插入到 document.body
    document.body.appendChild(Profile.$el)

    const appToastMethod = ({ type, msg }) => {
      Profile.type = type || 'erro'
      Profile.msg = msg
      Profile.showToast()
    }
    // 添加实例方法 把自定义方法挂载到Vue构造器的上,这样每个实例都可以调用。
    Vue.prototype.$appToast = appToastMethod
  }
}
