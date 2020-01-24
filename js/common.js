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
});