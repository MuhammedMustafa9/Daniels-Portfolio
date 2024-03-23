$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    991.98: {
      items: 3,
    },
  },
  dots:true,
  autoplay:true,
});


// navbar scrolling background
$(window).on("scroll",function () {

    var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar"),
        h_hight = $("#home").outerHeight();

    if(bodyScroll > h_hight){
        navbar.removeClass('position-absolute').addClass("position-fixed");

        navbar.addClass("bg-white","text-dark").addClass("shadow").removeClass("py-4");
        $(".navbar-brand").removeClass("text-white").addClass("text-dark");
        $(".nav-link").removeClass("text-white").addClass("text-dark");
        $(".fa-bars").removeClass("text-white").addClass("text-dark");

    }else{
        navbar.removeClass("position-fixed").addClass('position-absolute');

        navbar.removeClass("bg-white").removeClass("shadow").addClass("py-4");
        $(".navbar-brand").removeClass("text-dark").addClass("text-white");
        $(".nav-link").removeClass("text-dark").addClass("text-white");
        $(".fa-bars").removeClass("text-dark").addClass("text-white");
    }
});

