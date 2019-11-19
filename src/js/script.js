// $(document).ready(function() {
//     $('.carousel__inner').slick( {
//       infinite: false,
//       speed: 1200,
//       adaptiveHeight: true,
//       prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-arrow.png"></button>',
//       nextArrow: '<button type="button" class="slick-next"><img src="icons/next-arrow.png"></button>',
//       responsive: [
//         {
//           breakpoint: 780,
//           settings: {
//             arrows: false
//           }
//         }
//       ]
//     });
//   });

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