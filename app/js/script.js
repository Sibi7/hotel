$(document).ready(function () {
    $('.owl-carousel2').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items: 1,
                nav: true,
                dots: true
            },
            600:{
                items: 1,
                nav: false,
                autoplay: false,
                dots: true
            },
            1000:{
                items: 1,
                nav: true,
                autoplay: true,
                dots: true
            }
        }
    });


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