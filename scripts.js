document.addEventListener('DOMContentLoaded', () => {
  setupRunningLine();
  setupAboutWorkSlider();
});

function setupRunningLine() {
  $('.RunningLine_list').marquee({
    startVisible: true,
    duplicated: true,
    delayBeforeStart: 0,
    duration: 30000,
  });
}

function setupAboutWorkSlider() {
  const swiper = new Swiper('.AboutWork_slider .swiper', {
    loop: true,
    rewind: true,
    speed: 400,
    slidesPerView: 'auto',
    mousewheel: true,
    centeredSlides: true,
    // direction: 'vertical',
    // loopFillGroupWithBlank: true,
    // freeMode: true,
    // spaceBetween: 100,
  });
}
