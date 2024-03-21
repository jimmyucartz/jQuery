$(() => {
  $("div button").click(() => {
    $("#container")
      .removeClass("top_left")
      .animate({ bottom: "0px", right: "0px" }, 3000);
  });
});
