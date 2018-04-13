// ===== Scroll to Top =====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return').fadeIn(500);
    } else {
        $('#return').fadeOut(500);
    }
});

$('#return').click(function() {
    $('body,html').animate({scrollTop : 0}, 500);
});

// ===== Email Form ======

const emailSubmit = document.querySelector('#email-submit');

emailSubmit.addEventListener('click', function (event) {
  const emailInput = document.querySelector('#email-form');
  const emailRegex = /.+@.+\..+/i;

  if (emailRegex.test(emailInput.value)) {
    emailInput.classList.remove('is-danger');
    $('#email-error').hide();
    $('#email-success').fadeIn();
    emailInput.value = '';
  } else {
    emailInput.classList.add('is-danger');
    $('#email-success').hide();
    $('#email-error').fadeIn();
  }
})
