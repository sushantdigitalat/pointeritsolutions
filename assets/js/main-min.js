!(function (s) {
  s(window).on("load", function () {
    s("#preloader-active").delay(450).fadeOut("slow"),
      s("body").delay(450).css({ overflow: "visible" });
  });
  var e = s("ul#navigation");
  e.length &&
    e.slicknav({
      prependTo: ".mobile-menu",
      closedSymbol: "+",
      openedSymbol: "-",
    }),
    s(document).ready(function () {
      var e = s(".hamburger"),
        o = s(".overlay"),
        l = !1;
      e.click(function () {
        1 == l
          ? (o.hide(),
            e.removeClass("is-open"),
            e.addClass("is-closed"),
            (l = !1))
          : (o.show(),
            e.removeClass("is-closed"),
            e.addClass("is-open"),
            (l = !0));
      }),
        s('[data-toggle="offcanvas"]').click(function () {
          s("#wrapper").toggleClass("toggled");
        });
    }),
    $(".slicknav_nav > li:last-child").after(
      '<li><a href="become-our-client.html" class="btn header-btn">Become Our Client <i class="ti-angle-right"></i></a></li>'
    );
  var o = s(".h1-testimonial-active");
  o.length &&
    o.slick({
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
  var l = s(".completed-active");
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
    s(window).on("scroll", function () {
      s(window).scrollTop() < 500
        ? s(".header-sticky").removeClass("sticky-bar")
        : s(".header-sticky").addClass("sticky-bar");
    }),
    s(window).on("scroll", function () {
      s(window).scrollTop() < 500
        ? s("#scrollUp").removeClass("show-top")
        : s("#scrollUp").addClass("show-top");
    }),
    s("[data-background]").each(function () {
      s(this).css(
        "background-image",
        "url(" + s(this).attr("data-background") + ")"
      );
    });
  var i = s(".single_gallery_part, .img-pop-up");
  i.length && i.magnificPopup({ type: "image", gallery: { enabled: !0 } }),
    $(".appr-h5").click(function () {
      $(".appr-desc.slide-down").toggleClass("slide-up slide-down"),
        $("i.ti-minus").toggleClass("ti-plus ti-minus"),
        $(this).find("i").toggleClass("ti-plus ti-minus"),
        $(this)
          .closest(".appr-box")
          .children(".appr-desc")
          .toggleClass("slide-up slide-down");
    });
})(jQuery);
