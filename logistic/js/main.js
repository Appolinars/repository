"use strict";

$(function () {

    /* Siders
    ============================================================== */

    $('.types__slider').slick({
        dots: true,
        dotsClass: 'sliderDots',
        arrows: false,
        fade: true
    });

    $('.wedo__slider').slick({
        dots: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 1121,
                settings: {
                    vertical: false,
                    verticalSwiping: false
                }
            }
        ]
    });

    $('.projects__slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        prevArrow: '<button class="slider__btn slider__btn-left"><svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.858774 4.22213C0.663513 4.41739 0.663513 4.73397 0.858774 4.92924L4.04075 8.11122C4.23602 8.30648 4.5526 8.30648 4.74786 8.11122C4.94312 7.91596 4.94312 7.59937 4.74786 7.40411L1.91944 4.57568L4.74786 1.74726C4.94312 1.55199 4.94312 1.23541 4.74786 1.04015C4.5526 0.844887 4.23602 0.844887 4.04075 1.04015L0.858774 4.22213ZM20.7881 4.07568L1.21233 4.07568V5.07568L20.7881 5.07568V4.07568Z" fill="white"/></svg></button>',
        nextArrow: '<button class="slider__btn slider__btn-right"><svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1412 4.77787C20.3365 4.58261 20.3365 4.26603 20.1412 4.07076L16.9592 0.888784C16.764 0.693522 16.4474 0.693522 16.2521 0.888784C16.0569 1.08405 16.0569 1.40063 16.2521 1.59589L19.0806 4.42432L16.2521 7.25274C16.0569 7.44801 16.0569 7.76459 16.2521 7.95985C16.4474 8.15511 16.764 8.15511 16.9592 7.95985L20.1412 4.77787ZM0.211914 4.92432L19.7877 4.92432L19.7877 3.92432L0.211914 3.92432L0.211914 4.92432Z" fill="white"/></svg></button>',
        responsive: [
            {
                breakpoint: 1121,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    /* AccorgeonForSlider
    ============================================================== */

    let accordeonItems = document.querySelectorAll('.types__accordeon-item');


    let dots = document.querySelector('.types__slider').querySelectorAll('li');
    document.querySelector('.sliderDots').style.display = 'none';


    // accordeonItems.forEach(function(item, index) {
    //     item.onclick = () => {
    //         dots[index].click();
    //         accordeonItems.forEach(function(item) {
    //             item.querySelector('.types__accordeon-text').style.height = '0px';
    //         });
    //         let accordeonText = item.querySelector('.types__accordeon-text');
    //         accordeonText.style.height = accordeonText.scrollHeight + 'px';
    //     };
    // });

    accordeonItems.forEach = forEach;
    accordeonItems.forEach(function (item, index) {
        item.addEventListener('click', function () {
            dots[index].click();
            accordeonItems.forEach(function (item) {
                item.querySelector('.types__accordeon-text').style.height = '0px';
            });
            let accordeonText = item.querySelector('.types__accordeon-text');
            accordeonText.style.height = accordeonText.scrollHeight + 'px';
        });
    });

    /* Modal
    ============================================================== */


    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    /*Вызов окна*/

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalID = $this.data('modal');

        $(modalID).addClass('show');
        $("body").addClass('no-scroll');
        $(".wrapper").addClass('no-scroll');

        setTimeout(function () {
            $(modalID).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 500);


    });

    /*Функционал кнопки закрытия*/

    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
            $(".wrapper").removeClass('no-scroll');
        }, 500);

    });

    /*Функционал закрытия при нажатии вне модального окна*/

    $(".modal").on("click", function (event) {
        let $this = $(this);
        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
            $(".wrapper").removeClass('no-scroll');
        }, 500);

    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation(); /*предотвратить закрытие при нажатии на модальное окно*/
    });


    /* Smooth scroll
    ============================================================== */

    let navLinks = document.querySelectorAll('.scroll__link');

    navLinks.forEach = forEach;
    navLinks.forEach(function (link) {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);
            let scrollTarget = document.getElementById(href);
            let elementPosition = $(scrollTarget).offset().top;

            $('html, body').animate({
                scrollTop: elementPosition
            }, 600);

            document.querySelector('.nav').classList.remove('active');
        });
    });

});

function forEach(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    new WOW().init();

    /* Tabs
    ============================================================== */

    function tabs(selector) {
        let tab = document.querySelector(selector);
        let tabsBtn = tab.querySelectorAll('.tabs__nav-btn');
        let tabsItems = tab.querySelectorAll('.tabs__item');

        tab.addEventListener("click", selectTabNav);

        function selectTabNav(event) {
            let tabId = event.target.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);
            if (!tabId) return;

            // tabsBtn.forEach((item) => item.classList.remove('active'));
            tabsBtn.forEach = forEach;
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });
            event.target.classList.add('active');

            tabsItems.forEach = forEach;
            tabsItems.forEach(function (item) {
                item.classList.remove('active', 'fade');
            });

            currentTab.classList.add('active', 'fade');

            $('.projects__slider').slick('setPosition');
        }
    }

    tabs("#tabs-projects");
    tabs("#tabs-details");
    tabs("#tabs-bonuses");


    /* Team extra info
    ============================================================== */

    let teamTrigger = document.querySelectorAll('.team__plus-icon');

    // teamTrigger.forEach((item) => {
    //     item.addEventListener('click', function(e) {
    //         for (let i = 0; i < teamTrigger.length; i++) {
    //             if (e.target != teamTrigger[i]) {
    //                 teamTrigger[i].parentNode.classList.remove('show');
    //             }
    //             item.parentNode.classList.toggle('show');

    //         }
    //     });
    // });
    teamTrigger.forEach = forEach;
    teamTrigger.forEach(function (item) {
        item.addEventListener('click', function (e) {
            for (let i = 0; i < teamTrigger.length; i++) {
                if (e.target != teamTrigger[i]) {
                    teamTrigger[i].parentNode.classList.remove('show');
                }
                item.parentNode.classList.toggle('show');

            }
        });
    });

    /* Burger menu
    ============================================================== */

    let menuIcon = document.querySelector('.burger');
    let nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    /* Scroll progress bar
    ============================================================== */

    window.addEventListener('DOMContentLoaded', function () {
        progressBar();
    });

    window.addEventListener('scroll', function () {
        progressBar();
    });

    function progressBar() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / winHeight) * 100;
        document.querySelector('.scroll__progress-bar').style.width = scrolled + '%';
    }

    /* Smooth scroll
    ============================================================== */

    // let navLinks = document.querySelectorAll('.scroll__link');

    // navLinks.forEach = forEach;
    // navLinks.forEach(function (link) {

    //     link.addEventListener('click', function (e) {
    //         e.preventDefault();

    //         let href = this.getAttribute('href').substring(1);
    //         let scrollTarget = document.getElementById(href);
    //         let elementPosition = scrollTarget.getBoundingClientRect().top;

    //         document.querySelector(href).scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         });

    //         nav.classList.remove('active');
    //     });
    // });
    //     const smoothLinks = document.querySelectorAll('a[href^="#"]');
    //     for (let smoothLink of smoothLinks) {
    //     smoothLink.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const id = smoothLink.getAttribute('href');

    //         document.querySelector(id).scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         });
    //     });
    // };
});

