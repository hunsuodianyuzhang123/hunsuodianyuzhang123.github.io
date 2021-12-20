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
// 开始效果
$('#tabs').on('click', 'li', function () {
  $('#section section').eq($(this).index()).show().siblings().hide()
})
// 点击
$('#tabs li:first-child').css({ fontWeight: '700', backgroundColor: '#e0e0e0' })
$('#tabs li').on('click', function () {
  $(this)
    .css({
      fontWeight: '700',
      backgroundColor: '#e0e0e0',
    })
    .siblings()
    .css({
      fontWeight: '400',
      backgroundColor: '#eee',
    })
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
