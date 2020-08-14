import APPToast from './index.vue'
export default {
  install(Vue, options) {
    const Toast = Vue.extend(APPToast)
    const Profile = new Toast({
      el: document.createElement('div')
    })

    // 插入到 document.body
    document.body.appendChild(Profile.$el)

    const appToastMethod = ({ type, msg, duration }) => {
      Profile.type = type || 'erro'
      Profile.msg = msg
      Profile.duration = duration || 3000
      Profile.showToast()
    }
    // 添加实例方法 把自定义方法挂载到Vue构造器的上,这样每个实例都可以调用。
    Vue.prototype.$appToast = appToastMethod
  }
}
