module.exports = {
  baseUrl: "./",
  lintOnSave: false,

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";'
      }
    }
  }
};
