// 两端转换
if (
  navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
) {
  window.location.href = './m/index.html' // 手机
} else {
  // window.location.href = '../index.html' // 电脑
}

// 时间
var times = function () {
  $('#time .time p').html(dayjs().format('YYYY-MM-DD HH:mm:ss dddd'))
}
times()
setInterval(function () {
  times()
}, 1000)

$(window).scroll(function () {
  console.log($(window).scrollTop())
})

// back
setInterval(function () {
  if ($(window).scrollTop() != 0) {
    $('#back').show()
  } else {
    $('#back').hide()
  }
}, 1)
// 点击back
$('#back').on('click', function () {
  $(window).scrollTop(0)
})
// 悬停back
$('#back').hover(
  function () {
    $(this).html('返回<br>顶部')
  },
  function () {
    $(this).html('↑')
  }
)

// tabs
$('#tabs').on('click', 'li', function () {
  window.scroll(
    $('#section section').eq($(this).index()).offset().left,
    $('#section section').eq($(this).index()).offset().top
  )
})
