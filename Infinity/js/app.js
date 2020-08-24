$('.contents__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true

});

$('.features__content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: true,
    fade: false

});

$('.testimonial__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    fade: false

});

$(function () {
    var header = $('.nav');
    var introH = $('.intro').innerHeight();
    var scrollOffset = $(window).scrollTop(); /*Сохр текущий скролл страницы при загрузке*/


    /* Fixed header 
    ==============================================*/

    checkScroll(scrollOffset); /*Вып. функцию при загрузке стр.*/

    $(window).on("scroll", function () {
        /*Обновление функции при скролле*/
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH - 200) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    /*Плавный скролл*/

    $("[data-scroll]").on('click', function (event) {
        event.preventDefault();

        var $this = $(this);
        var blockID = $this.data('scroll');
        var blockOffset = $(blockID).offset().top;

        $('html, body').animate({
            scrollTop: blockOffset - 20
        }, 500);
        
        $('#nav').removeClass('active');


    });
});

$('.burger').on('click', function(event) {
        event.preventDefault(); /*убрать станд поведение*/
        
        $('#nav').toggleClass('active'); /*переключение класса*/
        
    });


/*Слайдеры на мобилках*/

$(window).on('load resize', function () {
    if ($(window).width() < 991) {
        $('.packages__content:not(.slick-initialized)').slick({
            centerMode: true,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    } else {
        $(".packages__content.slick-initialized").slick("unslick");
    }
});

$(window).on('load resize', function () {
    if ($(window).width() < 565) {
        $('.statistic__list:not(.slick-initialized), .services__content:not(.slick-initialized), .wedo__content:not(.slick-initialized),.team__list:not(.slick-initialized)').slick({
            centerMode: true,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1
        });
    } else {
        $(".statistic__list.slick-initialized, .services__content.slick-initialized,.wedo__content.slick-initialized,.team__list.slick-initialized").slick("unslick");
    }
});



/*Works filter*/

$('.btn__filter').click(function (event) {
    var i = $(this).data('filter');
    if (i == 0) {
        $('.works__item').show();
    } else {
        $('.works__item').hide();
        $('.works__item.category-' + i).show();
    }

    $('.btn__filter').removeClass('active');
    $(this).addClass('active');

    return false;
});

/*Анимация появления блоков при скролле*/

wow = new WOW({
    mobile: false
})
wow.init();


/*Когда мало айтемов, ставит контент в столбец без заданной ширины + не работает flex*/

//    $('.works__list').masonry({
//        
//  itemSelector: '.works__item',
//        horizontalOrder: true,
//        columnWidth: '.works__item',
//        percentPosition: true
//});
//
//$("#works-filter li").click(function() {
//    var group = $(this).data('category');
//	var group_class = "." + group;
//	
//    if(group == "*"){
//        $(".works__item").show();
//	    $('.works__list').masonry('layout');
//       }
//    else if(group != "") {
//		$(".works__item").hide();
//		$(group_class).show();
//		$('.works__list').masonry('layout');
//	} else {
//		$(".works__item").show();
//		$('.works__list').masonry('layout');
//	}
//});
