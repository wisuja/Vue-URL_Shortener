module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/Vue-URL_Shortener/' : '/',
  devServer: {
    // port: 8080,
    proxy: {
      '/api': {
        target: 'https://vue-url-shortener-api.herokuapp.com/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
