$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [
        {
            breakpoint: 1500,
            settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
        },

        {
            breakpoint: 1200,
            settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
        },

        {
            breakpoint: 600,
            settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
        }
    
    ]
    });
});