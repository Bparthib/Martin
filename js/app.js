$(function () {
  //Navbar animation
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $("#navbar").addClass("stickyNavbar");
    } else {
      $("#navbar").removeClass("stickyNavbar");
    }
  });

  //Co-founder section animation
  $(".partner").slick({
    autoplay: 2000,
    arrows: false,
    dots: true,
    dotsClass: "slider_dots"
  });
});
