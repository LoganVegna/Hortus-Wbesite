$(document).ready(function () {
    $("#contactform").on("submit", function () {
        var formValid = true;
        if ($("#name").prop("validity").valid) {
            $("#nameError").addClass("hidden");
        } else {
            formValid = false;
            $("#nameError").removeClass("hidden");
        }
        if ($("#email").prop("validity").valid) {
            $("#emailError").addClass("hidden");
        } else {
            formValid = false;
            $("#emailError").removeClass("hidden");
        }
        if ($("#subject").prop("validity").valid) {
            $("#subjError").addClass("hidden");
        } else {
            formValid = false;
            $("#subjError").removeClass("hidden");
        }
        if ($("#body").prop("validity").valid) {
            $("#bodyError").addClass("hidden");
        } else {
            formValid = false;
            $("#bodyError").removeClass("hidden");
        }
        if (!formValid) $("#contactErrorMessage").removeClass("hidden"); else  $("#contactErrorMessage").addClass("hidden");

        return formValid;
    });
});