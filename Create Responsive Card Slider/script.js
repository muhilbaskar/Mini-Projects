const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        320: { // For mobile devices
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: { // For small tablets
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: { // For tablets
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: { // For laptops and desktops
            slidesPerView: 3,
            spaceBetween: 30
        },
        1440: { // For larger screens
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});
