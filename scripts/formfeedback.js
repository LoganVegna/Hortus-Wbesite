// When the document has loaded
$(document).ready(function() {
  $("#contactform").on("submit", function() {
      var formValid = true;

       //Checking the name
      var nameIsValid = $("#name").prop("validity").valid;

      if(nameIsValid) {
        $("#nameError").addClass("hidden");
      } else {
        formValid = false;
        $("#nameError").removeClass("hidden");
      }

      //checking the email
      var emailIsValid =  $("#email").prop("validity").valid;

      if(emailIsValid) {
        $("#emailError").addClass("hidden");
      } else {
        formValid = false;
        $("#emailError").removeClass("hidden");
      }

      //checking the Message Subject
      var reasonValid = $("#subject").prop("validity").valid;

      if (reasonValid) {
        $("#subjectError").addClass("hidden");
      } else {
        formValid = false;
        $("#subjectError").removeClass("hidden");
      }


      if (!formValid) {
        $("#contactErrorMessage").removeClass("hidden");
      } else {
        formValid = false;
        $("#contactErrorMessage").addClass("hidden");
      }

      return formValid;
  });

});
