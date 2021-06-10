$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $("#navbar").addClass("stickyNavbar");
    } else {
      $("#navbar").removeClass("stickyNavbar");
    }
  });
});
