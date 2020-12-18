$(document).ready(function () {
	$("a").on('click', function (event) {
			if (this.hash !== "") {
					event.preventDefault();
					var hash = this.hash;
					$('html, body').animate({
							scrollTop: $(hash).offset().top
					}, 800, function () {
							window.location.hash = hash;
					});
			}
	});
});


function othername() {
	var userName = document.getElementById("name").value;
	var userCompany = document.getElementById("company").value;
	var userPhoneNumber = document.getElementById("mobile-number").value;
	var userEmail = document.getElementById("email").value;
	var userMessage = document.getElementById("message").value;	
}

function disappear() {
	var email = document.getElementById('email').value;
	var placeholder = document.getElementById('a');
	if (email != '') {
		placeholder.style.display = 'none';
	}
	else {}
}