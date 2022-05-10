const slider = document.querySelector('.swiper-container');
let sliderLinkMobile;

function mobileSlider() {
  //Инициализация слайдера на мобилках
  if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    sliderLinkMobile = new Swiper('.main__swiper-container', {

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      loop: true,
      spaceBetween: 16,
      slidesPerView: 'auto',
      speed: 500,
    });
    //устанавливаем атрибут data-mobile true
    slider.dataset.mobile = 'true';
  }
  //отключение слайдера на планшетах и ПК
  if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-initialized')) {
      sliderLinkMobile.destroy();
    }
  }
}

mobileSlider();
//Добавляем прослушиватель при изменении размера окна
window.addEventListener('resize', () => {
  mobileSlider()
});

//Настраиваем работу кнопок "Скрыть" и "Показать все"
const buttonHidden = document.querySelector('.button-show__btn');

buttonHidden.addEventListener('click', function () {
  const hiddenLink = document.querySelector('.swiper-container__swiper-wrapper');
  const buttonArrow = document.querySelector('.button-show__arrow');
  const classHiddenLink = 'swiper-container__swiper-wrapper--hidden';
  const transformArrow = 'button-show__close';
  const buttonText = document.querySelector('.button-show__text');
  
  if (hiddenLink.classList.contains(classHiddenLink)) {
    hiddenLink.classList.remove(classHiddenLink);
    buttonArrow.classList.add(transformArrow);
    buttonText.textContent = 'Скрыть';
  } else {
    hiddenLink.classList.add(classHiddenLink);
    buttonArrow.classList.remove(transformArrow);
    buttonText.textContent = 'Показать все';
  }
});
 