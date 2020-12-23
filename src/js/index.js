function getValues() {
	var userName = document.getElementById("name").value;
	var userCompany = document.getElementById("company").value;
	var userPhoneNumber = document.getElementById("mobile-number").value;
	var userEmail = document.getElementById("email").value;
	var userMessage = document.getElementById("message").value;	
}

function disappear() {
	var email = document.getElementById('email').value;
	var placeholder = document.getElementById('holderReq');
	if (email != " ") {
		placeholder.style.display = 'none';
	}
	else {}
}

// $('#form')
//     .ajaxForm({
//         url : 'index.html', // or whatever
//         dataType : 'submit',
//         success : function (response) {
//             alert("The server says: " + response);
//         }
//     })
// 	;

function qwe() {
	window.location.replace('https://www.youtube.com/watch?v=CkLSapxVyGQ');
}
// function sendForm() {
// 	axios.post(`/api/newsletter/signup`, { email: this.email }).then(res => {
// 		if (res.status === 200) {
// 			this.success = true;
// 		}
// 	});
// },
