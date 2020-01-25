$(document).ready(function () {
  $().fancybox({
    selector: '.imglist a:visible'
  });

  var clock = $('.section-sales__inner-timer').FlipClock({
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

  
});