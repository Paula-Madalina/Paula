import { validateEmailLogin } from './validationLogin.js';


let emailInputLogin = document.querySelector("#emailInputLogin");
let emailInputLoginError = document.querySelector("#emailInputLoginError");
let passwordInputLogin = document.querySelector("#passwordInputLogin");
let passwordInputLoginError = document.querySelector("#passwordInputLoginError");

let emailLoginValue = emailInputLogin;
let passwordLoginValue = passwordInputLogin;

let loginBtn = document.querySelector("#loginBtn2");

loginBtn.addEventListener("click",()=>{validateEmailLogin(emailLoginValue, passwordLoginValue)} );

