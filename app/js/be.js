$(document).ready(function(){
	// $('.slick').slick({
	// 	infinite: true,
	// 	prevArrow: $('.prevSlick'),
	// 	nextArrow: $('.nextSlick'),
	// 	speed: 200,
	// 	autoplay: true,
 //  	autoplaySpeed: 3500,
 //    centerPadding: "0px",
 //    cssEase: "cubic-bezier(0.4, 0, 1, 1)",
 //    easing: "cubic-bezier(0.4, 0, 1, 1)"
	// });


	// $(".slick").on('afterChange', function(event, slick, currentSlide){
	// 	$("#counter").text('0' + (currentSlide + 1));
 //  	});
    $('.carousel').carousel({
      interval: 2000
    });
    var hammer = new Hammer(document.querySelector('.carousel'));
    hammer.get("pan");
    hammer.on("panleft", function(){
        $('.carousel').carousel("next");
    });
    hammer.on("panright", function(){
        $('.carousel').carousel("prev");
    });
    $('.prevSlick').click(function() {
      $('.carousel').carousel('prev');
    })
    $('.nextSlick').click(function() {
      $('.carousel').carousel('next');
    })
    $('.carousel').on('slide.bs.carousel', function (e) {
      $("#counter").text('0' + (e.to + 1));
    })
  	// Fade bg content
  	$('#content-bg1-button').click(function() {
  		$('#content-bg2').fadeTo(0.5, 0);
  		$('#content-bg3').fadeTo(0.5, 0);
  		$('#content-bg1').fadeTo(0.5, 1);
      $('#secondPos').fadeTo(0.5, 1);
  	});
  	$('#content-bg2-button').click(function() {
  		$('#content-bg1').fadeTo(0.5, 0);
      $('#secondPos').fadeTo(0.5, 0);
  		$('#content-bg3').fadeTo(0.5, 0);
  		$('#content-bg2').fadeTo(0.5, 1);
  	});
  	$('#content-bg3-button').click(function() {
  		$('#content-bg1').fadeTo(0.5, 0);
      $('#secondPos').fadeTo(0.5, 0);
  		$('#content-bg2').fadeTo(0.5, 0);
  		$('#content-bg3').fadeTo(0.5, 1);
  	});

    // ScrollTo Steps
    $('#toStep1').click(function(){
      $.scrollTo('#step1', 1000);
    });
    $('#toStep2').click(function(){
      $.scrollTo('#step2', 1000);
    });
    $('#toStep3').click(function(){
      $.scrollTo('#step3', 1000);
    });
    $('#toStep4').click(function(){
      $.scrollTo('#step3', 1000);
    });


    // Scroll 
    $('#scroll').click(function() {
      if ($('#scroll').hasClass('notScroll')) {
        $.scrollTo('#section1', 1000);
        $('#scroll').removeClass('notScroll');
        $('#scroll').addClass('Scroll1');
        return true;
      }
      if ($('#scroll').hasClass('Scroll1')) {
        $.scrollTo('#section2', 1000);
        $('#scroll').removeClass('Scroll1');
        $('#scroll').addClass('Scroll2');
        return true;
      }
      if ($('#scroll').hasClass('Scroll2')) {
        $.scrollTo('#section3', 1000);
        $('#scroll').removeClass('Scroll2');
        $('#scroll').addClass('Scroll3');
        return true;
      }
      if ($('#scroll').hasClass('Scroll3')) {
        $.scrollTo('#section4', 1000);
        $('#scroll').removeClass('Scroll3');
        $('#scroll').addClass('Scroll4');
        return true;
      }
      if ($('#scroll').hasClass('Scroll4')) {
        $.scrollTo('#section5', 1000);
        $('#scroll').removeClass('Scroll4');
        $('#scroll').addClass('Scroll5');
        return true;
      }
      if ($('#scroll').hasClass('Scroll5')) {
        $.scrollTo('#section6', 1000);
        $('#scroll').removeClass('Scroll5');
        $('#scroll').addClass('Scroll6');
        return true;
      }
      if ($('#scroll').hasClass('Scroll6')) {
        $.scrollTo('#section7', 1000);
        $('#scroll').removeClass('Scroll6');
        $('#scroll').addClass('Scroll7');
        return true;
      }
      if ($('#scroll').hasClass('Scroll7')) {
        $.scrollTo('#section0', 1000);
        $('#scroll').removeClass('Scroll7');
        $('#scroll').addClass('notScroll');
        return true;
      }

    })

    var target = $('#section7');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function(){
      var winScrollTop = $(this).scrollTop();
      if(winScrollTop > scrollToElem){
        $('#scroll').css('bottom', '240px');
      }
      if(winScrollTop < scrollToElem){
        $('#scroll').css('bottom', '45px');
      }
    });
});
		