$(document).ready(function(){

	$('.profile-buttonOpen').click(function() {
		$(this).css('display','none');
		$(this).siblings('.profile-buttonClose').css('display','flex');
		$(this).parents('.head').siblings('.hidden').slideToggle(250);
	});
	$('.profile-buttonClose').click(function() {
		$(this).css('display','none');
		$(this).siblings('.profile-buttonOpen').css('display','flex');
		$(this).parents('.head').siblings('.hidden').slideToggle(250);

		$(this).parents('.head').siblings('.hidden').find('.hidden').css('display', 'none');
		$(this).parents('.head').siblings('.hidden').find('.profile-buttonOpen').css('display','flex');
		$(this).parents('.head').siblings('.hidden').find('.profile-buttonClose').css('display','none');
	});
	// Tooltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	$('.orders-buttonUnpaid').click(function() {

		$(this).addClass('active');
		$(this).siblings('.orders-buttonPaid').removeClass('active');

		$(this).parents('.buttons').siblings('.orders-listPaid').slideUp(175);
		$(this).parents('.buttons').siblings('.orders-listUnpaid').slideDown(175);
	})
	$('.orders-buttonPaid').click(function() {

		$(this).addClass('active');
		$(this).siblings('.orders-buttonUnpaid').removeClass('active');

		$(this).parents('.buttons').siblings('.orders-listUnpaid').slideUp(175);
		$(this).parents('.buttons').siblings('.orders-listPaid').slideDown(175);
	})

	$('#profile-buttonUnpaid-sTicket').click(function() {
		$('.schedule-Unpaid').addClass('hidden');
		if ($('.schedule-Unpaid').siblings('.head').children('.profile-buttonOpen').css('display') == 'none') {
			$('.schedule-Unpaid').fadeIn();
		}
		$('.schedule-Paid').removeClass('hidden');
		$('.schedule-Paid').hide();
	})
	$('#profile-buttonPaid-sTicket').click(function() {
		$('.schedule-Paid').addClass('hidden');
		if ($('.schedule-Paid').siblings('.head').children('.profile-buttonOpen').css('display') == 'none') {
			$('.schedule-Paid').fadeIn();
		}
		$('.schedule-Unpaid').removeClass('hidden');
		$('.schedule-Unpaid').hide();
	})
});
