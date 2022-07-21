$(function () {
  $(".popup__link").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $(".gallery__slider").slick({
    prevArrow:
      '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-left.svg"/>;</button>',
    nextArrow:
      '<button type="button" class="slick-next slick-btn"><img src="images/arrow-right.svg"/>;</button>',
  });

  $(".gallery__item-inner").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
      },
    },
  });

  $('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active')
  });

});
