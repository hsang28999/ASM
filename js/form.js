function validateName(){
	var user = document.getElementById("username");
	var msgUser = document.getElementById("msgUser");
	
	if (username.value.length == 0){
		msgUser.style.color = "red";
		msgUser.innerHTML = "Vui lòng nhập tên";
	}
	else if (username.value.length <4) {
		msgUser.style.color = "red";
		msgUser.innerHTML = "Bạn chưa nhập đủ ký tự";
	}
	else {
		msgUser.style.color = "green";
		msgUser.innerHTML = "Tên hợp lệ";
	}
}
function validatePass(){
	var pass = document.getElementById("password");
	var msgPass = document.getElementById("msgPass");
	
	if (pass.value.length == 0){
		msgPass.style.color = "red";
		msgPass.innerHTML = "Vui lòng nhập mật khẩu";
	}
	else if (pass.value.length <7) {
		msgPass.style.color = "red";
		msgPass.innerHTML = "Bạn chưa nhập đủ ký tự";
	}
	else {
		msgPass.style.color = "green";
		msgPass.innerHTML = "Mật khẩu hợp lệ";
	}

	var repass = document.getElementById("confirmPassword");
	var msgRePass = document.getElementById("msgRePass");

	console.log("pass: " + pass.value);
	console.log("Repass: " + repass.value);
	if(repass.value == pass.value){
				msgRePass.style.color = "green";
		msgRePass.innerHTML = "Hợp lệ";
	}
	else{
		msgRePass.style.color = "red";
		msgRePass.innerHTML = "Mật khẩu chưa khớp";
	}
	
}
function validateEmail(){
	var email = document.getElementById("email");
	var msgEmail = document.getElementById("msgEmail");
	if (email.value.length == 0){
		msgEmail.style.color = "red";
		msgEmail.innerHTML = "Vui lòng nhập email";
	}
	else if (email.value.length <3) {
		msgEmail.style.color = "red";
		msgEmail.innerHTML = "Bạn chưa nhập đủ ký tự";
	}
	else {
		msgEmail.style.color = "green";
		msgEmail.innerHTML = "Email hợp lệ";
	}
}
document.getElementById("username").onkeyup = function(){
	validateName();
};
document.getElementById("password").onkeyup = function(){
	validatePass();
};

document.getElementById("confirmPassword").onkeyup = function(){
	validatePass();
};

document.getElementById("email").onkeyup = function(){
	validateEmail();
};
