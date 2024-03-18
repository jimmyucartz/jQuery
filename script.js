// $(document).ready(function () {
$(() => {
  $("section").mouseenter(function () {
    $(this).css("color", "red");
  });
  $("section").mouseleave(function () {
    $(this).css("color", "initial");
  });
  $("#para1").click(function () {
    $(this).hide();
  });
  $(".paras").click(function () {
    $(this).css("backgroundColor", "wheat");
    $(this).css("width", "100px");
  });
  $("button").click(() => {
    $("p").hide();
  });
});
