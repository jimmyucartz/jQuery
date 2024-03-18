$(document).ready(() => {
  $("p").mouseenter(function () {
    $(this).css("color", "red");
  });
  $("p").mouseleave(function () {
    $(this).css("color", "initial");
  });
});
