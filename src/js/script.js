// tiny slider
const slider = tns({
	container: '.carousel-ts__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	autoHeight: true,
	controls: false,
	nav: false,
	navPosition: 'bottom',
	responsive: {
		320: {
			nav: true
		},
		781: {
			nav: false
		}
	}
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});


$(document).ready(function(){
	// tabs
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	// переключатели подробнее и назад в карточках
	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.card__content').eq(i).toggleClass('card__content_active');
				$('.card__info').eq(i).toggleClass('card__info_active');
			});
		});
	}
	
	toggleSlide('.card__more');
	toggleSlide('.card__goback');

	// Modal windows

	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn('slow');
	});
	
	$('.card_btn').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.card__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut();
	});

	// закрытие модального окна щелчком по пустому полю
	$(window).on('click', function(e) {
        if (e.target.classList.contains('overlay')) {
            $('.overlay, #consultation, #thanks, #order').fadeOut();
        }
	});
	
	//validate
	function valideForms(form) {
		$(form).validate({
			rules: {                
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Пожалуйста введите ваше имя",
				phone: "Пожалуйста введите ваш номер телефона",
				email: {
					required: "Пожалуйста введите ваш email",
					email: "Email должен быть в формате name@domain.com"
				}
			}
		});
	}
	valideForms('#consultation-form');
	valideForms('#consultation form');
	valideForms('#order form');

	// маска ввода номера телефона
	$("input[name=phone]").mask("+9(999) 999-9999");
});





