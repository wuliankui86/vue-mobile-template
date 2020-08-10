import axios from 'axios';

import router from '@/router';

import { getToken, getDeviceId } from '@/lib/cookie';

import Vue from 'vue';

class HttpRequest {
  // eslint-disable-next-line no-undef
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl;
    this.queue = {};
    this.isShowLoading = false // 是否打开loading
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'access-token': getToken() || '',
        device_id: getDeviceId() || ''
      },
      timeout: 10000 // 请求超时时间
    };
    return config;
  }
  destroy(url) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length && this.isShowLoading) {
      Vue.prototype.$appLoading.hide();
    }
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        this.queue[url] = true;
        // 添加全局的loading...
        if (config.showLoading && !this.isShowLoading) {
          Vue.prototype.$appLoading.show();
        }

        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        this.destroy(url);
        const { data } = res;
        // if (status === 407) {
        //   router.push({ name: 'accountLogin' });
        //   return Promise.reject(new Error('身份验证失败!'));
        // } else if (status === 403) {
        //   router.push({ name: 'accountLogin' });
        //   return Promise.reject(new Error(data));
        // } else {

        // }

        console.log(data);
        return data;
      },
      error => {
        this.destroy(url);
        if (error.response) {
          switch (error.response.status) {
            case 403:
              Vue.prototype.$appToast({ msg: error.response.data });
              router.push({ name: 'home' });
              return;
          }
        }
        Vue.prototype.$appToast({ msg: '网络超时，请检查网络后重试!' });
        // let errorInfo = error.response
        // if (!errorInfo) {
        //   const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        //   errorInfo = {
        //     statusText,
        //     status,
        //     request: { responseURL: config.url }
        //   }
        // }
        // addErrorLog(errorInfo)
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;
