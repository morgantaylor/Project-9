$(document).ready(function() {
	$(".exit").click(function() {
        $(".alertBar").addClass("hidden");
        $(".alert").addClass("hidden");
    });
    $(".alert").click(function() {
        $(".alertBar").addClass("hidden");
        $(".alert").addClass("hidden");
    });
    var formName = document.getElementById("name");
    var formMessage = document.getElementById("message");
    $(".sendForm").click(function() {
    	alert("Your message has been sent.");
    });
});