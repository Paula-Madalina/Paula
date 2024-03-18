let cardNameInput = document.querySelector("#cardHolderName");  
let cardNumber = document.querySelector("#cardNumber");
let selectMonth = document.getElementById("expiryMonth").value;
let selectYear = document.getElementById("expiryYear").value;
let cvcInput = document.querySelector("#cvcNumber").value;

let errorDiv = document.querySelector("#validateName");
let errorParagraph = document.createElement("p");
errorDiv.appendChild(errorParagraph)


let regexName = /^[a-zA-Z\s-]+$/;
let regexNumber = /^[0-9\s]+$/;
let regexCvc = /^[0-9]+$/;

function confirmData() {



    // Apelează funcțiile de validare pentru toate câmpurile
    validateCardHolderName();
    validateCardNumber();
    validateCVC();
    validateExpiryDate();

    displayCardInformation();
  
    // Verifică starea de validare pentru toate câmpurile
    // if (
    //  gbdfg
    // ) {
    //   // Toate câmpurile sunt validate cu succes, afișează mesajul "Thank You"
    //   document.getElementById("userForm").style.display = "none";
    //   document.getElementById("thankYouMessage").style.display = "block";
  
  
      
    // }
  }

//   function validateCardHolderName() {
//     let valid = true; 
//     if(cardNameInput.value.trim() == "") {
//       errorParagraph.textContent = "Acest camp este obligatoriu";
//       errorParagraph.style.color = "red";
//       cardNameInput.classList.remove("success-border");
//       valid = false;
//     } else if(cardNameInput.value.length <= 6) {
//         errorParagraph.textContent = "Numele trebuie să aibă mai mult de 7 caractere.";
//         errorParagraph.style.color = "red";
//         cardNameInput.classList.remove("success-border");
//         valid = false;
//     } else if(!regexName.test(cardNameInput.value)) {
//         errorParagraph.textContent = "Numele nu trebuie să conțină cifre sau caractere speciale.";
//         errorParagraph.style.color = "red";
//         cardNameInput.classList.add("error-border");
//         valid = false;
//     }else if (cardNameInput.value.split(' ').length < 2) {
//       errorParagraph.textContent = "Introduceți cel puțin un prenume și un nume de familie.";
//       errorParagraph.style.color = "red";
//       cardNameInput.classList.add("error-border");
//       valid = false;
//   } else {
//     // Dacă nu există erori, adaugă o clasă pentru border verde
//     errorParagraph.textContent = "Numele este valid.";
//     errorParagraph.style.color = "green";
//     cardNameInput.classList.add("success-border");

//   }
// }

function validateCardNumber() {
  let valid = true;
  // Eliminăm spațiile din numărul cardului pentru a număra doar cifrele
  let cardNumberValue = cardNumber.value.replace(/\s/g, "");

  // Rearanjează cifrele în grupuri de câte 4
  let formattedNumber = cardNumberValue.replace(/(\d{4})/g, '$1 ');

  // Actualizează valoarea input-ului
  cardNumber.value = formattedNumber.trim();

  if (cardNumberValue.trim() === "") {
    errorParagraph.textContent = "Acest câmp este obligatoriu.";
    errorParagraph.style.color = "red";
    cardNumber.classList.remove("success-border");
    valid = false;
  } else {
    // Dacă nu există erori, adaugă o clasă pentru border verde
    errorParagraph.textContent = "Numărul cardului este valid.";
    errorParagraph.style.color = "green";
    cardNumber.classList.add("success-border");
  }
}


  