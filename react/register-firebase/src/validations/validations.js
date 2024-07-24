const EMAIL_REGEX = new RegExp(/\S+@\S+\.\S+/);
// const NAMES_REGEX = new RegExp(/^[^\d\s]+$/);
const PASSWORD_REGEX = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/);
// const MIN_AGE = 18;
// const MAX_AGE = 100;




// Validare pentru câmpul de email
export const validateEmail = (email) => {
    return EMAIL_REGEX.test(email) ? '' : 'Invalid email format';
  };
  
  // Validare pentru câmpul de parolă
  export const validatePassword = (password) => {
    return PASSWORD_REGEX.test(password) ? '' :  'include numbers, letters and special characters';
  };
  
  // Validare pentru confirmarea parolei
  export const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword ? '' : 'Passwords do not match';
  };
  
  // Validare pentru câmpurile de text
  export const validateTextField = (value, fieldName) => {
    return value.trim() === '' ? `${fieldName} is required` : '';
  };
  