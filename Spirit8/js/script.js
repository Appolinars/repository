//VANTA.NET({
//  el: "#intro",
//  mouseControls: true,
//  touchControls: true,
//  minHeight: 200.00,
//  minWidth: 200.00,
//  scale: 1.00,
//  scaleMobile: 1.00,
//  color: 0xff753f,
//  backgroundColor: 0x070707,
//  points: 13.00,
//  maxDistance: 22.00,
//  spacing: 13.00
//})\


$(function(){
  if ( $(window).width() > 1024 ) {
      VANTA.GLOBE({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffae3f,
  backgroundColor: 0x070707
    
})
  }
});

/*Fixed header*/

var header = $('#header');
var introH = $('#intro').innerHeight();
var scrollPosition = $(window).scrollTop();

$(window).on('scroll load resize', function () {
    scrollPosition = $(this).scrollTop();

    if (scrollPosition > introH) {
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
    }
});

$('#nav__toggle').on('click', function (event) {
    event.preventDefault(); /*убрать станд поведение*/

    $(this).toggleClass('active');
    $('#nav').toggleClass('active'); /*переключение класса*/


});



/*Smooth scroll*/

$("[data-scroll]").on('click', function (event) {
    event.preventDefault;

    var elementID = $(this).data('scroll');
    var elementOffset = $(elementID).offset().top;

    $('#nav__toggle').toggleClass('active');
    $('#nav').removeClass('active');

    $('html, body').animate({
        scrollTop: elementOffset - 15
    }, 700);
});

/*Slider*/

$('.team__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }


        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,

            }


        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }


        }

    ]
});

$('.testimonials__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
});

/*Filter*/

$('.filter__item').click(function (event) {
    var i = $(this).data('filter');
    if (i == 1) {
        $('.works__item').show();
    } else {
        $('.works__item').hide();
        $('.works__item.f_' + i).show();
    }

    $('.filter__item').removeClass('active');
    $(this).addClass('active');

    return false;
});
