$(() => {
  //

  $(".addclass").click(() => {
    $("h4").addClass("headingAlt");
  });
  $(".rmclass").click(() => {
    $("h4").removeClass("headingAlt");
  });

  $(".tgclass").click(() => {
    $("h4").toggleClass("headingAlt");
  });
  $(".addcss").click(() => {
    $("h4").css({ color: "red" });
  });
});
