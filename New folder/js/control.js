const controller = {};
controller.register = (data) => {


  if (data.firstName.trim() === "") {
    document.getElementById("input_name").innerText =
      "Please input first name";
  } else {
    document.getElementById("input_name").innerText = ""; 
  }

 

  if (data.email.trim() === "") {
    document.getElementById("input_mail").innerText =
      "Please input your email";
  } else {
    document.getElementById("input_mail").innerText = "";
  }

  if (data.password.trim() === "") {
    document.getElementById("input_pass").innerText =
      "Please input your password";
  } else {
    document.getElementById("input_pass").innerText = "";
  }
  if (data.confirmPassword.trim() === "") {
    document.getElementById("input_confirmPass").innerText =
      "Please input confirm password";
  } else if (data.confirmPassword.trim() !== data.password.trim()) {
    document.getElementById("input_confirmPass").innerText =
      "Password didn't match";
  } else {
    document.getElementById("input_confirmPass").innerText = "";
  }
}