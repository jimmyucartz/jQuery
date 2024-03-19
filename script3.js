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
  $(".append_text").click(() => {
    $(".para_dse").append("<p><i>hello</i></p>");
  });

  $(".prepend_text").click(() => {
    $(".para_dse").prepend("<p>hello</p>");
  });

  $(".append_list").click(() => {
    $(".my_list").append("<li><i>hello</i></li>");
  });

  $(".prepend_list").click(() => {
    $(".my_list").prepend("<li>hello</li>");
  });

  $(".append_multiple").click(() => {
    let li = $("<li></li>").text("Hello");
    let li2 = $("<li></li>").text("Hi");

    $(".my_list").append(li, li2);
  });

  $(".prepend_multiple").click(() => {
    let li = $("<li></li>").text("Hello");
    let li2 = $("<li></li>").text("Good");
    $(".my_list").prepend(li, li2);
  });

  //

  $(".after_text").click(() => {
    $(".para_dse1").after("<p><i>hello</i></p>");
  });

  $(".before_text").click(() => {
    $(".para_dse1").before("<p>hello</p>");
  });

  $(".after_list").click(() => {
    $(".my_list1").after("<li><i>List</i></li>");
  });

  $(".before_list").click(() => {
    $(".my_list1").before("<li>List </li>");
  });

  $(".after_multiple").click(() => {
    let li = $("<i></i> <br/>").text("Hello");
    let li2 = $("<i></i>").text("Good");

    $(".my_list1").after(li, li2);
  });

  $(".before_multiple").click(() => {
    let li = $("<i></i> <br/>").text("Hello");
    let li2 = $("<i></i>").text("Good");
    $(".my_list1").before(li, li2);
  });

  //

  $(".rm_first-div").click(() => {
    $("div").remove();
  });

  $(".rm_div_children").click(() => {
    $(".another_container").empty();
  });

  $(".filtered_rm").click(() => {
    $("div").remove(".another_container");
  });

  //
});
