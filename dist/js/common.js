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
			$('body').addClass('fixed');
			$('header .button-desc').addClass('hidden');
		}else{
			$('#menu').addClass('hidden');
			$('#menu-pagedim').removeClass('turnedOpacity')
			$('#menu-pagedim').one('transitionend', function(e) {
		      $('#menu-pagedim').removeClass('turned');
		    });
			$('body').removeClass('fixed');
			$('header .button-desc').removeClass('hidden');
		}
	});
	$("#menu-pagedim").click(function() {
		if ($(this).hasClass('turned')) {
			$("#my-button").removeClass('is-active');
			$('#menu').addClass('hidden');
			$('body').removeClass('fixed');
			$('header .button-desc').removeClass('hidden');
			$(this).removeClass('turnedOpacity')
			$(this).one('transitionend', function(e) {
		      $(this).removeClass('turned');
		    });
		}
	})
});