$(document).ready(function() {
	$('.listCards-item').click(function() {
		if ($(this).hasClass('active')) {
		}else{
			$('.listCards-item').removeClass('active')
			$(this).addClass('active')
		}
	})
	// Tooltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
	$('input').focus(function() {
		$('.inputOuter').removeClass('focus')
	})
	$('.expDate-input').focus(function() {
		$('.inputOuter').addClass('focus')
	})

	$(document).mouseup(function (e){
		var container = $('.inputOuter');
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.removeClass('focus');
		}
	});

	$('#newCard-button').click(function() {
		$('#cardNumber').focus();
	})

	// Mask
	$('#cardNumber').mask("9999 9999 9999 9999")
	$('#cardNumber').keyup(function(e) {
		if ($(this).val().match(/\d{4}\s\d{4}\s\d{4}\s\d{4}/)) {
			$('#expDate-m').focus();
		}
		if (e.keyCode === 13) {
			$('#expDate-m').focus();
		}
	})
	$('#expDate-m').keyup(function(e) {
		if (this.value == '') {
			$('#cardNumber').focus();
		}
		if ($(this).val().match(/\d{2}/)) {
			$('#expDate-y').focus();
		}
		if (e.keyCode === 13) {
			$('#expDate-y').focus();
		}
	})
	$('#expDate-y').keyup(function(e) {
		if (this.value == '') {
			$('#expDate-m').focus();
		}
		if ($(this).val().match(/\d{2}/)) {
			$('#nameInput').focus();
		}
		if (e.keyCode === 13) {
			$('#nameInput').focus();
		}
	})
	$('#nameInput').keyup(function(e) {
		if (this.value == '') {
			$('#expDate-y').focus();
		}
		if (e.keyCode === 13) {
			$('#card-bottom-cvc').focus();
		}
	})
	$('#card-bottom-cvc').keyup(function() {
		if (this.value == '') {
			$('#nameInput').focus();
		}
	})

	// Popup
	$('#buttonPay').click(function() {
		if($('.exCard').hasClass('active')){
			$('#popupPay').bPopup({
				position: ['50%', '50%'],
				positionStyle: 'fixed',
				escClose: false,
				modalClose: false
			});
		}else if ($('#cardNumber').val() == '' || $('#expDate-m').val() == '' || $('#expDate-y').val() == '' || $('#nameInput').val() == '' || $('#card-bottom-cvc').val() == '') {
			$('#popupError').bPopup({
				position: ['50%', '50%'],
				positionStyle: 'fixed',
				escClose: false,
				modalClose: false
			});
		}
	})
})