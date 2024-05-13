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
        i = !1;
      o.click(function () {
        1 == i
          ? (s.hide(),
            o.removeClass("is-open"),
            o.addClass("is-closed"),
            (i = !1))
          : (s.show(),
            o.removeClass("is-closed"),
            o.addClass("is-open"),
            (i = !0));
      }),
        e('[data-toggle="offcanvas"]').click(function () {
          e("#wrapper").toggleClass("toggled");
        });
    }),
    $(".slicknav_nav > li:last-child").after(
      '<li><a href="become-our-client.html" class="btn header-btn">Become Our Client <i class="ti-angle-right"></i></a></li>'
    );
  let s = document.querySelectorAll("section"),
    i = document.querySelectorAll("#navigation li");
  function l(e) {
    i.forEach((e) => e.classList.remove("active")), e.classList.add("active");
  }
  i.forEach((e) =>
    e.addEventListener("click", function () {
      l(this);
    })
  ),
    (window.onscroll = () => {
      s.forEach((e) => {
        let o = window.scrollY,
          s = e.offsetTop,
          i = e.offsetHeight,
          t = e.getAttribute("id");
        if (o >= s && o < s + i) {
          l(document.querySelector(`[href='#${t}']`).parentElement);
        }
      });
    });
  var t = e(".h1-testimonial-active");
  t.length &&
    t.slick({
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
  var a = e(".completed-active");
  a.length &&
    a.owlCarousel({
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
  var n = e(".single_gallery_part, .img-pop-up");
  n.length && n.magnificPopup({ type: "image", gallery: { enabled: !0 } }),
    $(".appr-h5").click(function () {
      $(".appr-desc.slide-down").toggleClass("slide-up slide-down"),
        $("i.ti-minus").toggleClass("ti-plus ti-minus"),
        $(this).find("i").toggleClass("ti-plus ti-minus"),
        $(this)
          .closest(".appr-box")
          .children(".appr-desc")
          .toggleClass("slide-up slide-down");
    });
  var r = $(".fixme").offset().top;
  $(window).scroll(function () {
    $(window).scrollTop() >= r
      ? $(".fixme").css({ position: "sticky", top: "100px" })
      : $(".fixme").css({ position: "static" });
  });
})(jQuery);
