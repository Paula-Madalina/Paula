const logregBox = document.querySelector(".logreg__box");
const loginLink = document.querySelector(".login__link");
const registerLink = document.querySelector(".register__link");

registerLink.addEventListener("click", () => {
    logregBox.classList.add("active");
});

loginLink.addEventListener("click", () => {
    logregBox.classList.remove("active");
});



let nameInputRegister = document.querySelector("#nameInputRegister");
let nameLabelRegister = document.querySelector("#nameLabelRegister");

let emailInputRegister = document.querySelector("#emailInputRegister");
let emailLabelRegister = document.querySelector("#emailLabelRegister");

let passwordInputRegister = document.querySelector("#passwordInputRegister");
let passwordLabelRegister = document.querySelector("#passwordLabelRegister");

let confirmPasswordInputRegister = document.querySelector("#confirmPasswordInputRegister");
let confirmPasswordLabelRegister = document.querySelector("#confirmPasswordLabelRegister");

let birthDateInputRegister = document.querySelector("#birthDateInputRegister");
let birthDateLabelRegister = document.querySelector("#birthDateLabelRegister");


function registerBtn() {
    // if(nameInputRegister.value.trim()=="" || emailInputRegister.value.trim()=="" || passwordInputRegister.value.trim()=="" || confirmpasswordInputRegister.value.trim()=="" || birthDateInputRegister.value.trim()=="") {
    //     alert("Please fill in all fields.");
    // nameLabelRegister.style.color = "red";
    // nameInputRegister.value = ""; // Șterge valoarea existentă din input
    // nameInputRegister.style.color = "red"; // Stilizează textul cu roșu
    // }



    if(nameInputRegister.value.trim()=="" || emailInputRegister.value.trim()=="" || passwordInputRegister.value.trim()=="" || confirmpasswordInputRegister.value.trim()=="" || birthDateInputRegister.value.trim()=="") {
        alert("Please fill in all fields.");
   
        nameInputRegister.value = "Can't be blank"; // Setează valoarea "Can't be blank" în input
        nameInputRegister.style.color = "red"; // Stilizează textul cu roșu
    
        // Adaugă un eveniment pentru a șterge valoarea "Can't be blank" când utilizatorul face clic în input
        nameInputRegister.addEventListener("click", function() {
            if (nameInputRegister.value == "Can't be blank") {
                nameInputRegister.value = "";
                nameInputRegister.style.color = "black"; // Revenire la culoarea textului implicită
            }
        }, { once: true }); //oar o dată



    emailInputRegister.value = "Can't be blank"; // Setează valoarea "Can't be blank" în input
    emailInputRegister.style.color = "red"; // Stilizează textul cu roșu

    // Adaugă un eveniment pentru a șterge valoarea "Can't be blank" când utilizatorul face clic în input
    emailInputRegister.addEventListener("click", function() {
        if (emailInputRegister.value == "Can't be blank") {
            emailInputRegister.value = "";
            emailInputRegister.style.color = "black"; // Revenire la culoarea textului implicită
        }
    }, { once: true }); //



    passwordLabelRegister.style.color = "red"; // Stilizează textul cu roșu
    confirmPasswordLabelRegister.style.color = "red"; // Stilizează textul cu roșu

    birthDateLabelRegister.style.color = "red";
    birthDateInputRegister.value = "Can't be blank"; // Setează valoarea "Can't be blank" în input
    birthDateInputRegister.style.color = "red"; // Stilizează textul cu roșu

    // Adaugă un eveniment pentru a șterge valoarea "Can't be blank" când utilizatorul face clic în input
    birthDateInputRegister.addEventListener("click", function() {
        if (birthDateInputRegister.value == "Can't be blank") {
            birthDateInputRegister.value = "";
            birthDateInputRegister.style.color = "black"; // Revenire la culoarea textului implicită
        }
    }, { once: true }); //
}

validateNameInputRegister();

}


function validateNameInputRegister() {
    if(nameInputRegister.value.trim().length < 2) {
        alert("gdg")
    }
}