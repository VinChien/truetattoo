$(document).ready(() => {

  // scrollLeft
  $('*').mousewheel(function (e, move) {
    e.preventDefault();
    this.scrollLeft -= (move * 800);
  });

  // tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // mNavMenuClick
  $('.mNavMenuButton').click((e) => {
    e.preventDefault();
    // show mNavMenu
    $(".mNavMenu").toggleClass('mNavMenuOpen');
    // change button images 
    $(".mNavMenuCloseW").toggleClass('displayNone');
    $(".mNavMenuOpenW").toggleClass('displayInline');
  });

  // auto add galleryArea pic
  let addGalleryPhoto = document.getElementById("galleryArea");
  let photos = 14;
  let strBox = "";
  for (let i = 1; i < (photos + 1); i++) {
    if (i < 10) {
      strBox += `<img src="./images/gallery_0${String(i)}.jpg" alt="">`;
    } else {
      strBox += `<img src="./images/gallery_${String(i)}.jpg" alt="">`;
    }
  }
  addGalleryPhoto.innerHTML = strBox;

  // auto add swiper-wrapper pic
  let mAddGalleryPhoto = document.getElementById("swiper-wrapper");
  let mPhotos = 14;
  let mStrBox = "";
  for (let i = 1; i < (mPhotos + 1); i++) {
    if (i < 10) {
      mStrBox += `<div class="swiper-slide" style="background-image:url(./images/gallery_0${String(i)}.jpg)"></div>`;
    } else {
      mStrBox += `<div class="swiper-slide" style="background-image:url(./images/gallery_${String(i)}.jpg)"></div>`;
    }
  }
  mAddGalleryPhoto.innerHTML = mStrBox;

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

  // typed
  var options = {
    strings: ['週五 休息', '禮拜五 公休'],
    startDelay: 100,
    typeSpeed: 200,
    backSpeed: 100,
    loop: true,
    smartBackspace: false,
  };

  var typed = new Typed('.fridayClose', options);


  // swiper
  var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    cubeEffect: {
      shadow: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

});