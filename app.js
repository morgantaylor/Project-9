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

    function formSubmit() {
        var formName = document.getElementById("name");
        var formMessage = document.getElementById("message");

        if (formName.value == "") {
            alert( "Please enter your name." );
            formName.focus();
            return false;
        } else if (formMessage.value == "") {
            alert( "Please enter your message." );
            formMessage.focus();
            return false;
        } else {
            alert("Your message has been submitted.");
            return true;
        }
    };
});