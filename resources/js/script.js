'use strict';

jQuery(document).ready(function($) {

	var a = $("h2");

	$(a).on('click', function(e) {
		event.preventDefault(e);
		var b = $(this).html();
		console.log(b);	
	});
});