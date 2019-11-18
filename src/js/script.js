$(document).ready(function() {
    $('.carousel__inner').slick( {
      infinite: false,
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-arrow.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/next-arrow.png"></button>',
      responsive: [
        {
          breakpoint: 780,
          settings: {
            arrows: false
          }
        }
      ]
    });
  });