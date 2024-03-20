$(() => {
  let button = $("<button >Click Me</button>")
    .text("Click Me")
    .attr("id", "click")
    .attr("type", "button");

  $(document).find("#container").append(button);
  $("#click").click(() => {
    $("#container").addClass("bg-green");
  });
});
