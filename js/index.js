// 侧边栏展示效果
let flag = 0
$('.lg')
  .children('a')
  .on('click', function () {
    if (flag === 0) {
      $(this).siblings().show(200)
      $(this).find('span').html('-')
      flag = 1
    } else {
      $(this).siblings().hide(200)
      $(this).find('span').html('+')
      flag = 0
    }
  })
// 搜索1的相关
// 刚进入时的网址
let href = 'https://www.sogou.com/web?query='
// 按钮按下的动作
document.getElementById('btn1').onclick = function () {
  const values = document.getElementById('ipt1').value
  window.location = href + values
}
// 回车点击按钮
document.getElementById('body').onkeydown = function () {
  if (event.keyCode === 13) {
    document.getElementById('btn1').click()
  }
}
// 搜狗按钮
document.getElementById('sougou').onclick = function () {
  href = 'https://www.sogou.com/web?query='
  document.getElementById('btn1').innerHTML = '搜狗搜索'
}
// 百度按钮
document.getElementById('baidu').onclick = function () {
  href = 'https://www.baidu.com/s?wd='
  document.getElementById('btn1').innerHTML = '百度搜索'
}
// 必应按钮
document.getElementById('biying').onclick = function () {
  href = 'https://cn.bing.com/search?q='
  document.getElementById('btn1').innerHTML = '必应搜索'
}
// 360按钮
document.getElementById('s360').onclick = function () {
  href = 'https://www.so.com/s?q='
  document.getElementById('btn1').innerHTML = '360搜索'
}
// google按钮
document.getElementById('google').onclick = function () {
  alert('国内一般登不上，自己想办法哦~~' + '别问，问就是没方法')
  href = 'https://www.google.com/search?q='
  document.getElementById('btn1').innerHTML = 'Google搜索'
}
// 哔哩哔哩按钮
document.getElementById('blbl').onclick = function () {
  href = 'https://search.bilibili.com/all?keyword='
  document.getElementById('btn1').innerHTML = '哔哩哔哩搜索'
}
