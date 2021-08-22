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

//slide left
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
//slide right
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
//slide up
$(function(){
  $('.slide-up').addClass('move');
  $(window).scroll(function(){
    $(".slide-up").each(function(){
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

// ハンバーガーメニュー
$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('nav').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('nav').addClass('open');
    $('.overlay').addClass('open');
  }
});
$('.overlay').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('nav').removeClass('open');
  }
});