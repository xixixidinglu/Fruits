
const webpack_config = {
    //入口文件，是所有依赖关系的入口，webpack从这个入口开始静态解析，分析模块之间的依赖关系
    // entry: {             
    //     index : './src/js/index.js'
    // },
    entry: [ './src/js/index.js'],
    output: {                                  //打包输出的配置
        filename: 'main.js'  
    }
}

module.exports = webpack_config