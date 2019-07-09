$(document).ready(function() {
	$("#buttonPay").click(function() {
		if ($('#checkboxAccept').prop('checked') == false) {
			$('#popupError').bPopup({
				position: ['50%', '50%'],
				positionStyle: 'fixed',
				escClose: false,
				modalClose: false
			});
		}
	})
})