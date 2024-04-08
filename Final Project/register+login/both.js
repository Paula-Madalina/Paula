// import { validateFirstName } from "./style.js";


let b = document.querySelector("#registerBtn");
let x = document.querySelector("#login");
let y = document.querySelector("#register");
let a = document.querySelector("#loginBtn");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className +=" active__btn";
    b.className = "btn__header";

    x.style.opacity = 1;
    y.style.ropacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn__header";
    b.className +=" active__btn";

    x.style.opacity = 0;
    y.style.ropacity = 1;
}

function myMenuFunction() {
    var i = document.querySelector("#navMenu");

    if(i.className ==="nav__menu") {
        i.className += " responsive";
    } else {
        i.className = "nav__menu"
    }
}








// ---------------------------FORM VALIDATIONS------------------//


let firstNameInput = document.querySelector("#firstNameInput");
let firstnameError = document.querySelector("#firstnameError");
let regexLettersOnly = /^[a-zA-Z\s-]+$/;
let valid = [];

let lastNameInput = document.querySelector("#lastNameInput");
let lastNameError = document.querySelector("#lastnameInput");

let regexEmailFormat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let emailInput = document.querySelector("#emailInput");
let emailError = document.querySelector("#emailError");

let regexPasswordFormat = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/;
let passwordInput = document.querySelector("#passwordInput");
let passwordError = document.querySelector("#passwordError");

function validateFirstName(input, errorElement, valid) {
    if (input.value.trim().length < 2) {
        errorElement.textContent = "Min 2 letters";
        input.style.borderColor = "red";
        return valid.push(false);
    } else if (!regexLettersOnly.test(input.value.trim()))  {
        errorElement.textContent = "Letters Only!";
        input.style.borderColor = "red";
        return valid.push(false);
    } else {
        errorElement.textContent = "";
        input.style.borderColor = "rgb(0, 255, 68)";
        return valid.push(true);
    }
}


function validateLastName(input, errorElement, valid) {
    if(input.value.trim().length < 2) {
        errorElement.textContent = "Min 2 letters!";
        input.style.borderColor = "red";
        return valid.push(false);
      } else if(!regexLettersOnly.test(input.value.trim())) {
        errorElement.textContent = "Letters Only!";
        input.style.borderColor = "red";
        return valid.push(false); 
      } else {
        errorElement.textContent = "";
        input.style.borderColor = "rgb(0, 255, 68)";
        return valid.push(true);
      }
}

validate();

function validate() {
    firstNameInput.addEventListener("keyup", () => { validateFirstName(firstNameInput, firstnameError, valid) });
    lastNameInput.addEventListener("keyup", () => { validateLastName(lastNameInput, lastNameError, valid) });
    emailInput.addEventListener("keyup", () => { validateEmail(emailInput, emailError, valid) });
    passwordInput.addEventListener("keyup", () => { validateEmail(emailInput, emailError, valid) });

}

function validateEmail(input, errorElement, valid) {
    if(!regexEmailFormat.test(input.value.trim())) {
        errorElement.textContent = "Invalid Email Format";
        input.style.borderColor = "red";
      return valid.push(false);
    } else {
        errorElement.textContent = "";
      input.style.borderColor = "rgb(0, 255, 68)";
      return valid.push(true);
    }
  }

  function validatePasswordValue(regexPasswordFormat, passwordLabel, passwordInput, errorPasswordMessage, validatePasswordInput, valid) {
    if(!regexPasswordFormat.test(passwordInput.value.trim())) {
      passwordLabel.style.color = "red";
      errorPasswordMessage.textContent = "Need: letters, numbers, special characters";
      errorPasswordMessage.style.color = "red";
      validatePasswordInput.style.borderColor = "red";
      return valid.push(false);
    } else if (passwordInput.value.trim().length < 6) {
      passwordLabel.style.color = "red";
      errorPasswordMessage.textContent = "Password too short!";
      errorPasswordMessage.style.color = "red";
      validatePasswordInput.style.borderColor = "red";
      return valid.push(false);
    } else {
      passwordLabel.style.color = "rgb(0, 255, 68)";
      errorPasswordMessage.textContent = "";
      validatePasswordInput.style.borderColor = "rgb(0, 255, 68)";
      return valid.push(true);
    }
  }