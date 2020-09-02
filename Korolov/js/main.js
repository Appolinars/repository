$(function () {
	$('.portfolio__gallery').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		arrows: false
	});

	$('.btn__order').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 500,
		mainClass: 'my-mfp-slide-bottom'
	});

	AOS.init();

	$('.icon-menu').click(function (event) {
		$(this).toggleClass('active');
		$('.nav__list').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.nav__list-link').click(function (event) {
		$('.icon-menu,.nav__list').removeClass('active');
		$('body').removeClass('lock');
	});

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

	$(".nav__list").on("click", "a", function (event) {
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

	


});

