$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
    });
    $(".closed-menu").click(function(){
      $("body").removeClass("toggle");
    });
    $(".site-nav ul li a").click(function(){
      $("body").removeClass("toggle");
    });
  });

  $(document).ready(function() {
    // add all to same gallery
    $(".gallery a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $(".gallery a").each(function(){
      $(this).attr("data-caption", $(this).find("img").attr("alt"));
      $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
    $(".gallery a").fancybox();
  });
  

  var swiper3 = new Swiper(".mySwiper3", {
    grabCursor: true,
    effect: "creative",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });


  var swiper = new Swiper(".testimonial-slider", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: false,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  

  var swiper2 = new Swiper('.youtube-shorts-slider', {
    slidesPerView: 8, 
    spaceBetween: 24, 
    autoplay: {
      delay: 1500, 
      disableOnInteraction: false, // Keep autoplaying after interactions
    },
    loop: true, 
    breakpoints: {
      320: {
        slidesPerView: 1.5,
      },
      575: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 5,
      },
    },
  });


  document.querySelectorAll(".youtube-short-card video").forEach(function(video){
    video.addEventListener("mouseenter",function(){
      video.play();
      video.controls = true;
    });
    video.addEventListener("mouseleave",function(){
      video.pause();
      video.controls = false;
    });
  });
  

