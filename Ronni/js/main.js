$( document ).ready(function() {

/* Resize */
$(window).resize(function() {
	initSwiper(); 
	initWOW();
});

/* Scroll */
$(window).scroll(function () {
	sliderAutoplay();
});

/* Site functions */
	initSwiper();
	initWOW();


/* Tabs charger*/
$(function() {
  $('.mediabox-chargers').on('click', 'div:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.reasons-block').find('.reasons-contentbox .single-tab').removeClass('active').eq($(this).index()).addClass('active');
	    /* BG Charger */
		if($(this).hasClass('first')){$('.reasons-block').css('background-image','url(img/bg/reasons-block-bg1.jpg)')};
		if($(this).hasClass('second')){$('.reasons-block').css('background-image','url(img/bg/reasons-block-bg2.jpg)')};
		if($(this).hasClass('third')){$('.reasons-block').css('background-image','url(img/bg/reasons-block-bg3.jpg)')};
		if($(this).hasClass('four')){$('.reasons-block').css('background-image','url(img/bg/reasons-block-bg4.jpg)')};
		if($(this).hasClass('five')){$('.reasons-block').css('background-image','url(img/bg/reasons-block-bg5.jpg)')};
		if($(this).hasClass('six')){$('.reasons-block').css('background-image','url(img/bg/reasons-block-bg6.jpg)')};
		if($(this).hasClass('seven')){$('.reasons-block').css('background-image','url(img/bg/reasons-block-bg7.jpg)')};	
  });
});



$(function() {
   $(".phone").mask("+7 (999) 999-99-99");
});

/* Fancybox */
$('[data-fancybox]').fancybox({
  touch: {
    vertical: false
  }
});

/* Swipers */
  var catalogSwiper = new Swiper ('.catalog-slider.swiper-container', {
	/*effect: 'coverflow',*/
    loop: true,
	slidesPerView: 3,
	spaceBetween: 20,         
	/*coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 30,
        modifier: 1,
        slideShadows : true,
    },*/
    pagination: {
      el: '.swiper-pagination',
	  clickable: true,
    },		  
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1199: {
		  slidesPerView: 2,
		  spaceBetween: 30,
		  coverflowEffect: {
			rotate: 0,
		  }
		},
		767: {
		  slidesPerView: 1,
		}
	}
  })
  
    var instagramSwiper = new Swiper('.instagram-carousel.swiper-container', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			992: {
			  slidesPerView: 2,
			  spaceBetween: 30,
			},
			767: {
			  slidesPerView: 1,
			  spaceBetween: 15,
			}
		}
    });
	
	/* Team Slider */
	var teamSwiper = new Swiper('.team-slider.swiper-container', {
		loop: true,
		slidesPerView: 1,
		effect:"fade",
		autoplay: {delay:1500},
		speed: 500
	});
	   var team_mobileSwiper = new Swiper('.team-slider-mobile.swiper-container', {
		loop: true,
		slidesPerView: 1,
		effect:"fade",
		autoplay: {delay:1500},
		speed: 500
	});

	/* Start Autoplay */
	teamSwiper.autoplay.stop();
	function sliderAutoplay() {
			var scrTop = $(window).scrollTop();
			if(scrTop > $('.vacancy-block').offset().top - $(window).height()  ) {
			teamSwiper.autoplay.start();
		}
	}
	sliderAutoplay();
	
	
/* WOW  */
function initWOW() {	
	if(jQuery(window).width() > 1200) {
		new WOW().init();
	} else if(jQuery(window).width() < 1199) {
		$('.wow').removeClass('wow');
	}
}



function initSwiper() {
  
	if(jQuery(window).width() < 992) {
		if (typeof funSwiper == 'undefined') {
			funSwiper = new Swiper('.fun-slider.swiper-container', {
				calculateHeight: true,
				loop: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		}
	} else {
		if (typeof funSwiper != 'undefined') {
			// destroy and delete swiper object
			funSwiper.destroy();
			funSwiper = undefined;

			// reset styling for wrapper and slides
			jQuery('.swiper-wrapper').removeAttr('style');
			jQuery('.swiper-slide').removeAttr('style');
		}
	}	
	
}


/* Scroll menu */
var search_bar = $('header');
var trigger_block_height = $('.trigger-block').height();
var margin = 0;
var borderY = 100;
   
$(window).bind('scroll', function() {
	var currentY = $(document).scrollTop();
 
	if(currentY > trigger_block_height) {
		search_bar.addClass('sticky');
	} 
	else if(currentY < trigger_block_height){
		search_bar.removeClass('sticky');
	}
});

/* Anchor scroll */
$('header nav a[href^="#"]').click(function(event) {
	event.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({
		scrollTop: top - 90
	}, 1000);
});

/* CountDown */
$('#clock').countdown('2019/06/28', function(event) {
	$(this).html((event.strftime('<span>%-D</span>' + '<span>%-H</span>' + '<span>%M</span>' + '<span>%S</span>')));
});


/* Catalog modals callback */
$('.catalog-slider .swiper-slide img').on('mouseenter', function() {
	$('.catalog-slider .product-details').removeClass('active');
	$(this).closest('.swiper-slide').find('.product-details').addClass('active');
});
$('.catalog-slider .swiper-slide .product-details').on('mouseleave', function() {
	$('.catalog-slider .product-details').removeClass('active');
});


/* Mobile menu */
$('header .menu-charger').on('click', function() {
	$('header .mobile-menu').addClass('active');
	$('html').addClass('noscroll');
});
$('header .mobile-menu li a,header .mobile-menu .mobile-menu-close,header .mobile-menu .mobile-menu-order').on('click', function() {
	$('header .mobile-menu').removeClass('active');
	$('html').removeClass('noscroll');
});
$(document).mouseup(function (e){
	var div = $("header .mobile-menu");
	if (!div.is(e.target) && div.has(e.target).length === 0) { 
		div.removeClass('active');
		$('html').removeClass('noscroll');
	}
});


/* YandexMaps API */
ymaps.ready(function () {
	
	var contacts_map = document.querySelector('#contacts-map');
	if (contacts_map) {
    var myMap = new ymaps.Map('contacts-map', {
            center: [58.007312992784634,56.212128346197204],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([58.00717386267911,56.21311909325402], {
            hintContent: 'Ронни'
        }, {
            iconLayout: 'default#image',
			iconImageHref: 'img/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-40, -75]
        });


    myMap.geoObjects
        .add(myPlacemark);
	};
});

});