$(document).ready(function () {
    /*apartments slider*/    
    $('#apartments-thumbnail').flexslider({
        animation: 'slide',
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 220,
        itemMargin: 15,
        asNavFor: '#apartments-slider',
        responsive: {
            1024: {
                itemWidth: 250
            }
        }

    });
    $('#apartments-slider').flexslider({
        animation: 'slide',
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: '#apartments-thumbnail'
    });

    /*close apartments slider*/
    $( function() {
        $( "#datepicker" ).datepicker();
        $( "#datepicker1" ).datepicker();
    } );

    $('#reviews-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: true,
        navigation: true,
        /*navigationText: true,*/
        pagination: true,
        autoplay: true,
        autoplayTimeout: 9000,
        items: 1,
        dots: true,
        singleItem: false,
        mouseDrag: false,
        touchDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });
//    hamburger menu

});
$(document).ready(function () {
    var link =$('.menu-link');
    var link_active = $('.menu-link_active');

    link.click(function () {
        link.toggleClass('menu-link_active');
    })
});
$( ".menu-link" ).click(function() {
    $( ".header__nav__menu" ).slideToggle( "slow", function() {
    });
});
// end hamburger menu


//tabs for our-apartments

$('.our-apartments__body__slider__content').each(function (i) {
    if (i != 0) {
        $(this).hide(0)
    }
});
$(document).on('click', '.our-apartments__head__address__block a', function (e) {
    e.preventDefault();
    var tabId = $(this).attr('href');
    $('.our-apartments__head__address__block a').removeClass('active');
    $(this).addClass('active');
    $('.our-apartments__body__slider__content').hide();
    $(tabId).show();
    $('.flexslider').resize();
});

//end tabs for our-apartments

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });
});


//for gallery
$('.photo').each(function (i) {
    if (i != 0) {
        $(this).hide(0)
    }
});
$(document).on('click', '.our-apartments__head__address a', function (e) {
    e.preventDefault();
    var tabId = $(this).attr('href');
    $('.our-apartments__head__address a').removeClass('active');
    $(this).addClass('active');
    $('.photo').hide();
    $(tabId).fadeIn();
});


//for request-call

$('#request').on('click', function () {
    if ($('.header__nav__request-call').attr('display','block')) {
        $('.header__nav__request-call').attr('display','none')
    } else {
        $('.header__nav__request-call').attr('display','block')
    }
});
