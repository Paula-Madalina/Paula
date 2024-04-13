let validationState = {
  firstName: false,
  lastName: false,
  // fullName: false,
  email: false,
  password: false,
  confirmPassword: false,
  birthDate: false
};

function updateValidationState(field, isValid) {
  validationState[field] = isValid;
}

// Funcție pentru a verifica dacă toate câmpurile sunt validate
function isAllFieldsValid() {
  // Dacă este afișată vizualizarea pentru dispozitive mobile, consideră că inputurile de nume sunt validate automat
  if (isMobileView) {
    return Object.entries(validationState)
      .filter(([field, _]) => field !== "fullName") // Exclude câmpul "fullName" deoarece este specific dispozitivelor mobile
      .every(([_, isValid]) => isValid === true);
  } else {
    // Altfel, verifică toate câmpurile
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


// FULLNAME VALIDATION

// export function validateFullName(input, errorElement, regexLettersOnly) {
//   if (input.value.trim() == "") {
//     errorElement.textContent = "Minim 2 caractere";
//     input.style.borderColor = "red";
//     updateValidationState("fullName", false);
//   } else if (input.value.trim().length < 2) {
//     errorElement.textContent = "Minim 2 caractere";
//     input.style.borderColor = "red";
//     updateValidationState("fullName", false);
//   } else if (!regexLettersOnly.test(input.value.trim())) {
//     errorElement.textContent = "Doar litere!";
//     input.style.borderColor = "red";
//     updateValidationState("fullName", false);
//   } else {
//     errorElement.textContent = "";
//     input.style.borderColor = "rgb(0, 255, 68)";
//     updateValidationState("fullName", true);
//   }
// }



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



export function registerValidation() {
  console.log(validationState);

  if (isAllFieldsValid()) {
    alert("Ok");
  } else {
    alert("ATENȚIE! Unele câmpuri nu sunt completate corect.");
  }
}

// Adaugă o nouă variabilă globală pentru a verifica dacă sunt afișate inputurile de nume pe dispozitivele mobile
let isMobileView = false;

