module.exports = {
    plugins: {
        // 处理css前缀的插件，但是cli内置已经有了，所以现在注释掉
        // autoprefixer: {
        //     browsers: ['Android >= 4.0', 'iOS >= 8'],
        // },
        'postcss-pxtorem': {
            rootValue({ file }) {
                return file.includes('vant') ? 37.5 : 75
            },
            // rootValue: 37.5,
            propList: ['*'],
        },
    },
};