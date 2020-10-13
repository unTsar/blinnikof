$(document).ready(function() {
	$('#schedulesCsl').owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false
	});
	$('.buttonPrev').click(function() {
		$('#schedulesCsl').trigger("prev.owl.carousel")
	})
	$('.buttonNext').click(function() {
		$('#schedulesCsl').trigger("next.owl.carousel")
	})

	$('.buttonChoose').click(function() {
		if ($(this).children('input').is(':checked')) {
			$(this).children('input').prop('checked', false);
			$(this).parents('.class').removeClass('checked')
		}else{
			$(this).children('input').prop('checked', true);
			$(this).parents('.class').addClass('checked')
		}
	})
})