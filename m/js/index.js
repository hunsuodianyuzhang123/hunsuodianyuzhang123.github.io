// 两端转换
if (
  navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
) {
  // window.location.href = "./music.html" // 手机
} else {
  window.location.href = '../index.html' // 电脑
}
// 点击标题展示笔记
$('#title').on('click', function () {
  $('#hide').show()
})
// 点击小标题隐藏
$('#hide-in').on('click', function () {
  $('#hide').hide()
})
// 其他
console.log('以后有可能会完善')
console.log('随便写的，有什么问题的话可别找我哦~~')

//
// if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
//   window.location.href = "./music.html"; // 手机
// } else {
//   window.location.href = "./index.html"; // 电脑
// }
