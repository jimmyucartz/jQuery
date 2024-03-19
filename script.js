// $(document).ready(function () {
const fade = () => {
  $("div.click_text").fadeIn("slow").show().fadeOut("slow");
};

$(() => {
  $("section").mouseenter(function () {
    $(this).css("color", "red");
  });
  $("section").mouseleave(function () {
    $(this).css("color", "initial");
  });

  $("#part").hover(function () {
    $(this).css({
      border: "1px solid grey",
      width: "100px",
      textAlign: "end",
    });
  });
  $("#p").click(function () {
    $(this).hide("slow");
  });
  $(".paras").click(function () {
    $(this).css("backgroundColor", "wheat");
    $(this).css("width", "100px");
  });
  $(".para_hide").click(() => {
    $(".paras").hide("slow");
  });

  $(".key_del").keypress((e) => {
    $("p").hide("slow");
  });

  $("#input_text").change((e) => {
    console.log("on-change=>", e.target.value);
  });

  $("#input_text").keydown(function (e) {
    console.log("keydown =>", e.target.value);
  });

  $("#input_text").keypress(function (e) {
    console.log("keypress =>", e.target.value);
  });

  $(".myForm").submit((e) => {
    console.log(e.target);
    e.preventDefault();
  });

  $("#input_text").focus(function (e) {
    console.log("FOCUS =>");
  });
  $("#input_text").blur(function (e) {
    console.log("BLUR =>");
  });

  $(".span-hide").click(function () {
    $("span").toggle("slow");
  });

  $(".span-hide").dblclick(() => {
    console.log("Double Click");
  }); //

  //   on off
  $(".click_btn").on("click", () => {
    $("body")
      .on("click", ".the_btn", fade)
      .find(".the_btn")
      .text("You Can Click Here");
  });

  $(".rem_click").on("click", () => {
    $("body")
      .off("click", ".the_btn", fade)
      .find(".the_btn")
      .text("Does Not allow Click");
  });
});
