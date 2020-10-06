(function($) {
	"use strict"; // Start of use strict
	
})(jQuery); // End of use strict


$(window).on('load', function () {
	
	$(".loading").delay(4000).animate({
        "top": "-100%" 
    }, 700, function () {
        $(this).remove();
    })
	
});