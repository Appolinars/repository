$(function () {

  $('select').styler();


  /* Slider
  ============================================================== */

  $('.team__inner, .food__inner').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true
  });


  AOS.init({
    once: true
  });

  /* Gallery
  ============================================================== */

  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },

  });

  $('.gallery__link').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',

    zoom: {
      enabled: true,

      duration: 300,
      easing: 'ease-in-out',
      opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }

  });

  /* Mobile menu
  ============================================================== */

  $('.nav__burger').click(function (event) {
    $(this).toggleClass('active');
    $('.nav__list').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.nav__list-link').click(function (event) {
    $('.nav__burger,.nav__list').removeClass('active');
    $('body').removeClass('lock');
  });

  /* Fixed header 
      ==============================================*/
  var nav = $('.nav');
  var headerH = $('.header__inner').innerHeight();
  var scrollOffset = $(window).scrollTop(); /*Сохр текущий скролл страницы при загрузке*/

  checkScroll(scrollOffset); /*Вып. функцию при загрузке стр.*/

  $(window).on("scroll", function () {
    /*Обновление функции при скролле*/
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH - 400) {
      nav.addClass('fixed');
    } else {
      nav.removeClass('fixed');
    }
  }

  /* Smooth scroll
  ============================================================== */


  function scroll() {
    var $sections = $('section');
    $sections.each(function (i, el) {
      var top = $(el).offset().top - 200;
      var bottom = top + $(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');
      if (scroll > top && scroll < bottom) {
        $('.nav__list-link.active').removeClass('active');
        $('.nav__list-link[href="#' + id + '"]').addClass('active');

      }
    })
  }

  $("nav, .header__arrow").on("click", "a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();
    jQuery(window).off("scroll", scroll);
    $('.nav__list-link.active').removeClass('active');
    $(event.target).addClass('active');

    // получем идентификатор блока из атрибута href
    var id = $(this).attr('href'),

      // находим высоту, на которой расположен блок
      top = $(id).offset().top;

    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({
      scrollTop: top - 30
    }, 800, null, function () {
      jQuery(window).on("scroll", scroll);
    });
  });

  jQuery(window).on("scroll", scroll);


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



});




/* Tabs
  ============================================================== */

function openMenu(evt, menuName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("menu__content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("menu__links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";


}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();