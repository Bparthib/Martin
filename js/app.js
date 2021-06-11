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
  $("#co-founder").slick({
    arrows: false,
    dots: true,
    centerMode: true,
    slideToShow: 1
  });
});
