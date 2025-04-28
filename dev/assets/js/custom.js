$(document).ready(function () {
   $('select').niceSelect();
   $('[type=tel]').mask('+00 (000) 000-00-00');
   $('[data-index]').mask('00000');

   $('[data-calendar]').wrap('<div class="calendar-container"></div>');
   $('[data-calendar]').datepicker({
      showOn: 'button',
      buttonImage: 'assets/img/calendar-icon.svg',
      buttonImageOnly: true,
   });
})

             // Бургер-меню
const btnburger = document.querySelector('.burger');
const mobileContainer = document.querySelector('.mobile-container');
const toggleMobileMenu = () => {
  mobileContainer.classList.toggle('show');
  btnburger.classList.toggle('active');
};
btnburger.addEventListener('click', toggleMobileMenu);