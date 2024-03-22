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

  $("#datepicker").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    dateFormat: "dd/mm/yy",
    changeMonth: true,
    changeYear: true,
    showAnim: "clip",
  });

  $(".bg-red").on("click", () => {
    $("#datepicker").datepicker("show");
  });

  $("#datepicker").val("22/03/2024");
  $(".show_date").text(new Date("03/22/2024").toDateString());

  $("#datepicker").change(function () {
    let d = this.value.split("/");
    let dat = new Date(d[2] + "/" + d[1] + "/" + d[0]);

    $(".show_date").text(dat.toDateString());
  });
});
