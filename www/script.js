$(document).ready(function () {
  $("#loginForm").on("submit", function (event) {
    event.preventDefault();

    // Serialize and store form data
    let formData = $(this).serialize();

    // Make the AJAX post request
    $.post("/login", formData, function (response) {
      console.log("formdata: ", formData);

      console.log("Response from server: ", response);
      if (response.valid === true) {
        console.log("Login successful");
        // If login was successful, redirect to the account page
        window.location.href = "/account";
      } else {
        console.log("Login failed");
        // If login was not successful, display error message
        $("#errormsg").removeClass("hidemessage");
      }
    });
  });
});
