toastr.options = {
  "closeButton": false,
  "debug": true,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


export function validateEmailLogin(email,password) {
  let users = JSON.parse(localStorage.getItem("Users")) || [];

  let userFound = users.find(user => user.email === email.value && user.password === password.value);

  if (userFound) {
    console.log(userFound)
      toastr["success"]("Login successful");

      
      localStorage.setItem("currentUserEmail", email.value);


      setTimeout(function() {
        window.location.href = "../HOMEPAGE/homePage.html";
    }, 2000);

  } else {
      toastr["error"]("Invalid email or password. Please try again.");

  }
}
