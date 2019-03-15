$(document).ready(function () {

    /* Resize */
    $(window).resize(function () {


    });

    /* Site functions */


    $(function () {
        $(".phone").mask("+7 (999) 999-99-99");
    });


    /* FullPage */
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        controlArrows: false,
        autoScrolling: false,
        // scrollHorizontally: true,
        slidesNavigation: true,
        setAllowScrollin: true,
        slidesNavPosition: 'bottom',
        scrollingSpeed: 700,
        afterResize: function () {
        },
    });


    /* Parallax Slide Changing */
    /*if ($(window).width() > 1199) {
        var wide = $( window ).width();	function active(){
            $('.slide').removeClass('z-top');
            $('.slide.active').addClass('z-top');
        }

        $(document).ready( function(){
            $('.fp-tableCell').css('width',wide);
        });

        $('.fp-slidesNav li a,.main-menu a:not(.question-link)').click(function(){
            $('.slide').removeClass('animate');
            $('.slide').removeClass('z-top');
            $('.slide.active').addClass('animate');
            setTimeout(active, 800);
        });
    };
    */

    /* Mousewheel Slide Changing */
    /*$('body').bind('mousewheel', function(e){
        var wide = $( window ).width();	$('.fp-tableCell').css('width',wide);
        function active(){
            $('.slide').removeClass('z-top');
            $('.slide.active').addClass('z-top');
        }
        if(e.originalEvent.wheelDelta /120 > 0) {
            $('.slide').removeClass('animate');
            $('.slide').removeClass('z-top');
            $('.slide.active').addClass('animate');
            setTimeout(active, 800);
            $.fn.fullpage.moveSlideRight();
        }
        else{
            $('.slide').removeClass('animate');
            $('.slide').removeClass('z-top');
            $('.slide.active').addClass('animate');
            setTimeout(active, 800);
            $.fn.fullpage.moveSlideLeft();
        }
    });
    */

    /* Open FancyBox Gallery */
    $('[data-fancybox]').fancybox({
        loop: true
    });
    $(".section7 a.photo-link,.photo-link").on('click', function () {
        $('body').removeClass('modal-open');
        $('.slide-modal.menu').removeClass('active');
        $('[data-fancybox="car-gallery"]').eq(0).trigger('click');
        return false;
    });

    /* Mousewheel Standart Slide Changing*/
    (function () {
        var $body = $('body');
        var $section1 = $('.section1');
        var $section7 = $('.section7');
        var debouncedHandler = debounce(bodyMouseWheelHandler, 1250);

        $body.on('mousewheel', debouncedHandler);

        function bodyMouseWheelHandler(e) {
            if ($body.hasClass('modal-open')) {
                return;
            }

            if (e.originalEvent.wheelDelta / 120 > 0) {
                if ($section1.hasClass('active')) return;

                $.fn.fullpage.moveSlideLeft();
            } else {
                if ($section7.hasClass('active')) return;

                $.fn.fullpage.moveSlideRight();
            }
        }
    })();

    function debounce(func, ms) {

        var isBounced = false;

        function wrapper() {

            if (isBounced) { // (2)
                return;
            }

            func.apply(this, arguments); // (1)

            isBounced = true;

            setTimeout(function () {
                isBounced = false; // (3)
            }, ms);
        }

        return wrapper;
    }

    $('.slide-modal').bind('mousewheel', function (e) {
        event.stopPropagation();
    });


    /* Car Slider */
    $('.car-equipments').slick({
        dots: true,
        rows: 0,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.car-preview',
        speed: 1000
    });
    $('.car-preview').slick({
        dots: true,
        rows: 0,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.car-equipments',
        focusOnSelect: true,
        speed: 1000
    });


    /* Modals */
    $('.section1 .link-1').on('click', function () {
        $('body').addClass('modal-open');
        $('.slide-modal.modal1').addClass('active');
    });
    $('.section2 .link-2').on('click', function () {
        $('body').addClass('modal-open');
        $('.slide-modal.modal2').addClass('active');
    });
    $('.section3 .link-3').on('click', function () {
        $('body').addClass('modal-open');
        $('.slide-modal.modal3').addClass('active');
    });
    $('.section4 .link-4,.section4 .link-5').on('click', function () {
        $('body').addClass('modal-open');
        $('.slide-modal.modal4').addClass('active');
    });
    $('.section5 .link-6').on('click', function () {
        $('body').addClass('modal-open');
        $('.slide-modal.modal6').addClass('active');
    });
    $('.slide-modal .button-close-top,.slide-modal .button-close-left').on('click', function () {
        $('body').removeClass('modal-open');
        $('.slide-modal').removeClass('active');
    });
    $('.section6 .equipment-order,.section6 .car-individual,.section7 .questions-link,.slide-modal.menu .question-link').on('click', function () {
        $('body').addClass('modal-open');
        $('.slide-modal.form').addClass('active');
    });
    $('.section7 .faq-list .single-question').on('click', function () {
        $('.section7 .faq-list .single-question').removeClass('active');
        $(this).addClass('active');
        $('.section7 .answer-list .single-answer').removeClass('active');
        $('.section7 .answer-list .single-answer').eq($(this).index()).toggleClass('active');
    });
    $('.slide-modal .questions-link').on('click', function () {
        $('.slide-modal').removeClass('active');
        $('.slide-modal.form').addClass('active');
    });

    $(document).mouseup(function (e) {
        var div = $(".slide-modal");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('body').removeClass('modal-open');
            $('.slide-modal').removeClass('active');
        }
    });

    /* Modal Close on Esc */
    $(document).keyup(function (e) {
        if ($('body').hasClass('modal-open')) {
            if (e.keyCode === 27) {
                $('body').removeClass('modal-open');
                $('.slide-modal').removeClass('active');
            }
            ;
        }
        ;
    });


    /* Menu + Charger */
    $('header .menu-charger').on('click', function () {
        $('body').addClass('modal-open');
        $('.slide-modal.menu').addClass('active');
    });
    $('.slide-modal.menu nav a').on('click', function () {
        $('body').removeClass('modal-open');
        $('.slide-modal.menu').removeClass('active');
    });
});