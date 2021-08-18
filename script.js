$(function () {
  var head = $('#header-scroll');
  head.hide();
  //スクロールが500に達したら表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          head.fadeIn();
      } else {
          head.fadeOut();
      }
  });
})