$('.slide-header-home').owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 993000,
  nav: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 1
    }
  }
})
$('.slide-product-detail').owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 993000,
  nav: true,
  navText: ['<img srcset="./img/arrow-left-gray.png 2x" alt="arrow-left" />', '<img srcset="./img/arrow-right-gray.png 2x" alt="arrow-right" />'],
  dots: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 1
    }
  }
})

$('.featured-product-slider').owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 993000,
  dots: false,
  nav: true,
  navText: ['<img srcset="./img/arrow-left.png 2x" alt="arrow-left" />', '<img srcset="./img/arrow-right.png 2x" alt="arrow-right" />'],
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})

$(document).ready(function () {
  $(".header-nav-menu").click(function () {
    $(".wrapper").toggleClass("active-menu");
    $(".menu-respon").toggleClass("left-0");
  });

  // show hide password
  $("#password-current .icon-eye").click(function () {
    if ($('#password-current input').attr("type") == "text") {
      $('#password-current input').attr('type', 'password');
      $('#password-current i').addClass("fa-eye-slash");
      $('#password-current i').removeClass("fa-eye");
    } else if ($('#password-current input').attr("type") == "password") {
      $('#password-current input').attr('type', 'text');
      $('#password-current i').removeClass("fa-eye-slash");
      $('#password-current i').addClass("fa-eye");
    }
  });
  $("#password-new .icon-eye").on('click', function () {
    if ($('#password-new input').attr("type") == "text") {
      $('#password-new input').attr('type', 'password');
      $('#password-new i').addClass("fa-eye-slash");
      $('#password-new i').removeClass("fa-eye");
    } else if ($('#password-new input').attr("type") == "password") {
      $('#password-new input').attr('type', 'text');
      $('#password-new i').removeClass("fa-eye-slash");
      $('#password-new i').addClass("fa-eye");
    }
  });

  $(".btn-update-pass").click(function () {
    $(".field-info-password > input").addClass("d-none");
    $(".change-password").addClass("d-block");
    $(".btn-update-pass").text("Lưu")
  });

  $('#start-date').datepicker();
  $('#end-date').datepicker();
  $('.header-nav-logo').click(function () {
    alert("ok")
  })
});

