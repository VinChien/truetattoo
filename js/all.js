$(function () {

  // scrollLeft
  $('*').mousewheel(function (e, move) {
    this.scrollLeft -= (move * 500);
  });

  // intro effects
  $('.introLogo').addClass('animate__animated animate__zoomIn');
  $('#introButton').attr('class', 'anchorPoint animate__animated animate__zoomIn animate__delay-1s');
  $('#mIntroButton').attr('class', 'mAnchorPoint animate__animated animate__zoomIn animate__delay-1s');
  $('.introCopyright').addClass('animate__animated animate__zoomIn animate__delay-2s');

  // navOption focus
  let buttonArray = ['#introButton', '#navIndexButton', '#navAboutButton', '#navGalleryButton', '#navProcessButton', '#navContactButton'];
  for (let i = 0; i < buttonArray.length; i++) {
    $(buttonArray[i]).click(function (e) {
      e.preventDefault();
      // reset
      for (let i = 0; i < buttonArray.length; i++) {
        $(buttonArray[i]).removeClass('navOptionFocus');
      }
      // set
      if (buttonArray[i] != '#introButton') {
        $(buttonArray[i]).addClass('navOptionFocus');
      } else {
        $(buttonArray[1]).addClass('navOptionFocus');
      }
    });
  }

  // intro button effect
  document.querySelector('.button').onmousemove = (e) => {

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    e.target.style.setProperty('--x', `${x}px`)
    e.target.style.setProperty('--y', `${y}px`)

  }

  // contact a blank
  let contactArray = ['.contactFB', '.contactIG', '.googleMap', '.addressImg'];
  let googleMapLink = 'https://www.google.com.tw/maps/place/%E8%A6%8B%E7%9C%9F%E5%88%BA%E9%9D%92TRUETATTOO/@24.154283,120.6954716,19z/data=!4m13!1m7!3m6!1s0x34693d5bfcaab7f7:0xc23d8d23c45a4e8e!2zNDA05Y-w5Lit5biC5YyX5Y2A6Ieq5by36KGXNDPlt7czMOW8hDE0LTPomZ82Rg!3b1!8m2!3d24.1543021!4d120.6954894!3m4!1s0x34693d6bd5942b93:0x7dccee5d4d767145!8m2!3d24.154171!4d120.6954916?hl=zh-TW';
  let contactHttps = ['https://www.facebook.com/truetattooedddie/', 'https://www.instagram.com/truetattooeddie/', googleMapLink, googleMapLink];
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

  // Add smooth scrolling to nav all links
  $(".anchorPoint").on('click', function (e) {

    // Make sure this.hash has a value before overriding default behavior
    // if (this.hash !== "") {
      // Prevent default anchor click behavior
      e.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      // offset.left
      $('html, body').animate({
        scrollLeft: $(hash).offset().left
      }, 300, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    // } // End if
  });

  // Add smooth scrolling to mNav all links
  $(".mAnchorPoint").on('click', function (e) {

    // Make sure this.hash has a value before overriding default behavior
    // if (this.hash !== "") {
    // Prevent default anchor click behavior
    e.preventDefault();

    // Store hash
    let hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    // offset.left
    $('html, body').animate({
      scrollLeft: $(hash).offset().top
    }, 300, function () {
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
    // } // End if
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
    speed: 900,
    fade: true,
    autoplay: true,
    autoplayspeed: 1000,
    asNavFor: '.galleryAreaNav',
    arrows: false
  });
  // slick nav
  $('.galleryAreaNav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.galleryArea',
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplayspeed: 1000,
  });

  // typed
  let contactOptions = {
    strings: ['注意事項', '禮拜五 休息'],
    startDelay: 100,
    typeSpeed: 200,
    backSpeed: 100,
    loop: true,
    smartBackspace: false,
  };
  let contactTyped = new Typed('.fridayClose', contactOptions);

  let aboutWordsOptions = {
    strings: ['讓意識游離<br>空白的去感受<br><br>生活中的一切軌跡/訊息<br>有時看似虛飾<br>卻也很篤實<br><br>維持最自然的姿勢<br>當找到的時候<br>就會是最好的成果<br><br>對此<br><br>我有著清晰的自性'],
    startDelay: 400,
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    smartBackspace: false,
  };
  let aboutWordsTyped = new Typed('.aboutWordsTyped', aboutWordsOptions);

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