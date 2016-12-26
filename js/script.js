/* Menu + Slider */

var menuToggle = document.querySelector('.main-nav__toggle');
var menuContainer = document.querySelector('.main-nav__container');
var sliderControlRight = document.querySelector('.reviews__slider-controls--right');
var sliderControlLeft = document.querySelector('.reviews__slider-controls--left');
var toggles = document.querySelectorAll('.reviews__input');
var header = document.querySelector('.page-header');
var menuContainerOpened = document.querySelector('.main-nav__container--opened');

window.addEventListener('load', function() {
  menuContainer.classList.remove('main-nav__container--opened');
  menuContainer.classList.add('main-nav__container--closed');
  menuToggle.classList.add('main-nav__toggle--closed');
  menuToggle.classList.remove('main-nav__toggle--opened');
  header.style.zIndex = '8';

});

window.addEventListener('resize', function() {
  if(window.innerWidth > 1098) {
    menuToggle.classList.remove('main-nav__toggle--opened');
    menuToggle.classList.add('main-nav__toggle--closed');
    menuContainer.classList.remove('main-nav__container--opened');
    menuContainer.classList.add('main-nav__container--closed');
    header.style.zIndex = '8';
  }
});

menuToggle.addEventListener('click', function(){
  menuContainer.classList.toggle('main-nav__container--closed');
  if (menuToggle.classList.contains('main-nav__toggle--closed')) {
    menuToggle.classList.remove('main-nav__toggle--closed');
    menuToggle.classList.add('main-nav__toggle--opened');
    menuContainer.classList.add('main-nav__container--opened');
    header.style.zIndex = '0';
  } else if (menuToggle.classList.contains('main-nav__toggle--opened')) {
    menuToggle.classList.remove('main-nav__toggle--opened');
    menuToggle.classList.add('main-nav__toggle--closed');
    menuContainer.classList.remove('main-nav__container--opened');
    menuContainer.classList.add('main-nav__container--closed');
    header.style.zIndex = '8';
  }
});

if(sliderControlLeft) {
  sliderControlLeft.addEventListener('click', function() {
    for(var i = 0; i < toggles.length; i++) {
      if(toggles[i].checked) {
        if(i == 0) {
          toggles[i].checked = false;
          toggles[toggles.length - 1].checked = true;
          break;
        } else {
          toggles[i].checked = false;
          toggles[i - 1].checked = true;
          break;
        }
      }
    }
  });
}

if(sliderControlRight) {
  sliderControlRight.addEventListener('click', function() {
    for(var i = 0; i < toggles.length; i++) {
      if(toggles[i].checked) {
        if(i == toggles.length - 1) {
          toggles[i].checked = false;
          toggles[0].checked = true;
          break;
        } else {
          toggles[i].checked = false;
          toggles[i + 1].checked = true;
          break;
        }
      }
    }
  });
}


/* Map */

function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(59.938536,30.3224549),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  };
  var map = new google.maps.Map(mapCanvas, mapOptions)
  var pointer = new google.maps.LatLng(59.938536,30.3224549);
  var marker = new google.maps.Marker({
    position: pointer,
    map: map,
    icon: 'img/icon-map-marker.svg'
  })
}
google.maps.event.addDomListener(window, 'load', initialize);

