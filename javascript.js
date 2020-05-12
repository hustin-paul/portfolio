$(window).scroll(function () {
  $(".name").css("opacity", 1 - $(window).scrollTop() / 450);
  $(".name_sub1").css("opacity", 1 - $(window).scrollTop() / 450);
  $(".name_sub2").css("opacity", 1 - $(window).scrollTop() / 450);
});
