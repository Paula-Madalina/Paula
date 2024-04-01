import { validateAllInputs, validateFirstNameValue, validateLastNameValue, validateEmailValue, validatePasswordValue, validateConfirmPasswordValue, validateBirthDateValue, saveUserToLocalStorage } from "./validations.js";

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

let firstNameInput = document.querySelector("#firstNameContainer");
let firstNameLabel = document.querySelector("#firstNameLabel");
let validateFirstNameInput = document.querySelector("#validateFirstNameInput");
let firstNameErrorMessage = document.querySelector("#firstNameErrorMessage")


let lastNameInput = document.querySelector("#lastNameContainer");
let lastNameLabel = document.querySelector("#lastNameLabel");
let validateLastNameInput = document.querySelector("#validateLastNameInput");


let emailInput = document.querySelector("#emailContainer");
let emailLabel = document.querySelector("#emailLabel");
let validateEmailInput = document.querySelector("#validateEmailInput");


let passwordInput = document.querySelector("#passwordContainer");
let passwordLabel = document.querySelector("#passwordLabel");
let validatePasswordInput = document.querySelector("#validatePasswordInput");


let confirmPasswordInput = document.querySelector("#confirmPasswordContainer");
let confirmPasswordLabel = document.querySelector("#confirmPasswordLabel");
let validateConfirmPasswordInput = document.querySelector("#validateConfirmPasswordInput");


let birthDateInput = document.querySelector("#birthDateContainer");
let birthDateLabel = document.querySelector("#birthDateLabel");
let birthDateContainer = document.querySelector("#validateBirthDateInput");

let nameLabel = document.querySelectorAll(".name__label");
let errorBorder = document.querySelectorAll(".border__color");

let errorMessage = document.querySelector("#errorMessageDiv");
errorMessage.classList.add("error__message");

let errorEmailMessage = document.querySelector("#errorEmailMessage");
errorEmailMessage.classList.add("error__message");

let errorPasswordMessage = document.querySelector("#errorPasswordMessage");
errorPasswordMessage.classList.add("error__message");


let regexLettersOnly = /^[a-zA-Z\s-]+$/;
let regexEmailFormat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let regexPasswordFormat = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/;


let registerButton = document.querySelector("#registerButton");
registerButton.addEventListener("click", registerFormData);


let valid = [];

function registerFormData() {
  valid = []; 
  validateAllInputs(firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput, birthDateInput, nameLabel, errorBorder, valid);
  validateFirstNameValue(firstNameInput, firstNameLabel, errorMessage, validateFirstNameInput, valid, regexLettersOnly);
  validateLastNameValue(lastNameInput, lastNameLabel, errorMessage, validateLastNameInput, valid, regexLettersOnly);
  validateEmailValue(regexEmailFormat, emailInput, emailLabel, errorEmailMessage, validateEmailInput, valid);
  validatePasswordValue(regexPasswordFormat, passwordLabel, passwordInput, errorPasswordMessage, validatePasswordInput, valid);
  validateConfirmPasswordValue(confirmPasswordInput, passwordInput, confirmPasswordLabel, validateConfirmPasswordInput, valid);
  validateBirthDateValue(birthDateInput, birthDateLabel, birthDateContainer, valid);

  if(valid.every(value => value)) {
    saveUserToLocalStorage(firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput, birthDateInput, emailLabel, errorEmailMessage, validateEmailInput, valid)  
  }

}



let togglePassword = document.getElementById("togglePassword");
togglePassword.addEventListener("click", function() {
  // Schimbați tipul de input între "password" și "text"
  if (confirmPasswordInput.type === "password") {
      confirmPasswordInput.type = "text";
      togglePassword.innerHTML = '<ion-icon name="eye-off"></ion-icon>'; // Schimbați iconița pentru a indica că parola este ascunsă
  } else {
      confirmPasswordInput.type = "password";
      togglePassword.innerHTML = '<ion-icon name="eye"></ion-icon>'; // Schimbați iconița pentru a indica că parola este afișată
  }
});
