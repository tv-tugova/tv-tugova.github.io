// Libs
import './libs/jquery-3.6.1.min.js';

// Modules
import './modules/background.js';
import './modules/menu.js';
import './modules/form.js';

// Modal
$('.modal__close').on('click', function () {
    $('.overlay, #thanks').fadeOut('fast');
  });

