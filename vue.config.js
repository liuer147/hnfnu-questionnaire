module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.106:8080/questionnaires',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}