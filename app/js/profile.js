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

		$(this).parents('.buttons').siblings('.orders-listPaid').slideUp(175, function() {
			$(this).siblings('.orders-listUnpaid').slideDown(175);
		});
	})
	$('.orders-buttonPaid').click(function() {

		$(this).addClass('active');
		$(this).siblings('.orders-buttonUnpaid').removeClass('active');

		$(this).parents('.buttons').siblings('.orders-listUnpaid').slideUp(175, function() {
			$(this).siblings('.orders-listPaid').slideDown(175);
		});
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

	// Fancybox
	$('[data-fancybox="gallery"]').fancybox();
	$('.collages-item1-icon').click(function(){
		$('.collages-item1').trigger('click');
	});
	$('.collages-item2-icon').click(function(){
		$('.collages-item2').trigger('click');
	});

	$('#profile-videolections-section-btn').click(function(){
		$('#profile-main-section').fadeOut(250);
		$('#profile-videolections-section').fadeIn(250);
		$(this).addClass('active')
		$('#profile-main-btns .button').not(this).click(function(){
			$('#profile-videolections-section').fadeOut(250);
			$('#profile-videolections-section-btn').removeClass('active')
		});
	});
	$('#profile-videotraining-section-btn').click(function(){
		if($(window).width() <= 767){
			$('.main-footer').removeClass('d-flex');
			$('.main-footer').hide();
		}
		$('#profile-main-section').fadeOut(250);
		$('#profile-videotraining-section').fadeIn(250);
		$(this).addClass('active')
		$('#profile-main-btns .button').not(this).click(function(){
			$('#profile-videotraining-section').fadeOut(250);
			$('#profile-videotraining-section-btn').removeClass('active')
			$('.main-footer').addClass('d-flex');
			$('.main-footer').show();
		});
	});

	if(readCookie('vimeovideo1') == 'played'){
		$('#video-player1').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player1').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo2') == 'played'){
		$('#video-player2').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player2').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo3') == 'played'){
		$('#video-player3').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player3').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo4') == 'played'){
		$('#video-player4').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player4').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo5') == 'played'){
		$('#video-player5').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player5').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo6') == 'played'){
		$('#video-player6').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player6').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo7') == 'played'){
		$('#video-player7').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player7').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo8') == 'played'){
		$('#video-player8').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player8').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo9') == 'played'){
		$('#video-player9').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player9').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo10') == 'played'){
		$('#video-player10').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player10').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo11') == 'played'){
		$('#video-player11').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player11').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo12') == 'played'){
		$('#video-player12').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player12').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo13') == 'played'){
		$('#video-player13').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player13').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo14') == 'played'){
		$('#video-player14').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player14').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo15') == 'played'){
		$('#video-player15').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player15').parents('.video-container').siblings('.video-index').removeClass('done');
	}



	if(readCookie('vimeovideo16') == 'played'){
		$('#video-player16').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player16').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo17') == 'played'){
		$('#video-player17').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player17').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo18') == 'played'){
		$('#video-player18').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player18').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo19') == 'played'){
		$('#video-player19').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player19').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo20') == 'played'){
		$('#video-player20').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player20').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo21') == 'played'){
		$('#video-player21').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player21').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo22') == 'played'){
		$('#video-player22').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player22').parents('.video-container').siblings('.video-index').removeClass('done');
	}
	if(readCookie('vimeovideo23') == 'played'){
		$('#video-player23').parents('.video-container').siblings('.video-index').addClass('done');
	}else{
		$('#video-player23').parents('.video-container').siblings('.video-index').removeClass('done');
	}





	var videocontainer1 = new Vimeo.Player("video-player1");
	var videocontainer2 = new Vimeo.Player("video-player2");
	var videocontainer3 = new Vimeo.Player("video-player3");
	var videocontainer4 = new Vimeo.Player("video-player4");
	var videocontainer5 = new Vimeo.Player("video-player5");
	var videocontainer6 = new Vimeo.Player("video-player6");
	var videocontainer7 = new Vimeo.Player("video-player7");
	var videocontainer8 = new Vimeo.Player("video-player8");
	var videocontainer9 = new Vimeo.Player("video-player9");
	var videocontainer10 = new Vimeo.Player("video-player10");
	var videocontainer11 = new Vimeo.Player("video-player11");
	var videocontainer12 = new Vimeo.Player("video-player12");
	var videocontainer13 = new Vimeo.Player("video-player13");
	var videocontainer14 = new Vimeo.Player("video-player14");
	var videocontainer15 = new Vimeo.Player("video-player15");

	var videocontainer16 = new Vimeo.Player("video-player16");
	var videocontainer17 = new Vimeo.Player("video-player17");
	var videocontainer18 = new Vimeo.Player("video-player18");
	var videocontainer19 = new Vimeo.Player("video-player19");
	var videocontainer20 = new Vimeo.Player("video-player20");
	var videocontainer21 = new Vimeo.Player("video-player21");
	var videocontainer22 = new Vimeo.Player("video-player22");
	var videocontainer23 = new Vimeo.Player("video-player23");


	videocontainer1.on('play', function() {
		console.log('Played the video 1');
		createCookie('vimeovideo1', 'played', '30');
	});
	videocontainer2.on('play', function() {
		console.log('Played the video 2');
		createCookie('vimeovideo2', 'played', '30');
	});
	videocontainer3.on('play', function() {
		console.log('Played the video 3');
		createCookie('vimeovideo3', 'played', '30');
	});
	videocontainer4.on('play', function() {
		console.log('Played the video 4');
		createCookie('vimeovideo4', 'played', '30');
	});
	videocontainer5.on('play', function() {
		console.log('Played the video 5');
		createCookie('vimeovideo5', 'played', '30');
	});
	videocontainer6.on('play', function() {
		console.log('Played the video 6');
		createCookie('vimeovideo6', 'played', '30');
	});
	videocontainer7.on('play', function() {
		console.log('Played the video 7');
		createCookie('vimeovideo7', 'played', '30');
	});
	videocontainer8.on('play', function() {
		console.log('Played the video 8');
		createCookie('vimeovideo8', 'played', '30');
	});
	videocontainer9.on('play', function() {
		console.log('Played the video 9');
		createCookie('vimeovideo9', 'played', '30');
	});
	videocontainer10.on('play', function() {
		console.log('Played the video 10');
		createCookie('vimeovideo10', 'played', '30');
	});
	videocontainer11.on('play', function() {
		console.log('Played the video 11');
		createCookie('vimeovideo11', 'played', '30');
	});
	videocontainer12.on('play', function() {
		console.log('Played the video 12');
		createCookie('vimeovideo12', 'played', '30');
	});
	videocontainer13.on('play', function() {
		console.log('Played the video 13');
		createCookie('vimeovideo13', 'played', '30');
	});
	videocontainer14.on('play', function() {
		console.log('Played the video 14');
		createCookie('vimeovideo14', 'played', '30');
	});
	videocontainer15.on('play', function() {
		console.log('Played the video 15');
		createCookie('vimeovideo15', 'played', '30');
	});



	videocontainer16.on('play', function() {
		console.log('Played the video 16');
		createCookie('vimeovideo16', 'played', '30');
	});
	videocontainer17.on('play', function() {
		console.log('Played the video 17');
		createCookie('vimeovideo17', 'played', '30');
	});
	videocontainer18.on('play', function() {
		console.log('Played the video 18');
		createCookie('vimeovideo18', 'played', '30');
	});
	videocontainer19.on('play', function() {
		console.log('Played the video 19');
		createCookie('vimeovideo19', 'played', '30');
	});
	videocontainer20.on('play', function() {
		console.log('Played the video 20');
		createCookie('vimeovideo20', 'played', '30');
	});
	videocontainer21.on('play', function() {
		console.log('Played the video 21');
		createCookie('vimeovideo21', 'played', '30');
	});
	videocontainer22.on('play', function() {
		console.log('Played the video 22');
		createCookie('vimeovideo22', 'played', '30');
	});
	videocontainer23.on('play', function() {
		console.log('Played the video 23');
		createCookie('vimeovideo23', 'played', '30');
	});


	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
	}

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	function eraseCookie(name) {
		createCookie(name,"",-1);
	}




	for(let y = 0; y < 5; y++){
		$('#vl-video-step-link' + y).click(function(){
			$('.video-step-link').removeClass('active');
			$(this).addClass('active');

			$('.video-course-step').fadeOut(250);
			$('#vl-video-course-step' + y).fadeIn(250);
		});
	}

	$('.video-owl-slider').owlCarousel({
		items: 3,
		nav: true,
		navElement: 'div class="nav-arrow"',
		navText: '',
		margin: 30,
		responsive:{
			320:{
				items: 1
			},
			768:{
				items: 2
			},
			992:{
				items: 3
			}
		}
	});

	$('.profile-popupDone-btn').click(function(){
		$(".profile-modal-pagedim").fadeIn(250);
		$("#popupDone").fadeIn(250);
	});

	$('#popupDone').click(function(e){
		if (!$('.popupDone-container').is(e.target) && $('.popupDone-container').has(e.target).length === 0) {
			$(this).fadeOut(250);
			$(".profile-modal-pagedim").fadeOut(250);
		}
	});

});

$(document).ready(function(){
	if($(location).attr('href').indexOf('videolections') != '-1'){
		$('#profile-videolections-section-btn').trigger('click');
	}
});
$(document).ready(function(){
	if($(location).attr('href').indexOf('videotraining') != '-1'){
		$('#profile-videotraining-section-btn').trigger('click');
	}
});
