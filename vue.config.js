const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
const SvgPreview = require('svg-preview-plugin'); // 解决项目中 svg 文件过多，不好管理的问题

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // 全局注入 scss 变量,注意写法中的分号的位置！！！！！！！！！！！
                prependData: `@import "@/styles/element-variables.scss";
                              @import "@/styles/variables.scss";
                              @import "@/styles/mixin.scss";`
            }
        }
    },
    chainWebpack(config) {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    },
    configureWebpack: {
        plugins: [
            new SvgPreview.WebpackPlugin({
                dirPath: path.resolve('src/icons/svg'),
                port: 3000
            })
        ]
    }
}