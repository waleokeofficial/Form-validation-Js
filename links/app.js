const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
	 e.preventDefault();

	 checkInputs();
})
function checkInputs(){
	// target the inputs
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const password1Value = password1.value.trim();
	const password2Value = password2.value.trim();

	if (usernameValue === ""){
		setErrorFor(username, "Username cannot be blank");
	}
	else if (usernameValue >= 0){
		setErrorFor(username, "Username cannot be a Number");
	}
	else {
		setSuccessFor(username);
	}

	// E-mail Check
	if (emailValue === ""){
		setErrorFor(email, "E-mail canot be blank");
	}
	else if (!validateEmail(emailValue)){
		setErrorFor(email, "E-mail is not valid");
	}
	else {
		setSuccessFor(email);
	}
	// Password1 check
	if (password1Value === ""){
		setErrorFor(password1, "Password cannot be empty");
	} 
	else {
		setSuccessFor(password1);
	}

	// Password2 check
	if (password2Value === ""){
		setErrorFor(password2, "Password cannot be empty");
	}
	else if (password2Value != password1Value){
		setErrorFor(password2, "Password does not match");
	}
	else {
		setSuccessFor(password2);
	}
}


function setErrorFor(input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText = message;
	formControl.className = "form-control error";
}
function setSuccessFor(input){
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}