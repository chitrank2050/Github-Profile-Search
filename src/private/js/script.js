$(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('.div_header').addClass("sticky");
    } else {
      $('.div_header').removeClass("sticky");
    }
  });
});
