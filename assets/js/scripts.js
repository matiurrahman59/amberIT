$(document).ready(function(){
	// Mobile menu 
	$('.nav-icon').click(function(){
		$('.menu ul').slideToggle(1000);

		return false;
	});
	// Scroll TOP 
	$('.back-top a').click(function(){
		$('html,body').animate({
			scrollTop:0
		},1000);
		return false;
	});
	// Banner - Carousel
	$('.banners').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true
	});

	// Banner - Carousel
	$('.works-items').owlCarousel({
		loop:true,
		nav:true,
		dots:false,
		margin:30,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			}

		}
	});

	// Testimonials - Carousel
	$('.testimonials').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true
	});

	// Work Popup 
	$('.work-popup').magnificPopup({
		type: 'image',
	  	gallery:{
	   		enabled:true
	  	}
	});

	//  Knob JS
	$('.pie_progress').asPieProgress({
        namespace: 'pie_progress',
        speed: 80
      });
	$('.pie_progress').asPieProgress('start');

});