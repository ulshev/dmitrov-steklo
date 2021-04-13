$(document).ready(function() {
	// Убираем placeholder при клике в поле
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});

    // animation
	if ( window.innerWidth>0 ){
		$('#header').toggleClass("hidden");
		$('.main_section').toggleClass("hidden");
		$('#header').addClass('animated');
		$('#main_screen').addClass('animated');
	};
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
		    $(this).addClass('animated');
		}
	    });
	});
	
	// tab switching
	$('.tab_buttons span').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons span', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});

    $("[data-fancybox]").fancybox();















	$('.catalog_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: false,
	    dots: false,
	    //focusOnSelect: true,
		arrows: true,
		adaptiveHeight: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1401,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 1100,
				settings: {
				  slidesToShow: 2,
				}
			},
			
			{
				breakpoint: 601,
				settings: {
				  slidesToShow: 1,
				  dots: true,
				}
			},
		]
	});



});