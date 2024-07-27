$(function() {
    $('.home__slider').slick({
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/slick-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/slick-next.svg" alt=""></button>',
    });

    $('.testimonial__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 931,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
})