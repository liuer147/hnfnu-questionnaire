module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.137.1:8080/questionnaires',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
// http://192.168.0.106:8080 超儿
// http://192.168.137.1:8080 华儿
