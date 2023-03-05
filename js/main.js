var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active')
    $('body').toggleClass('lock')
  })
  $('.header__menu').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active')
    $('body').toggleClass('lock')

  })
})

function openForm() {
  document.getElementById("myForm").style.display = "flex";
  document.getElementById("myForm").style.flexDirection = "column";
  document.getElementById("myForm").style.gap = "10px";
  document.getElementById("open-btn").style.display = "none"

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("open-btn").style.display = "block"

}

document.body.onload = function () {
  setTimeout(function () {
    let preloader = document.getElementById('page-preloader')
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 100)
}

window.onscroll = function ShowHeader() {
  let header = document.querySelector("header")
  if (window.pageYOffset > 10) {
    header.classList.add('header-fixed')
  } else {
    header.classList.remove('header-fixed')
  }
}



$(function () {
  $('.translate').click(function () {
    let lang = $(this).attr('id');

    $('.lang').each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });

  });
});


new WOW().init();

$('.testimonial-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


