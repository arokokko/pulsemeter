// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         infinite: false,
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.png"></img></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.png"></img></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     arrows: false,
//                     dots: true
//                 }
//             }
//         ]
//     });
   
// });


const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false, 
    autoHeight: true,
    speed: 600,
    navPosition: "bottom"
    
  });

document.querySelector('.prev'). addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});