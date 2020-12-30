function getValues() {
  var userName = document.getElementById('name').value;
  var userCompany = document.getElementById('company').value;
  var userPhoneNumber = document.getElementById('mobile-number').value;
  var userEmail = document.getElementById('email').value;
  var userMessage = document.getElementById('message').value;
}

$(document).ready(function () {
  $('.input-placeholder input').on('blur input', function () {
    if ($(this).val() != '') {
      $(this).next('.placeholder').hide();
    } else {
      $(this).next('.placeholder').show();
    }
  });
});

$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    var formValues = $(this).serialize();

    $.ajax({
      type: 'POST',
      url: 'https://tecra.space/api/spacewalkers/training',
      crossDomain: true,
      data: formValues,
      dataType: 'json',
      success: function (responseData, textStatus, jqXHR) {
        console.log(responseData);
        swal
          .fire({
            title: 'Formularz wysłany',
            text:
              'Zgłoszenie zostało przyjęte - proszę oczekiwać kontaktu z naszej strony.',
            icon: 'success',
            // confirmButtonText:
            //   '<a style="text-decoration: none; color: white;" href="https://spacewalkersgames.com/">OK</a>',
          })
          .then(function () {
            location.reload();
          });
      },
      error: function (responseData, textStatus, errorThrown) {
        // alert('POST failed.');
        swal
          .fire({
            title: 'Formularz wysłany',
            text:
              'Zgłoszenie zostało przyjęte - proszę oczekiwać kontaktu z naszej strony.',
            icon: 'success',
            // confirmButtonText:
            //   '<a style="text-decoration: none; color: white;" href="https://spacewalkersgames.com/">OK</a>',
          })
          .then(function () {
            location.reload();
          });
      },
    });
  });
});
