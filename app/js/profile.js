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

	$('#profile-video-section-btn').click(function(){
		$('#profile-main-section').fadeOut(250);
		$('#profile-video-section').fadeIn(250);
		$(this).addClass('active')
		$('#profile-main-btns .button').not(this).click(function(){
			$('#profile-video-section').fadeOut(250);
			$('#profile-video-section-btn').removeClass('active')
		});
	});

	// Video

	// $.expr[":"].exact = $.expr.createPseudo(function(arg) {

	// 	return function(element) {

	// 		return $(element).text() === arg.trim();

	// 	};

	// });

	for(let i = 1; i < 16; i++){
		player = videojs('video-player' + i, {
			controls: true,
			autoplay: false,
			// muted: true,
			preload: 'none',
			width: '310',
			playbackRates: [2, 1.75, 1.5, 1.25, 1, 0.75, 0.5],
		});
		$('#video-player' + i).prepend('<span class="vjs-video-name">Ролик ' + (i - 1) + '</span>');
		$('span.vjs-video-name:contains("Ролик 0")').text("Вводная");
	}
	$('.video-js').addClass('vjs-big-play-centered');
	$('.vjs-menu span.vjs-menu-item-text:contains("1x")').text("Обычная");
	$('.vjs-playback-rate .vjs-menu ul.vjs-menu-content').prepend('<div class="vjs-separ-line"></div>');
	$('.vjs-playback-rate .vjs-menu ul.vjs-menu-content').prepend('<span class="vjs-subhead">Скорость</span>');
	$('.vjs-playback-rate.vjs-menu-button').click(function(){
		$(this).children('.vjs-playback-rate .vjs-menu').toggleClass('open');
	});

	$(document).click(function(e){
		if (!$('.vjs-playback-rate.vjs-menu-button').is(e.target) && $('.vjs-playback-rate.vjs-menu-button').has(e.target).length === 0) {
			$('.vjs-playback-rate .vjs-menu').removeClass('open');
		}
	});

	for(let y = 0; y < 5; y++){
		$('#video-step-link' + y).click(function(){
			$('.video-step-link').removeClass('active');
			$(this).addClass('active');

			$('.video-course-step').fadeOut(250);
			$('#video-course-step' + y).fadeIn(250);
		});
	}

	var slickF;

	$('#video-step-link1').click(slickF1 = function(){
		$(this).unbind('click', slickF1);
		$('.video-slick-slider').slick({
			slidesToShow: 3,
			dots: true,
			arrows: true,
			infinite: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
		if($(window).width() < 992){
			$('.video-slider-tablet').addClass('video-slider');
			$('.video-slider-tablet').slick({
				slidesToShow: 2,
				dots: true,
				arrows: true,
				infinite: false,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
		}
		if($(window).width() < 768){
			$('.video-slider-mob1').addClass('video-slider');
			$('.video-slider-mob1').slick({
				slidesToShow: 1,
				dots: true,
				arrows: true,
				infinite: false,
			});
		}
	});
	$('#video-step-link2').click(slickF2 = function(){
		$(this).unbind('click', slickF2);
		if($(window).width() < 768){
			$('.video-slider-mob2').addClass('video-slider');
			$('.video-slider-mob2').slick({
				slidesToShow: 1,
				dots: true,
				arrows: true,
				infinite: false,
			});
		}
	});


	$('#profile-popupDone-btn').click(function(){
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
