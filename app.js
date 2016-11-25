$(document).ready(function() {
    $(".exit").click(function() {
        $(".alertBar").addClass("hidden");
        $(".alert").addClass("hidden");
    });
    $(".alert").click(function() {
        $(".alertBar").addClass("hidden");
        $(".alert").addClass("hidden");
    });
    $(".sendForm").click(function() {
        formSubmit();
    });
    //Form validation
     $("#send").click(function(){
        var alert = $("#form-alert");
        var search = $("#name");
        var message = $("#message"); 
        if ( search.val() === '' || message.val() === '' ){
            alert.css("display", "block");
            alert.css("color", "white");
                alert.text("Username and message are required!");
        }
        else {
            alert.css("display", "block");
            alert.css("background-color", "#00b300");
            alert.css("color", "white");
                alert.text("Message Sent!").delay(500).fadeOut("slow");
        }
        return false;
    });
});