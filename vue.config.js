const { defineConfig} = require('@vue/cli-service');
const path = require('path');


module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@components': path.resolve(__dirname, 'src/components/'),
        }
    }
}

});
