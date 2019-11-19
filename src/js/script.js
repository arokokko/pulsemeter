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