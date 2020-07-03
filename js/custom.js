$(document).ready(function(){

	// header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");
		}
			// Show button after 100px
	  var showAfter = 100;
	  if ( $(this).scrollTop() > showAfter ) { 
	   $('.back-to-top').fadeIn();
	  } else { 
	   $('.back-to-top').fadeOut();
	  }
	 });
	 
	 //Click event to scroll to top
	 $('.back-to-top').click(function(){
	  $('html, body').animate({scrollTop : 0},800);
	  return false;
	 });
		})

	// wow plugin initialize
	if(screen.width > 768){
		new WOW().init();
	}
	

	// fancybox plugin options
	$('[data-fancybox]').fancybox({
		loop : true
	});

	// stellar plugin initialize
	if(screen.width > 768){
		$(window).stellar();
	}