$(() => {
  $(".nav_dots").css({
    bottom: $(window).height() / 6,
  });

  $("#slick-carousel")
    .not(".slick-initialized")
    .slick({
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      appendDots: $(".nav_dots"),
      prevArrow:
        "<div class='slick-prev'><span class='material-symbols-outlined'>keyboard_arrow_left</span></div>",
      nextArrow:
        "<div class='slick-next'><span class='material-symbols-outlined'>keyboard_arrow_right</span></div>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
          },
        },

        {
          breakpoint: 600,
          settings: "unslick",
        },
      ],
    });
});
