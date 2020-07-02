$(document).ready(function () {

  // scrollLeft
  $('html, body, *').mousewheel(function (e, delta) {
    this.scrollLeft -= (delta * 150);
    e.preventDefault();
  });

  // slick
  $('.galleryArea').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplayspeed: 1000
  });

});