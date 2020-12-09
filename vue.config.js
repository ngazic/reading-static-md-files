module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule("raw")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  }
};
