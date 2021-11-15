$('.project-relative-slider').owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 993000,
  nav: true,
  navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})