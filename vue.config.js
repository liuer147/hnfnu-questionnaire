module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.100:8088/questionnaires',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
/*  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: '考试系统',
    resolve: {
      alias: {
        '@': resolve('src'),
        'c': resolve('src/components'),
        'e': resolve('src/components/element-ui'),
      }
    }
  },*/
}

// http://192.168.0.100:8088 超儿
// http://192.168.0.106:8080 超儿
// http://192.168.137.1:8080 华儿
