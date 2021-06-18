module.exports = {
  transpileDependencies: ['vuetify'],

  filenameHashing: false,
  productionSourceMap: false,

  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  pluginOptions: {
    i18n: {
      locale: 'ru',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
