$(() => {
  //
  $(".hide_btn").click(() => {
    $("#text1").hide();
  });

  $(".show_btn").click(() => {
    $("#text1").show();
  });
  //
  $(".fade_out_hide_btn").click(() => {
    $("#text1").fadeOut();
  });

  $(".fade_in_show_btn").click(() => {
    $("#text1").fadeIn();
  });
  //
  $(".slide_up_btn").click(() => {
    $("#text1").slideUp("slow");
  });
  $(".slide_up_down_btn").click(() => {
    $("#text1").slideToggle("slow");
  });

  $(".slide_down_btn").click(() => {
    $("#text1").slideDown("slow");
  });
  //
  $(".animate_btn").click(() => {
    $(".container").animate(
      {
        position: "relative",
        left: "250px",
        opacity: "0.5",
        height: "150px",
        width: "150px",
      },
      "fast",
      function () {
        $(this).css({ color: "red" });
      }
    );
  });
});
