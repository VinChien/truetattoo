$(document).ready(function () {

  // scrollLeft
  $('html, body, *').mousewheel(function (e, delta) {
    this.scrollLeft -= (delta * 800);
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

  // import Typed from 'typed.js';

  var options = {
    strings: ['(週五休息)', '(禮拜五公休)','(週五休息)','(禮拜五公休)'],
    startDelay: 100,
    typeSpeed: 200,
    backSpeed: 100,
    loop: true,
    smartBackspace: false,
  };

  var typed = new Typed('.fridayClose', options);
});