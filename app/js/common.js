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
			setTimeout(function () {
				$('#menu-pagedim').addClass('turnedOpacity');
		    }, 20);
			$('body').addClass('fixed')
		}else{
			$('#menu').addClass('hidden');
			$('#menu-pagedim').removeClass('turnedOpacity')
			$('#menu-pagedim').one('transitionend', function(e) {
		      $('#menu-pagedim').removeClass('turned');
		    });
			$('body').removeClass('fixed')
		}
	});
	$("#menu-pagedim").click(function() {
		if ($(this).hasClass('turned')) {
			$("#my-button").removeClass('is-active');
			$('#menu').addClass('hidden');
			$('body').removeClass('fixed')
			$(this).removeClass('turnedOpacity')
			$(this).one('transitionend', function(e) {
		      $(this).removeClass('turned');
		    });
		}
	})

	$(function($) {
		$.mask.definitions['9'] = '';
		$.mask.definitions['n'] = '[0-9]';
		$('input[type="tel"]').mask("+7 (nnn) nnn-nn-nn");
	});
});