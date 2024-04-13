
import { validateFirstName, validateLastName, validateEmail, validatePassword, validateConfirmPassword, validateBirthDate, validateFullName, registerValidation } from "./validations.js";


document.getElementById("registerBtn").addEventListener('click',registerPage);
document.getElementById("sign_up").addEventListener('click',registerPage);
document.getElementById("loginBtn").addEventListener('click',loginPage);
document.getElementById("login_btn").addEventListener('click',loginPage);
document.getElementById("burgerMenu").addEventListener('click',burgerMenu);

$(document).ready(function() {
    // Atașează evenimentul de click pe iconiță
    $('#calendar-icon').click(function() {
        $('#date').datepicker('show'); // Deschide calendarul asociat input-ului de tip date
    });
    
    // Initializează datepicker-ul
    $('#date').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+0", // de la acum până cu 100 de ani în urmă
    });
   
});

let switchRegister = document.querySelector("#registerBtn");
let switchLogin = document.querySelector("#login");
let switchToRegister = document.querySelector("#register");
let switchToLogin = document.querySelector("#loginBtn");

function loginPage() {
    switchLogin.style.left = "4px";
    switchToRegister.style.right = "-520px";
    switchToLogin.className +=" active__btn";
    switchRegister.className = "btn__header";

    switchLogin.style.opacity = 1;
    switchToRegister.style.ropacity = 0;
    let birthDateInput = document.querySelector("#date");
    console.log(birthDateInput);
    // birthDateInput.addEventListener("change", test);
}




function registerPage() {
    switchLogin.style.left = "-510px";
    switchToRegister.style.right = "0px";
    switchToLogin.className = "btn__header";
    switchRegister.className +=" active__btn";

    switchLogin.style.opacity = 0;
    switchToRegister.style.ropacity = 1;
}

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
    fullNameInput.addEventListener("keyup", () => { validateFullName(fullNameInput, fullNameError, regexLettersOnly, valid)})
    $('#date').on("change",()=>{validateBirthDate(birthDateInput,birthDateError)});
    document.getElementById("registerForm").addEventListener('click', () => { registerValidation(valid)});

}

