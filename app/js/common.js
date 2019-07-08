$(document).ready(function() {
	$("#my-button").click(function() {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
		}else{
			$(this).addClass('is-active');
		}
		if ($('#menu').hasClass('hidden')) {
			$('#menu').removeClass('hidden')
			$('#menu-pagedim').addClass('turned')
			$('body').addClass('fixed')
		}else{
			$('#menu').addClass('hidden');
			$('#menu-pagedim').removeClass('turned')
			$('body').removeClass('fixed')
		}
	});
	$("#menu-pagedim").click(function() {
		if ($(this).hasClass('turned')) {
			$("#my-button").removeClass('is-active');
			$('#menu').addClass('hidden');
			$('body').removeClass('fixed')
			$(this).removeClass('turned')
		}
	})
});