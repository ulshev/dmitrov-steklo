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

	// языки
	$('.language').click(function(){
        if ($('.language').hasClass("show")) {
            $('.language').removeClass('show');
        }else{
            $('.language').addClass('show');
        }
    });

	// добовляет класс подменю
    $('ul.menu > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});

	//кнопка бургер меню
    $('.menu_botton').on('click', function(e){
		if( !$(this).hasClass('active') ) {
			$(this).addClass('active');
			$(".block_menu").slideDown(500);
		}else{
			$(this).removeClass('active');
			$(".block_menu").slideUp(500); 
		}
	});


    if ( window.innerWidth < 1030 ) {
	    $('.menu .submenu > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
				$(".menu .submenu").removeClass('show'); 
				$(".menu .submenu").children('ul').slideUp(500);
				$(this).parent().addClass('show');  
				$(this).parent().children('ul').slideDown(500);
				e.preventDefault();
		    }
		});
    };

	/*$(window).on('load scroll resize', function(){
		//var height = $(window).height() - 100;
		if($(this).scrollTop() > 10) {
		    $('#main_header').addClass('scroll');
		} else {
		    $('#main_header').removeClass('scroll');
		} 
	});*/





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

	$('.partners_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    //focusOnSelect: true,
		arrows: true,
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