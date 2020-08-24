$(function () {

    const worksSlider = $('[data-slider="worksSlider"]');

    /*Mobile nav
    =========================*/

    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


    /*Filter
    =========================*/

    let filter = $("[data-filter]");

    filter.on('click', function (event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $('[data-cat]').removeClass('hide');
        } else {
            $('[data-cat]').each(function () {

                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }

            });
        }


    });

    /*Modal
    =========================*/

    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    /*Вызов окна*/

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalID = $this.data('modal');

        $(modalID).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function () {
            $(modalID).find(".modal__dialog").css({
                transform: "rotateX(0)"
                //                transform: "scale(1)"
            });
        }, 200);

        worksSlider.slick('setPosition');

    });

    /*Функционал кнопки закрытия*/

    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
            //            transform: "scale(0)"
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);

    });

    /*Функционал закрытия при нажатии вне модального окна*/

    $(".modal").on("click", function (event) {
        let $this = $(this);
        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
            //            transform: "scale(0)"
        });

        setTimeout(function () {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);

    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation(); /*предотвратить закрытие при нажатии на модальное окно*/
    });


    /* Slider https://kenwheeler.github.io/slick/
    =========================*/

    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });



});
