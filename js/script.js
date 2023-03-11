$(document).ready(function(){
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 1000,
    touchTreshhold: 10,
    // centerMode:true,
    variableWidth:true,
  });
});
