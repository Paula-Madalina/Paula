// import { isValidEmail, test } from "./validations.js";

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
let lastNameInput = document.querySelector("#lastNameContainer");
let emailInput = document.querySelector("#emailContainer");
let passwordInput = document.querySelector("#passwordContainer");
let confirmPasswordInput = document.querySelector("#confirmPasswordContainer");
let birthDateInput = document.querySelector("#birthDateContainer");
let validateFirstName = document.querySelector("#validateFirstName");
let firstNameLabel = document.querySelector("#firstNameLabel");
let lastNameLabel = document.querySelector("#lastNameLabel");
let emailLabel = document.querySelector("#emailLabel");
let inputEmail = document.querySelector("#inputEmail");

let passwordLabel = document.querySelector("#passwordLabel");
let inputPassword = document.querySelector("#inputPassword");

let confirmPassword = document.querySelector("#confirmPassword");
let confirmPasswordLabel = document.querySelector("#confirmPasswordLabel");

let birthDateContainer = document.querySelector("#birthDateContainer");
let birthDateLabel = document.querySelector("#birthDateLabel");

let validateInputs = document.createElement("div");
validateInputs.classList.add("validate__inputs");
validateFirstName.appendChild(validateInputs);
validateInputs.textContent = "";

let validateLastName = document.querySelector("#validateLastName");
let errorMessage = document.createElement("div");
errorMessage.textContent = "";
validateLastName.appendChild(errorMessage);
let valid = [];
let registerButton = document.querySelector("#registerButton");
registerButton.addEventListener("click", registerFormData);
function registerFormData() {
  // test();
  valid = [];
  validateFirstNameInput();
  validateLastNameInput();
  validateEmailInput();
  validatePasswordInput();
  validateConfirmPassword();
  validateBirthDate();

  // if(valid.every(value => value)) {
  //     console.log("hthntfht");
  //     window.location.href = "index4.html";
  //   }
}


let regexLettersOnly = /^[a-zA-Z\s-]+$/;
function validateFirstNameInput() {
  if (firstNameInput.value.trim() == "") {
    toastr["error"]("FIRSTNAME: Can't be blank", "ERROR");
    firstNameLabel.style.color = "red";
    validateFirstName.style.borderColor = "red";
    return valid.push(false);
  } else if (firstNameInput.value.trim().length < 2) {
    toastr["error"]("FIRSTNAME: too short", "ERROR");
    firstNameLabel.style.color = "red";
    validateFirstName.style.borderColor = "red";
    return valid.push(false);
  } else if (!regexLettersOnly.test(firstNameInput.value.trim())) {
    toastr["error"]("FIRSTNAME: Only Letters", "ERROR");
    firstNameLabel.style.color = "red";
    validateFirstName.style.borderColor = "red";
    return valid.push(false);
  } else {
    firstNameLabel.style.color = "rgb(131, 190, 12)";
    validateFirstName.style.borderColor = "rgb(131, 190, 12)";
    return valid.push(true);
  }
}

function validateLastNameInput() {
  const lastNameInput = document.getElementById("lastNameContainer");
  const lastNameValue = lastNameInput.value.trim();
  
  if (lastNameValue == "") {
    lastNameInput.placeholder = "LASTNAME: Can't be blank";
    lastNameInput.classList.add("placeholder-error");
  } else if (lastNameValue.length < 2) {
    lastNameInput.placeholder = "LASTNAME: too short";
    lastNameInput.classList.add("placeholder-error");
  } else {
    lastNameInput.placeholder = ""; // Elimina mesajul de eroare
    lastNameInput.classList.remove("placeholder-error");
  }
}


function validateEmailInput() {
  if (emailInput.value.trim() == "") {
    toastr["error"]("EMAIL: Can't be blank", "ERROR");
    emailLabel.style.color = "red";
    inputEmail.style.borderColor = "red";
    return valid.push(false);
  }
  if (!isValidEmail(emailInput.value.trim())) {
    toastr["error"]("EMAIL: wrong format", "ERROR");
    emailLabel.style.color = "red";
    inputEmail.style.borderColor = "red";
    return valid.push(false);
  } else {
    emailLabel.style.color = "rgb(131, 190, 12)";
    inputEmail.style.borderColor = "rgb(131, 190, 12)";
    return valid.push(true);
  }
}

let regexPasswordFormat = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/;
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return emailRegex.test(email);
}

function validatePasswordInput() {
  if (passwordInput.value.trim() == "") {
    toastr["error"]("PASSWORD: can't be blank", "ERROR");
    passwordLabel.style.color = "red";
    inputPassword.style.borderColor = "red";
    return valid.push(false);
  } else if (!regexPasswordFormat.test(passwordInput.value.trim())) {
    toastr["error"](
      "PASSWORD must contain:letters, numbers, special characters ",
      "ERROR"
    );
    passwordLabel.style.color = "red";
    inputPassword.style.borderColor = "red";
    return valid.push(false);
  } else if (passwordInput.value.trim().length < 6) {
    toastr["error"]("PASSWORD: at least 6 characters ", "ERROR");
    passwordLabel.style.color = "red";
    inputPassword.style.borderColor = "red";
    return valid.push(false);
  } else {
    passwordLabel.style.color = "rgb(131, 190, 12)";
    inputPassword.style.borderColor = "rgb(131, 190, 12)";
    return valid.push(true);
  }
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value.trim() == "") {
    toastr["error"]("CONFIRM PASSWORD: can't be blank ", "ERROR");
    confirmPasswordLabel.style.color = "red";
    confirmPassword.style.borderColor = "red";
    return valid.push(false);
  } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
    toastr["error"]("Passwords do not match ", "ERROR");
    confirmPasswordLabel.style.color = "red";
    confirmPassword.style.borderColor = "red";
  } else {
    confirmPasswordLabel.style.color = "rgb(131, 190, 12)";
    confirmPassword.style.borderColor = "rgb(131, 190, 12)";
  }
}

function validateBirthDate() {
  console.log(birthDateInput.value);
  if (birthDateInput.value == "" || birthDateInput.value==undefined) {
    toastr["error"]("BIRTH DATE: Can't be blank", "ERROR");
    birthDateLabel.style.color = "red";
    birthDateContainer.style.borderColor = "red";
  } else {
    birthDateLabel.style.color = "rgb(131, 190, 12)";
    birthDateContainer.style.borderColor = "rgb(131, 190, 12)";

  }
}
