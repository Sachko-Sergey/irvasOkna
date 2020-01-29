$(document).ready(function () {
  $().fancybox({
    selector: '.imglist a:visible'
  });

  let clock = $('.section-sales__inner-timer').FlipClock({
    clockFace: 'DailyCounter',
  });
  clock.setTime(220880);
  clock.setCountdown(true);
  clock.start();

  $(".tab_item-inner").not(":first").hide();
  $(".wrapper .tab").click(function () {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item-inner").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");


  let hWrap = document.querySelector('.h__wrap');
  let info = document.querySelector('.header-inner__wrap-info');
  let bodyLock = document.querySelector('body');

  hWrap.onclick = function () {
    info.classList.add('active');
    bodyLock.classList.add('lock');
  }
  info.onclick = function () {
    info.classList.remove('active');
    bodyLock.classList.remove('lock');
  }


$('.works-slider').slick({
  dots: true,
  arrows: false,
  swipe: true
});

});