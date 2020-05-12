$(window).scroll(function () {
  $(".myName").css("opacity", 1 - $(window).scrollTop() / 450);
  $(".title").css("opacity", 1 - $(window).scrollTop() / 450);
  $(".title_sub").css("opacity", 1 - $(window).scrollTop() / 450);
});
