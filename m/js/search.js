// 进入式按钮自动聚焦
document.getElementById('ipt').focus()
// 聚焦的样式
document.getElementById('ipt').onfocus = function () {
  document.getElementById('ipt').style.borderWidth = '2px'
  document.getElementById('ipt').style.borderColor = '#1a73e8'
}
// 离开聚焦的样式
document.getElementById('ipt').onblur = function () {
  document.getElementById('ipt').style.borderWidth = '1px'
  document.getElementById('ipt').style.borderColor = '#808080'
}
// 刚进入时的网址
let href = 'https://www.sogou.com/web?query='
// 按钮按下的动作
document.getElementById('btn').onclick = function () {
  const values = document.getElementById('ipt').value
  window.location = href + values
}
// 回车点击按钮
document.getElementById('body').onkeydown = function () {
  if (event.keyCode === 13) {
    document.getElementById('btn').click()
  }
}
// 搜狗按钮
document.getElementById('sougou').onclick = function () {
  href = 'https://www.sogou.com/web?query='
  document.getElementById('btn').innerHTML = '搜狗搜索'
}
// 百度按钮
document.getElementById('baidu').onclick = function () {
  href = 'https://www.baidu.com/s?wd='
  document.getElementById('btn').innerHTML = '百度搜索'
}
// 必应按钮
document.getElementById('biying').onclick = function () {
  href = 'https://cn.bing.com/search?q='
  document.getElementById('btn').innerHTML = '必应搜索'
}
// 360按钮
document.getElementById('s360').onclick = function () {
  href = 'https://www.so.com/s?q='
  document.getElementById('btn').innerHTML = '360搜索'
}
// google按钮
document.getElementById('google').onclick = function () {
  alert('国内一般登不上，自己想办法哦~~' + '别问，问就是没方法')
  href = 'https://www.google.com/search?q='
  document.getElementById('btn').innerHTML = 'Google搜索'
}
// 哔哩哔哩按钮
document.getElementById('blbl').onclick = function () {
  href = 'https://search.bilibili.com/all?keyword='
  document.getElementById('btn').innerHTML = '哔哩哔哩搜索'
}
