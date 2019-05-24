$(document).ready(function(){
	$('.profile-buttonClose').click(function() {
		$(this).css('display','none');
		$(this).siblings('.profile-buttonOpen').css('display','flex');
	});
	$('.profile-buttonOpen').click(function() {
		$(this).css('display','none');
		$(this).siblings('.profile-buttonClose').css('display','flex');
	});
	$('.profile-button1').click(function() {
		$('#profile-hidden1').slideToggle(250);
	});
	$('.profile-button2').click(function() {
		$('#profile-hidden2').slideToggle(250);
	});
	$('.profile-button3').click(function() {
		$('#profile-hidden3').slideToggle(250);
	});
	$('.profile-button4').click(function() {
		$('#profile-hidden4').slideToggle(250);
	});
	$('.profile-button5').click(function() {
		$('#profile-hidden5').slideToggle(250);
	});
	$('.profile-button6').click(function() {
		$('#profile-hidden6').slideToggle(250);
	});
	$('.profile-button7').click(function() {
		$('#profile-hidden7').slideToggle(250);
	});

	// Tooltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	// ScrollTo
	$('#scrollTo-btn1').click(function(){
      $.scrollTo('.personInf', 250);
    });
    $('#scrollTo-btn2').click(function(){
      $.scrollTo('.orders', 250);
    });
    $('#scrollTo-btn3').click(function(){
      $.scrollTo('.sTicket', 250);
    });
    $('#scrollTo-btn4').click(function(){
      $.scrollTo('.stats', 250);
    });
    $('#scrollTo-btn5').click(function(){
      $.scrollTo('.appNutrition', 250);
    });
});
