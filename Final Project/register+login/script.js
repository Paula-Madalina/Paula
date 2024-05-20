
import { validateFirstName, validateLastName, validateEmail, validatePassword, validateConfirmPassword, validateBirthDate, registerValidation } from "./validations.js";
import { myVariable } from './validations.js';


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

console.log(myVariable);

$(document).ready(function() {
// Attach click event to the icon
$('#calendar-icon').click(function() {
        $('#date').datepicker('show'); /// Open the calendar associated with the date input

    });
    
// Initialize the datepicker
$('#date').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+0", // From now until 100 years ago

    });
   
});

document.getElementById("burgerMenu").addEventListener('click',burgerMenu);


function burgerMenu() {
    var burgerMenu = document.querySelector("#navMenu");

    if(burgerMenu.className ==="nav__menu") {
        burgerMenu.className += " responsive";
    } else {
        burgerMenu.className = "nav__menu"
    }
}








// ---------------------------FORM VALIDATIONS------------------//

// FIRST NAME DOM

let firstNameInput = document.querySelector("#firstNameInput");
let firstnameError = document.querySelector("#firstnameError");


// LAST NAME DOM

let lastNameInput = document.querySelector("#lastNameInput");
let lastNameError = document.querySelector("#lastNameError");


// FULL NAME DOM

let fullNameInput = document.querySelector("#fullNameInput");
let fullNameError = document.querySelector("#fullNameError");

// EMAIL DOM

let emailInput = document.querySelector("#emailInput");
let emailError = document.querySelector("#emailError");


// PASSWORD DOM

let passwordInput = document.querySelector("#passwordInput");
let passwordError = document.querySelector("#passwordError");


// CONFIRM PASSWORD DOM

let confirmPasswordInput = document.querySelector("#confirmPasswordInput");
let confirmPasswordError = document.querySelector("#confirmPasswordError");


// BIRTH DATE DOM

let birthDateInput = document.querySelector("#date");
let birthDateError = document.querySelector("#BirthDateError");


// REGEX 
let regexLettersOnly = /^[a-zA-Z\s-]+$/;
let regexEmailFormat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let regexPasswordFormat = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/;

// VALIDATION
let valid = [];




validate();
function validate() {
    valid = [];
    firstNameInput.addEventListener("keyup", () => { validateFirstName(firstNameInput, firstnameError, regexLettersOnly, valid) });
    lastNameInput.addEventListener("keyup", () => { validateLastName(lastNameInput, lastNameError,regexLettersOnly, valid) });
    emailInput.addEventListener("keyup", () => { validateEmail(emailInput, emailError,regexEmailFormat, valid) });
    passwordInput.addEventListener("keyup", () => { validatePassword(passwordInput, passwordError,regexPasswordFormat, valid) });
    confirmPasswordInput.addEventListener("keyup", () => { validateConfirmPassword(confirmPasswordInput, confirmPasswordError, valid) });
    $('#date').on("change",()=>{validateBirthDate(birthDateInput,birthDateError)});
    document.getElementById("registerForm").addEventListener('click', () => { registerValidation(valid)});

}
rememberUser();
function rememberUser() {
// Check if the "Remember Me" checkbox is checked for the login form
var rememberLogin = document.getElementById("login__check").checked;

// Check if the "Remember Me" checkbox is checked for the registration form
var rememberRegister = document.getElementById("register__check").checked;

// If the "Remember Me" checkbox is checked in either form, save the user data to local storage
if (rememberLogin || rememberRegister) {
        var userData = {};

// For the login form
if (rememberLogin) {
            var emailLogin = document.getElementById("emailInputLogin").value;
            userData.emailLogin = emailLogin;
        }

// For the registration form
if (rememberRegister) {
            var emailRegister = document.getElementById("emailInput").value;
            userData.emailRegister = emailRegister;
        }

// Save the user data to local storage under the key "userData"
localStorage.setItem("userData", JSON.stringify(userData));
        console.log(userData)
    } else {;
// If neither "Remember Me" checkbox is checked, remove previously saved data from local storage (if any)
localStorage.removeItem("userData");
    }
}
