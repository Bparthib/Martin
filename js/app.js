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
  $("#co-founder .container").slick({
    autoplay: 2000,
    arrows: false,
    dots: true,
    dotsClass: "slider_dots",
  });

  //BackToTop Button
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 800) {
      $("#backToTop").fadeIn("slow");
    } else {
      $("#backToTop").fadeOut("slow");
    }
  });

  $("#backToTop").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  //Scroll Smooth
  $("a").on("click", function () {
    e.preventDefault();

    if (this.hash !== "") {
      var hash = this.hash;

      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top - 60,
        },
        2000
      );
    }
  });

  //preloader
  $(window).on("load", function () {
    $("#preloader").fadeOut(1000);
  });
});
