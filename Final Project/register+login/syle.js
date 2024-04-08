export function validateFirstName(input, errorElement, valid) {
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