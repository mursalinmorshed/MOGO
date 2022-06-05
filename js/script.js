$(function () {
  jQuery(document).ready(function ($) {
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });
  });
  //====Banner part SLider Start=====// 
  $('.main-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
  //====Banner part SLider End=====// 
  //====ABout part SLider Strat=====// 
  $('.about-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
  //====ABout part SLider End=====// 
  //====Team part SLider Start=====// 
  $('.team-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      

    ]
  });
  //====Team part SLider End=====// 
  //====Comment part SLider Start=====// 
  $('.main-comment-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.left',
    nextArrow: '.right'
  });
  //====Comment part SLider End=====// 

  //====WOW JS part Start=====// 
  new WOW().init();
  //====WOW JS part Start=====// 
  //====Preloader JS part Start=====// 
  $(window).load(function(){
    $("#preloader").delay(500).fadeOut(300)
})


  //====Preloader JS part End=====// 
})