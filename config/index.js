const sass = require('gulp-sass');

const server_config = require('./server_config')  //导入server_config模块
const webpack_config = require('./webpask_config')

const config = {
    server_config,
    sass_config : sass({outputStyle: 'compressed'}).on('error', sass.logError),   //sass的配置项
    webpack_config
}

module.exports = config