$(() => {
  $("#sect1 .read_txt").click(() => {
    alert("Text : " + $("#sect1 .sub_div").text());
  });
  $("#sect1 .read_html").click(() => {
    alert("HTML : " + $("#sect1 .para-div").html());
  });
  $("#sect1 .read_input_value").click(() => {
    alert("Input Value : " + $("#sect1 .input_time").val());
  });
  $("#sect1 .read_input_attr").click(() => {
    alert("Input Attr (Type) : " + $("#sect1 .input_time").attr("type"));
  });
  //
  //
  $("#sect2 .read_txt").click(() => {
    $("#sect2  .sub_div").text("Bye");
  });
  $("#sect2 .read_html").click(() => {
    $("#sect2 .para-div").html("<i>Good Night</i>");
  });
  $("#sect2 .read_input_value").click(() => {
    $("#sect2 .input_time").val("Time is 11:00 pm");
  });
  $("#sect2 .read_input_attr").click(() => {
    $("#sect2 .input_time").attr("type", "radio");
  });
  //
  //
  $(".text2_change_btn").click(() => {
    $(".text2").text((a, b) => {
      return "*Old Data:" + b + "  * New Data: " + `User`;
    });
  });
  //
  $(".html2_change_btn").click(() => {
    $(".html2").html((a, b) => {
      return "Old Data:" + b + "<br/>" + "   New Data: " + `<b> You</b>`;
    });
  });
  // add/remove
});
