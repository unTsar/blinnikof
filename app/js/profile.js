$(document).ready(function(){

	$('.profile-buttonClose').click(function() {
		$(this).css('display','none');
		$(this).siblings('.profile-buttonOpen').css('display','flex');
		$(this).parents('.head').siblings('.hidden').slideToggle(250);
	});
	$('.profile-buttonOpen').click(function() {
		$(this).css('display','none');
		$(this).siblings('.profile-buttonClose').css('display','flex');
		$(this).parents('.head').siblings('.hidden').slideToggle(250);
	});

	// Tooltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	// ScrollTo
	$('#scrollTo-btn1').click(function(){
      $.scrollTo('.personInf', 500);
    });
    $('#scrollTo-btn2').click(function(){
      $.scrollTo('.orders', 500);
    });
    $('#scrollTo-btn3').click(function(){
      $.scrollTo('.sTicket', 500);
    });
    $('#scrollTo-btn4').click(function(){
      $.scrollTo('.stats', 500);
    });
    $('#scrollTo-btn5').click(function(){
      $.scrollTo('.appNutrition', 500);
    });
});
