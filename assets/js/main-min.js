!(function (e) {
  e(window).on("load", function () {
    e("#preloader-active").delay(450).fadeOut("slow"),
      e("body").delay(450).css({ overflow: "visible" });
  });
  var o = e("ul#navigation");
  o.length &&
    o.slicknav({
      prependTo: ".mobile-menu",
      closedSymbol: "+",
      openedSymbol: "-",
    }),
    e(document).ready(function () {
      var o = e(".hamburger"),
        s = e(".overlay"),
        l = !1;
      o.click(function () {
        1 == l
          ? (s.hide(),
            o.removeClass("is-open"),
            o.addClass("is-closed"),
            (l = !1))
          : (s.show(),
            o.removeClass("is-closed"),
            o.addClass("is-open"),
            (l = !0));
      }),
        e('[data-toggle="offcanvas"]').click(function () {
          e("#wrapper").toggleClass("toggled");
        });
    }),
    $(".slicknav_nav > li:last-child").after(
      '<li><a href="become-our-client.html" class="btn header-btn">Become Our Client <i class="ti-angle-right"></i></a></li>'
    );
  var s = e(".h1-testimonial-active");
  s.length &&
    s.slick({
      dots: !1,
      infinite: !0,
      speed: 1e3,
      autoplay: !0,
      loop: !0,
      arrows: !1,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1,
            arrow: !1,
          },
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1, slidesToScroll: 1, arrows: !1 },
        },
        {
          breakpoint: 480,
          settings: { slidesToShow: 1, slidesToScroll: 1, arrows: !1 },
        },
      ],
    });
  var l = e(".completed-active");
  l.length &&
    l.owlCarousel({
      slidesToShow: 2,
      slidesToScroll: 1,
      loop: !0,
      autoplay: !0,
      speed: 3e3,
      smartSpeed: 2e3,
      nav: !1,
      dots: !1,
      margin: 15,
      autoplayHoverPause: !0,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 2 },
        1200: { items: 3 },
      },
    }),
    e(window).on("scroll", function () {
      e(window).scrollTop() < 500
        ? e(".header-sticky").removeClass("sticky-bar")
        : e(".header-sticky").addClass("sticky-bar");
    }),
    e(window).on("scroll", function () {
      e(window).scrollTop() < 500
        ? e("#scrollUp").removeClass("show-top")
        : e("#scrollUp").addClass("show-top");
    }),
    e("[data-background]").each(function () {
      e(this).css(
        "background-image",
        "url(" + e(this).attr("data-background") + ")"
      );
    });
  var i = e(".single_gallery_part, .img-pop-up");
  i.length && i.magnificPopup({ type: "image", gallery: { enabled: !0 } });
})(jQuery);
