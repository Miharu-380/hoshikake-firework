// header
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

//slide
$(function(){
  $('.slide-l').addClass('move');
  $(window).scroll(function(){
    $(".slide-l").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).removeClass('move');
      } else {
        $(this).addClass('move');
      }
    });
  });
});

$(function(){
  $('.slide-r').addClass('move');
  $(window).scroll(function(){
    $(".slide-r").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).removeClass('move');
      } else {
        $(this).addClass('move');
      }
    });
  });
});