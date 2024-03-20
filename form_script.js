let alert = $("<div></div>")
  .html(
    `<span class="material-symbols-outlined">check_circle</span>&nbsp;<span>Submitted Successfully</span>`
  )
  .attr("class", "alert");

$(() => {
  $("form").submit((e) => {
    e.preventDefault();

    $("#name_error").hide("slow", function () {
      $(this).remove();
    });

    $("#email_error").hide("slow", function () {
      $(this).remove();
    });

    $("#pass_error").hide("slow", function () {
      $(this).remove();
    });

    name_inp = e.target.name;
    email_inp = e.target.email;
    pass_inp = e.target.password;

    if (name_inp.value.length == 0) {
      name_error = $("<p></p>")
        .text("Name cannot be empty")
        .attr("id", "name_error");
      $(name_inp).after(name_error);
      return;
    } else {
      let regex = /^[a-zA-Z ]+$/;
      let result = regex.test(name_inp.value);
      if (!result) {
        name_error = $("<p></p>")
          .text("Name Should Contain only Alphabets")
          .attr("id", "name_error");
        $(name_inp).after(name_error);
        return;
      }
    }

    //
    if (email_inp.value.length == 0) {
      email_error = $("<p></p>")
        .text("Email cannot be empty")
        .attr("id", "email_error");
      $(email_inp).after(email_error);
      return;
    } else {
      let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
      let result = regex.test(email_inp.value);
      if (!result) {
        email_error = $("<p></p>")
          .text("Invalid Email Address")
          .attr("id", "email_error");
        $(email_inp).after(email_error);
        return;
      }
    }

    //
    if (pass_inp.value.length == 0) {
      pass_error = $("<p></p>")
        .text("Password cannot be empty")
        .attr("id", "pass_error");
      $(pass_inp).after(pass_error);
      return;
    } else {
      let regex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!_@$%^&*-]).{8,}$/;
      let result = regex.test(pass_inp.value);
      if (!result) {
        pass_error = $("<p></p>")
          .html(
            "Invalid Password <br/> <ul> <li> At least a symbol, upper and lower case letters and a number </li> <li> Minimum length should be 8 </li></ul>"
          )
          .attr("id", "pass_error");
        $(pass_inp).after(pass_error);
        return;
      }
    }

    $("body").append(alert);

    $(".alert")
      .hide(() => {
        $("form :input").attr("disabled", true);
      })
      .css("display", "flex")
      .fadeIn(1000, () => {
        $("form")[0].reset();
      })
      .animate({ right: "5dvw" }, 1000)
      .fadeOut(2000, function () {
        $(this).removeAttr("style").remove();
        $("form :input").attr("disabled", false);
      });
  });
});
