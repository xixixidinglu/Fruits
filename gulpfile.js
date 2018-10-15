
const gulp = require('gulp')
const server = require('gulp-webserver')
const sass = require('gulp-sass')
const webpack = require('webpack-stream')

//全局的配置
const config = require('./config')//会自动找到index.js

// 服务配置
const { server_config ,sass_config,webpack_config} = config


//热更新服务器
gulp.task('webserver',function(){
    return gulp.src('./dist')
            .pipe(server(server_config))
})

//输出HTML页面

gulp.task('copy:html', () => {
    return gulp.src('./src/**/*.html')
            .pipe(gulp.dest('./dist/'))
})
//处理sass
gulp.task('compile:scss', () => {
    return gulp.src('./src/css/**/*.scss')
            .pipe(sass_config)
            .pipe(gulp.dest('./dist/css'));
})
// 模块化打包js
gulp.task('compile:js', () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('./dist/js'))
})


//默认任务
gulp.task('default',['webserver','copy:html','compile:scss','compile:js'],()=>{
    console.log('Everything is done ...')
})
