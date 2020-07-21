$(document).ready(() => {

  // scrollLeft
  // $('*').mousewheel(function (e, move) {
  //   this.scrollLeft -= (move * 500);
  // });

  // intro button effect
  document.querySelector('.button').onmousemove = (e) => {

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    e.target.style.setProperty('--x', `${x}px`)
    e.target.style.setProperty('--y', `${y}px`)

  }

  // contact a blank
  let contactArray = ['.contactFB', '.contactIG'];
  let contactHttps = ['https://www.facebook.com/truetattooedddie/', 'https://www.instagram.com/truetattooeddie/'];
  for (let i = 0; i < contactArray.length; i++) {
    document.querySelector(contactArray[i]).onclick = (e) => {
      e.preventDefault();
      window.open(contactHttps[i]);
    }
  }

  // auto add galleryArea pic
  let addGalleryPhoto = document.getElementById("galleryArea");
  let photos = 14;
  let strBox = "";
  for (let i = 1; i < (photos + 1); i++) {
    if (i < 10) {
      strBox += `<img src="./images/gallery_0${String(i)}.jpg" alt="gallery images">`;
    } else {
      strBox += `<img src="./images/gallery_${String(i)}.jpg" alt="gallery images">`;
    }
  }
  addGalleryPhoto.innerHTML = strBox;

  // auto add galleryAreaNav pic
  let nAddGalleryPhoto = document.getElementById("galleryAreaNav");
  let nPhotos = 14;
  let nStrBox = "";
  for (let i = 1; i < (nPhotos + 1); i++) {
    if (i < 10) {
      nStrBox += `<img src="./images/gallery_0${String(i)}.jpg" alt="gallery images">`;
    } else {
      nStrBox += `<img src="./images/gallery_${String(i)}.jpg" alt="gallery images">`;
    }
  }
  nAddGalleryPhoto.innerHTML = nStrBox;

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

  // Add smooth scrolling to all links
  $(".anchorPoint").on('click', function (e) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      e.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // mNavMenuClick
  $('.mNavMenuButton').click((e) => {
    e.preventDefault();
    // show mNavMenu
    $('.mNavMenu').toggleClass('mNavMenuOpen');
    // change button images 
    $('.mNavMenuCloseW').toggleClass('displayNone');
    $('.mNavMenuOpenW').toggleClass('displayInline');
  });

  // reset mNavmenuClick
  $('.index, .about, .gallery, .process, .contact').click(function (e) {
    e.preventDefault();
    $('.mNavMenu').removeClass('mNavMenuOpen');
    $('.mNavMenuCloseW').removeClass('displayNone');
    $('.mNavMenuOpenW').removeClass('displayInline');
  });

  // slick
  $('.galleryArea').slick({
    // dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplayspeed: 1000,
    asNavFor: '.galleryAreaNav',
    arrows:false
  });
  // slick nav
  $('.galleryAreaNav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.galleryArea',
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
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