$(document).ready(function(){
    // Carousel 1
    $('#carousel1').carousel({
      interval: 2000,

    });
    var hammer = new Hammer(document.querySelector('#carousel1'));
    hammer.get("swipe");
    hammer.on("swipeleft", function(){
        $('#carousel1').carousel("next");
    });
    hammer.on("swiperight", function(){
        $('#carousel1').carousel("prev");
    });
    $('.prevSlick').click(function() {
      $('#carousel1').carousel('prev');
    })
    $('.nextSlick').click(function() {
      $('#carousel1').carousel('next');
    })
    $('#carousel1').on('slide.bs.carousel', function (e) {
      $(".counter1").text('0' + (e.to + 1));
    })

    // Carousel 2
    $('#carousel2').carousel({
      interval: false,
      
    });
    var hammer = new Hammer(document.querySelector('#carousel2'));
    hammer.get("swipe");
    hammer.on("swipeleft", function(){
        $('#carousel2').carousel("next");
    });
    hammer.on("swiperight", function(){
        $('#carousel2').carousel("prev");
    });
    $('.prevCsl').click(function() {
      $('#carousel2').carousel('prev');
    })
    $('.nextCsl').click(function() {
      $('#carousel2').carousel('next');
    })
    $('#carousel2').on('slide.bs.carousel', function (e) {
      $("#counter2").text('0' + (e.to + 1));
    })
    // Carousel 3 Purpose
    $('#carousel3').carousel({
      interval: false,
      wrap: false
    });
    var hammer = new Hammer(document.querySelector('#carousel3'));
    hammer.get("swipe");
    hammer.on("swipeleft", function(){
        $('#carousel3').carousel("next");
    });
    hammer.on("swiperight", function(){
        $('#carousel3').carousel("prev");
    });

    $('.prevCsl2').click(function() {
      $('#carousel3').carousel('prev');
    })
    $('.nextCsl2').click(function() {
      $('#carousel3').carousel('next');
    })
    $('#PurposeCslArrowPrev').click(function() {
      $('#carousel3').carousel('prev');
    })
    $('#PurposeCslArrowNext').click(function() {
      $('#carousel3').carousel('next');
    })

    $('#PurposeCslArrowPrev').hide();

    $('#carousel3').on('slide.bs.carousel', function (e) {
      if (e.to == 0) {
        $('#PurposeCslArrowPrev').hide();
      }
      if (e.to != 0) {
        $('#PurposeCslArrowPrev').show();
      }
      if (e.to == 3) {
        $('#PurposeCslArrowNext').hide();
      }
      if (e.to != 3) {
        $('#PurposeCslArrowNext').show();
      }
    })

    // Section Purpose Show|Hide
    $('#PurposeBtnShow1').click(function() {
      $(this).hide();
      $('#textHide1').slideToggle(250);
      if ($('#textHide2').css('display') != 'none') {
        $('#PurposeBtnShow2').show();
        $('#textHide2').slideToggle(250);
      }
      if ($('#textHide3').css('display') != 'none') {
        $('#PurposeBtnShow3').show();
        $('#textHide3').slideToggle(250);
      }
      if ($('#textHide4').css('display') != 'none') {
        $('#PurposeBtnShow4').show();
        $('#textHide4').slideToggle(250);
      }
    })
    $('#PurposeBtnHide1').click(function() {
      $('#PurposeBtnShow1').show();
      $('#textHide1').slideToggle(250);
    })
    $('#PurposeBtnShow2').click(function() {
      $(this).hide();
      $('#textHide2').slideToggle(250);
      if ($('#textHide1').css('display') != 'none') {
        $('#PurposeBtnShow1').show();
        $('#textHide1').slideToggle(250);
      }
      if ($('#textHide3').css('display') != 'none') {
        $('#PurposeBtnShow3').show();
        $('#textHide3').slideToggle(250);
      }
      if ($('#textHide4').css('display') != 'none') {
        $('#PurposeBtnShow4').show();
        $('#textHide4').slideToggle(250);
      }
    })
    $('#PurposeBtnHide2').click(function() {
      $('#PurposeBtnShow2').show();
      $('#textHide2').slideToggle(250);
    })
    $('#PurposeBtnShow3').click(function() {
      $(this).hide();
      $('#textHide3').slideToggle(250);
      if ($('#textHide2').css('display') != 'none') {
        $('#PurposeBtnShow2').show();
        $('#textHide2').slideToggle(250);
      }
      if ($('#textHide1').css('display') != 'none') {
        $('#PurposeBtnShow1').show();
        $('#textHide1').slideToggle(250);
      }
      if ($('#textHide4').css('display') != 'none') {
        $('#PurposeBtnShow4').show();
        $('#textHide4').slideToggle(250);
      }
    })
    $('#PurposeBtnHide3').click(function() {
      $('#PurposeBtnShow3').show();
      $('#textHide3').slideToggle(250);
    })
    $('#PurposeBtnShow4').click(function() {
      $(this).hide();
      $('#textHide4').slideToggle(250);
      if ($('#textHide2').css('display') != 'none') {
        $('#PurposeBtnShow2').show();
        $('#textHide2').slideToggle(250);
      }
      if ($('#textHide3').css('display') != 'none') {
        $('#PurposeBtnShow3').show();
        $('#textHide3').slideToggle(250);
      }
      if ($('#textHide1').css('display') != 'none') {
        $('#PurposeBtnShow1').show();
        $('#textHide1').slideToggle(250);
      }
    })
    $('#PurposeBtnHide4').click(function() {
      $('#PurposeBtnShow4').show();
      $('#textHide4').slideToggle(250);
    })

    // mobile
    $('#PurposeBtnShow1m').click(function() {
      $(this).hide();
      $('#textHide1m').slideToggle(250);
      if ($('#textHide2m').css('display') != 'none') {
        $('#PurposeBtnShow2m').show();
        $('#textHide2m').slideToggle(250);
      }
      if ($('#textHide3m').css('display') != 'none') {
        $('#PurposeBtnShow3m').show();
        $('#textHide3m').slideToggle(250);
      }
      if ($('#textHide4m').css('display') != 'none') {
        $('#PurposeBtnShow4m').show();
        $('#textHide4m').slideToggle(250);
      }
    })
    $('#PurposeBtnHide1m').click(function() {
      $('#PurposeBtnShow1m').show();
      $('#textHide1m').slideToggle(250);
    })
    $('#PurposeBtnShow2m').click(function() {
      $(this).hide();
      $('#textHide2m').slideToggle(250);
      if ($('#textHide1m').css('display') != 'none') {
        $('#PurposeBtnShow1m').show();
        $('#textHide1m').slideToggle(250);
      }
      if ($('#textHide3m').css('display') != 'none') {
        $('#PurposeBtnShow3m').show();
        $('#textHide3m').slideToggle(250);
      }
      if ($('#textHide4m').css('display') != 'none') {
        $('#PurposeBtnShow4m').show();
        $('#textHide4m').slideToggle(250);
      }
    })
    $('#PurposeBtnHide2m').click(function() {
      $('#PurposeBtnShow2m').show();
      $('#textHide2m').slideToggle(250);
    })
    $('#PurposeBtnShow3m').click(function() {
      $(this).hide();
      $('#textHide3m').slideToggle(250);
      if ($('#textHide2m').css('display') != 'none') {
        $('#PurposeBtnShow2m').show();
        $('#textHide2m').slideToggle(250);
      }
      if ($('#textHide1m').css('display') != 'none') {
        $('#PurposeBtnShow1m').show();
        $('#textHide1m').slideToggle(250);
      }
      if ($('#textHide4m').css('display') != 'none') {
        $('#PurposeBtnShow4m').show();
        $('#textHide4m').slideToggle(250);
      }
    })
    $('#PurposeBtnHide3m').click(function() {
      $('#PurposeBtnShow3m').show();
      $('#textHide3m').slideToggle(250);
    })
    $('#PurposeBtnShow4m').click(function() {
      $(this).hide();
      $('#textHide4m').slideToggle(250);
      if ($('#textHide2m').css('display') != 'none') {
        $('#PurposeBtnShow2m').show();
        $('#textHide2m').slideToggle(250);
      }
      if ($('#textHide3m').css('display') != 'none') {
        $('#PurposeBtnShow3m').show();
        $('#textHide3m').slideToggle(250);
      }
      if ($('#textHide1m').css('display') != 'none') {
        $('#PurposeBtnShow1m').show();
        $('#textHide1m').slideToggle(250);
      }
    })
    $('#PurposeBtnHide4m').click(function() {
      $('#PurposeBtnShow4m').show();
      $('#textHide4m').slideToggle(250);
    })


    // Carousel 4 Result
    $('#carousel4').carousel({
      interval: false
    })
    var hammer = new Hammer(document.querySelector('#carousel4'));
    hammer.get("swipe");
    hammer.on("swipeleft", function(){
        $('#carousel4').carousel("next");
    });
    hammer.on("swiperight", function(){
        $('#carousel4').carousel("prev");
    });
    $('#ResultCslArrowPrev').click(function() {
      $('#carousel4').carousel('prev');
    })
    $('#ResultCslArrowNext').click(function() {
      $('#carousel4').carousel('next');
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
    $('#toStep1mob').click(function(){
      $.scrollTo('#step1', 1000);
    });
    $('#toStep2mob').click(function(){
      $.scrollTo('#step2', 1000);
    });
    $('#toStep3mob').click(function(){
      $.scrollTo('#step3', 1000);
    });
    $('#toStep4mob').click(function(){
      $.scrollTo('#step3', 1000);
    });


    // Scroll 
    var i = 1;
    $('#scroll').click(function() {
      if(i > 7){
        i = 0;
      }
      $.scrollTo('#section' + i, 1000);
      i++;
    });

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
		