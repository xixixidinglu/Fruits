
const home_templete = require('./js/views/home.html')

// 负责将home视图模板渲染在对应的地方
const render = ()=>{
    // 刚才说了，一切皆模块，说明html也是模块，看一下它暴露的是什么 发现是字符串
    // console.log(homeTemplate)
    document.querySelector('#page').innerHTML = home_templete

}
module.exports = {
    render
}