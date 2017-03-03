$(document).ready(function() {
	console.log("Welcome to the CCNY-ESC website!");

	// Team page manipulation
	$(".team-card-square").find(".team-bio").hide()

	$(".team-card-square").click(function(e) { 
	   // bio not yet entered
	   if($(this).find(".team-bio").html().length < 25)
	   	return;

     // Hide all the other cards
     $(document).find(".team-pic").show();
     $(document).find(".team-title").show();
     $(document).find(".team-byline").show();
     $(document).find(".team-bio").hide();

     // Show this card
     $(this).find(".team-pic").hide();
     $(this).find(".team-title").hide();
     $(this).find(".team-byline").hide();
     $(this).find(".team-bio").show();
    });

    $(".team-socialmedia").click(function(e) {
    	console.debug(e);
    	e.stopPropagation();
    });

    // Make google calendar full paged
    $("#google-calendar").width($(window).width());
    $("#google-calendar").height($(window).height() - 64);
});