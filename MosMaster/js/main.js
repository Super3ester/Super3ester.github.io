$( document ).ready(function() {

/* Sliders */
$('.trigger-slider').slick({
	rows:0,
 	slidesToShow: 1,
 	slidesToScroll: 1,
	autoplay: true,
    autoplaySpeed: 3500,
	fade: true,
	arrows: false,
 	dots: true
});

$('.works-slider').slick({
	rows:0,
 	slidesToShow: 1,
 	slidesToScroll: 1,
	autoplay: true,
    autoplaySpeed: 3500,
	arrows: true
});

$('.reviews-list').slick({
	rows:0,
 	slidesToShow: 3,
 	slidesToScroll: 3,
	arrows: false,
	responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
    ]
});
$('.show-more-reviews').click(function(){
    $(".reviews-list").slick('slickNext');
});

$('.bottom-trigger-slider').slick({
	rows:0,
 	slidesToShow: 1,
 	slidesToScroll: 1,
	autoplay: true,
    autoplaySpeed: 3500,
	fade: true,
	arrows: false,
 	dots: true,
	responsive: [
		{
		  breakpoint: 576,
		  settings: {
			arrows: false
		  }
		}
    ]
});
 

/* Phone Mask */
$(function() {
   $(".phone").mask("+7 (999) 999-99-99");
});


/* Order form Calculator */
$('#order-calculator input#roof').on('input keyup', function() {
	roof = $(this).val() * 400;
	$('.roof-price').text(roof + " ₽");
	order_calc();
});
$('#order-calculator input#lamp').on('input keyup', function() {
	lamp = $(this).val() * 450;
	$('.lamp-price').text(lamp + " ₽");
	order_calc();
});

function order_calc(){
	total = parseFloat(roof + lamp);
	discount = total / 100 * 75;
	$('.total-price').text(total + " ₽");
	$('.discount-price').text(discount + " ₽");
};

/* Parameter transfer */
$('select#roof-type').on('input keyup', function() {
	roof_value = $(this).val();
	$('form#trigger-form #roof-type-value').val(roof_value);
});




/* Horizontal Scroll img/text */
initFullscreenAnimation();
function initFullscreenAnimation() {
	var width = $(window).width();
	if (width < 767){
		var scrolling = 0;
		setInterval(function () {
			scrolling -= 1
			$('.marquee').css('background-position-x', scrolling)
		}, 6);
	} else {
		var scrolling = 0;
		setInterval(function () {
			scrolling -= 0.5
			$('.marquee').css('background-position-x', scrolling)
		}, 6);
	}
};

});