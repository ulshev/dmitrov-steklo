$(document).ready(function() {
	$('footer').append($('.gUniFormModalWindow'));
	$('footer').append($('.gUniFormSuccess'));
	
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
		//$('#main_header').toggleClass("hidden");
		//$('.main_section').toggleClass("hidden");
		$('#main_header').addClass('animated');
		//$('#main_screen').addClass('animated');
	};
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
		    $(this).addClass('animated');
		}
	    });

		$('.content .text_and_img').each(function(){
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


    if ( window.innerWidth < 1125 ) {
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

	if ( window.innerWidth < 1031 ) {
		// добовляет класс подменю
		$('.foo_menu > ul > li').each(function(){
			var list = $(this).children('ul');
	
			if(list.length > 0){
				list.parent().addClass('submenu');
			};
		});
	    $('.foo_menu .submenu > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
				$(".foo_menu .submenu").removeClass('show'); 
				$(".foo_menu .submenu").children('ul').slideUp(500);
				$(this).parent().addClass('show');  
				$(this).parent().children('ul').slideDown(500);
				e.preventDefault();
		    }
		});
    };


	$('.open_vacansis .container h4').click(function(){
		if( !$(this).parent().hasClass('active') ) {
			$('.container').removeClass('active');
			$('.open_block').slideUp(500);
			$(this).parent().addClass('active');
			$(this).parent().children('.open_block').slideDown(500);
		}else{
			$(this).parent().removeClass('active');
			$(this).parent().children('.open_block').slideUp(500); 
		}
   });

	$('.more_text').on('click', function(){
		$(this).addClass('hide');  
		$(this).parent().parent().children('.hidden_text').slideDown(500);
		//$(this).parent().children('hide_text').removeClass('hide');
	});
	$('.hide_text').on('click', function(){
		//$(this).addClass('hide');  
		$(this).parent().parent().parent().children('.hidden_text').slideUp(500);
		$(this).parent().parent().parent().children().children('.more_text').removeClass('hide');
	});

	$('.catalog_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: false,
	    dots: false,
	    //focusOnSelect: true,
		arrows: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1451,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 1201,
				settings: {
				  slidesToShow: 2,
				}
			},
			
			{
				breakpoint: 701,
				settings: {
				  slidesToShow: 1,
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
		autoplay: true,
		autoplaySpeed: 3000,
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
				breakpoint: 900,
				settings: {
				  slidesToShow: 2,
				}
			},
			
			{
				breakpoint: 501,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});

	$('.blog_slider').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    //focusOnSelect: true,
		centerMode: true,
		arrows: true,
		//autoplay: true,
		//autoplaySpeed: 3000,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
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
				}
			},
		]
	});

	$('.exsklusiv_galery_slider').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    //focusOnSelect: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
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
				}
			},
		]
	});

	$('.galery_slider').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    //focusOnSelect: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1101,
				settings: {
				  slidesToShow: 2,
				}
			},
			
			{
				breakpoint: 601,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});

	$('.product_images .main_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.product_images .preview_slider',
	  });
	$('.product_images .preview_slider').slick({
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    arrows: false,
	    asNavFor: '.product_images .main_slider',
	    dots: false,
	    //centerMode: true,
	    //vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		]
	});

	$('.our_history_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    //focusOnSelect: true,
		arrows: true,
		fade: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});

	$(window).on('load resize', function(){
		if ( window.innerWidth>801 && $('.benefits').hasClass('slick-initialized') ) {
		  $('.benefits').slick('unslick');
		} else if ( window.innerWidth<=801 && !$('.benefits').hasClass('slick-initialized') ) {
			$('.benefits').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				//centerMode: true,
				//variableWidth: true,
				infinite: true,
				prevArrow: '<span class="slick-prev">&nbsp;</span>',
				nextArrow: '<span class="slick-next">&nbsp;</span>',
				responsive: [
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1,
						}
					},
				]
			});

	
		}
	});

	$(window).on('load resize', function(){
		if ( window.innerWidth>1101 && $('.serteficats').hasClass('slick-initialized') ) {
		  $('.serteficats').slick('unslick');
		} else if ( window.innerWidth<=1101 && !$('.serteficats').hasClass('slick-initialized') ) {
			$('.serteficats').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				//centerMode: true,
				//variableWidth: true,
				infinite: true,
				prevArrow: '<span class="slick-prev">&nbsp;</span>',
				nextArrow: '<span class="slick-next">&nbsp;</span>',
				responsive: [
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 1,
						}
					},
				]
			});

	
		}
	});
	
});