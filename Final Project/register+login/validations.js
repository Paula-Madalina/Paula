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

let validationState = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  confirmPassword: false,
  birthDate: false
};

function updateValidationState(field, isValid) {
  // Updates the validation state for a specific field
  validationState[field] = isValid;
}

// Function to check if all fields are valid
function isAllFieldsValid() {
  // If the mobile view is displayed, consider name inputs automatically validated
  if (isMobileView) {
        // Exclude the "fullName" field as it's specific to mobile devices
    return Object.entries(validationState)
      .filter(([field, _]) => field !== "fullName") // Exclude câmpul "fullName" deoarece este specific dispozitivelor mobile
      .every(([_, isValid]) => isValid === true);
  } else {
    // Otherwise, check all fields
    return Object.values(validationState).every(value => value === true);
  }
}


// FIRST NAME VALIDATION
export function validateFirstName(input, errorElement, regexLettersOnly) {
  if (input.value.trim() == "") {
    errorElement.textContent = "Min 2 characters";
    input.style.borderColor = "red";
    updateValidationState("firstName", false);
  } else if (input.value.trim().length < 2) {
    errorElement.textContent = "Min 2 characters";
    input.style.borderColor = "red";
    updateValidationState("firstName", false);
  } else if (!regexLettersOnly.test(input.value.trim())) {
    errorElement.textContent = "Letters only!";
    input.style.borderColor = "red";
    updateValidationState("firstName", false);
  } else {
    errorElement.textContent = "";
    input.style.borderColor = "rgb(0, 255, 68)";
    updateValidationState("firstName", true);
  }
}

// LAST NAME VALIDATION

export function validateLastName(input, errorElement, regexLettersOnly) {
  if (input.value.trim() == "") {
    errorElement.textContent = "Min 2 characters";
    input.style.borderColor = "red";
    updateValidationState("lastName", false);
  } else if (input.value.trim().length < 2) {
    errorElement.textContent = "Min 2 characters";
    input.style.borderColor = "red";
    updateValidationState("lastName", false);
  } else if (!regexLettersOnly.test(input.value.trim())) {
    errorElement.textContent = "Letters only!";
    input.style.borderColor = "red";
    updateValidationState("lastName", false);
  } else {
    errorElement.textContent = "";
    input.style.borderColor = "rgb(0, 255, 68)";
    updateValidationState("lastName", true);
  }
}



// EMAIL VALIDATION

export function validateEmail(input, errorElement, regexEmailFormat) {
  if (input.value.trim() == "") {
    errorElement.textContent = "Min 2 characters";
    input.style.borderColor = "red";
    updateValidationState("email", false);
  } else if (!regexEmailFormat.test(input.value.trim())) {
    errorElement.textContent = "Invalid email format";
    input.style.borderColor = "red";
    updateValidationState("email", false);
  } else {
    errorElement.textContent = "";
    input.style.borderColor = "rgb(0, 255, 68)";
    updateValidationState("email", true);
  }
}


// PASSWORD VALIDATION

export function validatePassword(input, errorElement, regexPasswordFormat) {
  if (input.value.trim() == "") {
    errorElement.textContent = "Min 2 characters";
    input.style.borderColor = "red";
    updateValidationState("password", false);
  } else if (!regexPasswordFormat.test(input.value.trim())) {
    errorElement.textContent = "Must include letters, numbers, and special characters";
    input.style.borderColor = "red";
    updateValidationState("password", false);
  } else if (input.value.trim().length < 6) {
    errorElement.textContent = "Too short";
    input.style.borderColor = "red";
    updateValidationState("password", false);
  } else {
    errorElement.textContent = "";
    input.style.borderColor = "rgb(0, 255, 68)";
    updateValidationState("password", true);
  }
}


// CONFIRM PASSWORD VALIDATION

export function validateConfirmPassword(input, errorElement) {
  let passwordValue = document.getElementById("passwordInput").value.trim();
  let confirmPasswordValue = input.value.trim();
  if (input.value.trim() == "") {
    errorElement.textContent = "Min 2 characters";
    input.style.borderColor = "red";
    updateValidationState("confirmPassword", false);
  } else if (confirmPasswordValue !== passwordValue) {
    errorElement.textContent = "Passwords don't match";
    input.style.borderColor = "red";
    updateValidationState("confirmPassword", false);
  } else {
    errorElement.textContent = "";
    input.style.borderColor = "rgb(0, 255, 68)";
    updateValidationState("confirmPassword", true);
  }
}

// BIRTH DATE VALIDATION

export function validateBirthDate(input, errorElement) {
  let birthDate = new Date(input.value);
  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (input.value.trim() == "") {
    input.style.borderColor = "red";
    errorElement.textContent = "Enter your date of birth";
    updateValidationState("birthDate", false);
  } else if (age < 18) {
    errorElement.textContent = "You must be at least 18 years old";
    input.style.borderColor = "red";
    updateValidationState("birthDate", false);
  } else {
    errorElement.textContent = "";
    input.style.borderColor = "rgb(0, 255, 68)";
    updateValidationState("birthDate", true);
  }
}



// Function to handle registration validation
export function registerValidation() {
  console.log(validationState);

  if (isAllFieldsValid()) {
    saveToLocalStorage();
    switchLogin.style.left = "4px";
    switchToRegister.style.right = "-520px";
    switchToLogin.className += " active__btn";
    switchRegister.className = "btn__header";

    let birthDateInput = document.querySelector("#date");
    console.log(birthDateInput);
  } else {
    toastr["error"]("Complete the fields!");

  }
}


// Add a new global variable to check if name inputs are displayed on mobile devices
let isMobileView = false;

// Exported variables
export let switchRegister = document.querySelector("#registerBtn");
export let switchLogin = document.querySelector("#login");
export let switchToRegister = document.querySelector("#register");
export let switchToLogin = document.querySelector("#loginBtn");

export let myVariable = "vfxcds";

// Event listeners
document.getElementById("registerBtn").addEventListener('click',registerPage);
document.getElementById("sign_up").addEventListener('click',registerPage);
document.getElementById("loginBtn").addEventListener('click',loginPage);
document.getElementById("login_btn").addEventListener('click',loginPage);

let birthDateInput = document.querySelector("#date");


// Function to handle navigation to login page
function loginPage() {
  switchLogin.style.left = "4px";
  switchToRegister.style.right = "-520px";
  switchToLogin.className +=" active__btn";
  switchRegister.className = "btn__header";

  switchLogin.style.opacity = 1;

}



// Function to handle navigation to registration page
function registerPage() {
  switchLogin.style.left = "-510px";
  switchToRegister.style.right = "0px";
  switchToLogin.className = "btn__header";
  switchRegister.className +=" active__btn";

  // switchLogin.style.opacity = 0;
  switchToRegister.style.ropacity = 1;
}


// Function to save user data to local storage
function saveToLocalStorage() {
  const formData = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
    birthDate: birthDateInput.value.trim()
  };

    // Check if there is already a user with the same email address
  let users = JSON.parse(localStorage.getItem("Users")) || [];
  let existingUser = users.find(user => user.email === formData.email);

  if (existingUser) {
    toastr["error"]("A user with this email already exists");

    updateValidationState("email", false);
    validateEmail();
  
  }

  // Add the new user to the list of users
  users.push(formData);

  // Update the list of users in local storage
  localStorage.setItem("Users", JSON.stringify(users));

}
