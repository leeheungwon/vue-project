const { defineConfig } = require('@vue/cli-service')
module.exports = config = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  }
}