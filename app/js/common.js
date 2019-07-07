$(document).ready(function() {
	$("#my-menu").mmenu({
		"extensions": [
			"fx-menu-slide",
			"pagedim-black"
		],
		navbar: {
			title: ""
		},
		offCanvas: {
            pageSelector: "#my-wrapper"
        },
	});
	var API = $("#my-menu").data( "mmenu" );

	$("#my-button").click(function() {
		API.open();
	});
	$("#my-button").click(function() {
		API.close();
	});

	API.bind( "open:finish", function() {
		setTimeout(function() {
			$("#my-button").addClass( "is-active" );
		}, 10);
	});
	API.bind( "close:finish", function() {
		setTimeout(function() {
			$("#my-button").removeClass( "is-active" );
		}, 10);
	});

	$(".mm-page").removeClass("mm-slideout");
});