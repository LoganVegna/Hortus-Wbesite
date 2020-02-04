$(document).ready(function() {
    $("#all").click(function(){
        $("#entries-1").removeClass("hidden");
        $("#entries-2").removeClass("hidden");
    });

    $("#succ").click(function(){
        $("#entries-1").removeClass("hidden");
        $("#entries-2").addClass("hidden");
    });

    $("#trop").click(function(){
        $("#entries-2").removeClass("hidden");
        $("#entries-1").addClass("hidden");
    });
});
