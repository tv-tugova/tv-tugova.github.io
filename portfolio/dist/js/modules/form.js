import '../plugins/jquery.validate.min.js';

// Validation Plugin
$('.contacts__form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2,
        }, 
        email: {
            required: true,
            email: true,
        },
        text: {
            required: true,
        },
        checkbox: {
            required: true,
        },
    },
    messages: {
        name: {
          required: 'Введите ваше имя',
          minlength: jQuery.validator.format('Введите не менее {0} символов!'),
        },
        email: {
          required: 'Введите вашу почту',
          email: 'Неправильно введен адрес почты',
        },
        text: {
          required: 'Введите текст',
        },
        checkbox: {
          required: '',
        },
      },
});

// Validation Submit Button
function disableBtn() {
    $('.btn_2').attr('disabled', 'disabled');
}
  
$('#name, #email, #text, #checkbox').on('keyup change', function () {
    const name = $('#name').val();
    const email = $('#email').val();
    const textarea = $('#text').val();
    const checkbox = $('#checkbox');
  
    if (
      name.length > 1 &&
      email.length != 0 &&
      textarea.length != 0 &&
      checkbox.is(':checked')
    ) {
      $('.btn_2').removeAttr('disabled');
    } else {
      disableBtn();
    }
});

// PHPMailer
$('.contacts__form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'mailer/smart.php',
        data: $(this).serialize(),
    }).done(function() {
      $('.contacts__form').find('input').val('');
      $('.contacts__form').trigger('reset');
      $('.overlay, #thanks').fadeIn('fast');
    });
    disableBtn();
    return false;
});