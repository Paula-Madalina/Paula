// validation for each input
export function validateAllInputs(firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput, birthDateInput, nameLabel, errorBorder, valid) {
  if (
    firstNameInput.value.trim() == "" || 
    lastNameInput.value.trim() == "" ||
    emailInput.value.trim() == "" ||
    passwordInput.value.trim() == "" ||
    confirmPasswordInput.value.trim() == "" || 
    birthDateInput.value.trim() == ""
  ) {
    toastr["error"]("Please complete all fields!", "ERROR");
    nameLabel.forEach(label => {
      label.style.color = 'red';
    });
    errorBorder.forEach(div => {
      div.style.borderColor = "red";
    });
    valid.push(false); // Adăugare la array-ul valid
  } else {
    nameLabel.forEach(label => {
      label.style.color = 'black';
    });
    errorBorder.forEach(div => {
      div.style.borderColor = "black";
    });
    valid.push(true); // Adăugare la array-ul valid
  }
}

// validation for FIRSTNAME 
export function validateFirstNameValue(firstNameInput, firstNameLabel, errorMessage, validateFirstNameInput, valid, regexLettersOnly) {
  if (firstNameInput.value.trim().length < 2) {
    firstNameLabel.style.color = "red";
    errorMessage.textContent = "Firstname and Lastname must contain min 2 letters each!";
    errorMessage.style.color = "red";
    validateFirstNameInput.style.borderColor = "red";
    return valid.push(false);
  } else if (!regexLettersOnly.test(firstNameInput.value.trim()))  {
    firstNameLabel.style.color = "red";
    errorMessage.textContent = "Letters Only!";
    errorMessage.style.color = "red";
    validateFirstNameInput.style.borderColor = "red";
    return valid.push(false);
  } else {
    firstNameLabel.style.color = "rgb(0, 255, 68)";
    errorMessage.textContent = "";
    validateFirstNameInput.style.borderColor = "rgb(0, 255, 68)";
    return valid.push(true);
  }
}


// validation for LASTNAME 
export function validateLastNameValue(lastNameInput, lastNameLabel, errorMessage, validateLastNameInput, valid, regexLettersOnly) {
  if(lastNameInput.value.trim().length < 2) {
    lastNameLabel.style.color = "red";
    errorMessage.textContent = "Name must contain min 2 letters each!";
    errorMessage.style.color = "red";
    validateLastNameInput.style.borderColor = "red";
    return valid.push(false);
  } else if(!regexLettersOnly.test(lastNameInput.value.trim())) {
    lastNameLabel.style.color = "red";
    errorMessage.textContent = "Letters Only!";
    errorMessage.style.color = "red";
    validateLastNameInput.style.borderColor = "red";
    return valid.push(false); 
  } else {
    lastNameLabel.style.color = "rgb(0, 255, 68)";
    errorMessage.textContent = "";
    validateLastNameInput.style.borderColor = "rgb(0, 255, 68)";
    return valid.push(true);
  }
}


export function validateEmailValue(regexEmailFormat, emailInput, emailLabel, errorEmailMessage, validateEmailInput, valid) {
  if(!regexEmailFormat.test(emailInput.value.trim())) {
    emailLabel.style.color = "red";
    errorEmailMessage.textContent = "Invalid Email Format";
    errorEmailMessage.style.color = "red";
    validateEmailInput.style.borderColor = "red";
    return valid.push(false);
  } else {
    emailLabel.style.color = "rgb(0, 255, 68)";
    errorEmailMessage.textContent = "";
    validateEmailInput.style.borderColor = "rgb(0, 255, 68)";
    return valid.push(true);
  }
}

export function validatePasswordValue(regexPasswordFormat, passwordLabel, passwordInput, errorPasswordMessage, validatePasswordInput, valid) {
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

export function validateConfirmPasswordValue(confirmPasswordInput, passwordInput, confirmPasswordLabel, validateConfirmPasswordInput, valid) {
    if(confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
    toastr["error"]("Passwords do not match ", "ERROR");
    confirmPasswordLabel.style.color = "red";
    validateConfirmPasswordInput.style.borderColor = "red";
    return valid.push(false);
  } else if(confirmPasswordInput.value.trim() == ""){
    console.log(confirmPasswordInput.value, passwordInput.value);
    toastr["error"]("Passwords do not match ", "ERROR");
    confirmPasswordLabel.style.color = "red";
    validateConfirmPasswordInput.style.borderColor = "red";
    return valid.push(false);
  } else {
    // console.log(confirmPasswordInput.value, passwordInput.value);
    confirmPasswordLabel.style.color = "rgb(0, 255, 68)";
    validateConfirmPasswordInput.style.borderColor = "rgb(0, 255, 68)";
    return valid.push(true);
  }
}

export function validateBirthDateValue(birthDateInput, birthDateLabel, birthDateContainer, valid) {
  if(birthDateInput.value.trim() !== "" ) {
    console.log(birthDateInput.value);
    birthDateLabel.style.color = "rgb(0, 255, 68)";
    birthDateContainer.style.borderColor = "rgb(0, 255, 68)";
    return valid.push(true);
  }
}

export function saveUserToLocalStorage(firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput, birthDateInput, emailLabel, errorEmailMessage, validateEmailInput, valid) {
  let userData = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
    confirmPassword: confirmPasswordInput.value.trim(),
    birthDate: birthDateInput.value.trim()
  }

  let users = JSON.parse(localStorage.getItem("Users")) || [];


  // Verificați dacă există deja un utilizator cu aceeași adresă de email
  let existingUser = users.find(user => user.email ===userData.email);

  if(existingUser) {
    alert("A user with this email already exists!");
    emailLabel.style.color = "red";
    errorEmailMessage.textContent = "Invalid Email";
    errorEmailMessage.style.color = "red";
    validateEmailInput.style.borderColor = "red";
    return valid.push(false);
  }
  users.push(userData);
  localStorage.setItem("Users", JSON.stringify(users));
  alert("User registered successfully");
  window.location.href = "../LOGIN/login.html";

}
