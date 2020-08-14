
const _resolve = dir => require('path').join(__dirname, dir)

const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
  outputDir: 'dist',
  // 生产环境的 source map
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  configureWebpack: (config) => {
    if (IS_PROD) {
      // 为生产环境修改配置...
      config.mode = 'production'
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }

    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue', '.json', '.css', '.scss'],
        alias: {
          '@': _resolve('src'),
          '-': _resolve('src/components')
        }
      }
    })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
              @import "@/styles/variables.scss";
            `
      }
    }

  },
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    port: 8088, // 端口
    open: false, // 启动后打开浏览器
    overlay: {
      //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: false,
      errors: true
    },
    // proxy: {
    //   '/api': {
    //     target: 'https://test.xxx.com',
    //     changeOrigin: true
    //   },
    //   '/Content': {
    //     target: 'https://test.xxx.com',
    //     changeOrigin: true
    //   }
    // },
    disableHostCheck: true
  }

}
