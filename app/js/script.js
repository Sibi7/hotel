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

    /*map*/
    /*var map = new Map();
    map.init({
        selector: '#contacts-map',
        center: $('.contacts__data p').text(),
        zoom: 17,
        placemarks: [
            {
                address: $('.contacts__data p').text(),
                options: [
                    {key: 'draggable', value: true}
                ],
                properties: [
                    /!*{key:'hintContent',value:''},
                     {key:'balloonContentHeader', value:"Предприятия Самары"},
                     {key:'balloonContentBody', value:"<h1>Название</h1>"}*!/
                ]
            }
        ]
    });*/
    /*close map*/

});