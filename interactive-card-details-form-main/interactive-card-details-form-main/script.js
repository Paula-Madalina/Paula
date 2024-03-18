// CHECK IF THE FIELDS ARE COMPLETED CORRECTLY

function confirmData() {
let cardNameInput = document.querySelector("#cardHolderName").value;   
let selectMonth = document.getElementById("expiryMonth").value;
let selectYear = document.getElementById("expiryYear").value;
let cardNumberInput = document.querySelector("#cardNumber").value;
let cvcInput = document.querySelector("#cvcNumber").value;

let nameHintMessage = document.getElementById("validateName");
let cardNumberHintMessage = document.getElementById("validateNumber");
let cvcHintMessage = document.getElementById("validateCvc");
let expDateHintMessage = document.getElementById("validateExpiryDate");



let nameRegex = /^[a-zA-Z\s-]+$/;
let regexNumber = /^[0-9\s]+$/;
let regexCvc = /^[0-9]+$/;




let formData = {
  cardNameInput: {
    type: "name" ,
    inputValue: cardNameInput,
    hintMsg: nameHintMessage,
    valid: false
  },
  cardNumberInput: {
    type:"number" ,
    inputValue: cardNumberInput,
    hintMsg: cardNumberHintMessage,
    valid: false
  },
  selectMonth: {
    type: "date" ,
    inputValue: selectMonth ,
    hintMsg: expDateHintMessage,
    valid: false
  },
  selectYear: {
    type: "date" ,
    inputValue: selectYear,
    hintMsg: expDateHintMessage,
    valid: false
  },
  cvcInput: {
    type: "number" ,
    inputValue: cvcInput,
    hintMsg: cvcHintMessage,
    valid: false
  }
}


validateForm(formData.cardNameInput, nameRegex)










// } else {
//   cvcErrorMessage.textContent = "Wrong format. Numbers only";
//   cvcErrorMessage.style.color = "red";


// }



// // CHECK IF ALL THE FIELDS ARE COMPLETED
// if (cardNameInput.trim() === "" || cardNumberInput.trim() === "" || cvcInput.trim() === "") {
//   alert("Please complete all fields.");
//   return;
// }




// } else {
//   expDateErrorMessage.textContent = "Exp Date valid";
//   expDateErrorMessage.style.color = "green"

// }

//   // CHECK IF CARD NUMBER CONTAINS ONLY NUMBERS
// let formattedCardNumber = cardNumberInput.replace(/(\d{4})/g, '$1 ');
// formattedCardNumber = formattedCardNumber.trim(); // Elimină spațiile de la început și sfârșit


//   // DISPLAYING THE INPUTS ON THE FRONT OF THE CARD
//   document.getElementById("cardNumberDisplay").textContent = formattedCardNumber;  
//   document.getElementById("cardHolderDisplay").textContent = cardNameInput;
//   document.getElementById("expiryDateDisplay").textContent = `${selectMonth}/${selectYear}`;


//   // DISPLAYING THE CVC INPUt ON THE Back OF THE CARD
  
//   let backCard = document.querySelector(".back__card");
//   backCard.textContent = cvcInput;
//   backCard.style.display = "block";


  
}


function validateForm(dataObject, regex) {
    if(regex.test(dataObject.inputValue)) {
      if(dataObject.type == "name") {
          dataObject.hintMsg.textContent = "The name is valid";
          dataObject.hintMsg.style.color = "rgb(2, 163, 5)";
          dataObject.valid = true;
      } else if(dataObject.type == "number"){
          // Verifică formatul numărului cardului
          if(regexNumber.test(formattedCardNumber)) {
            cardNumberErrorMessage.textContent =  "The number is valid";
            cardNumberErrorMessage.style.color="rgb(2, 163, 5)";
          }
          } else if(dataObject.type == "date") {
              // CHECK IF THE MONTH AND YEAR FIELD ARE COMPLETED
                if (selectMonth === "" || selectYear === "") {
                  expDateErrorMessage.textContent = "Invalid Exp Date";
                  expDateErrorMessage.style.color = "red"
                  alert("Please select both month and year.");
                  return;
          } else {
            // CHECK IF THE CVC FIELD IS COMPLETED CORRECTLY
            if(regexCvc.test(cvcInput)) {
              cvcErrorMessage.textContent = "The number is valid";
              cvcErrorMessage.style.color = "rgb(2, 163, 5)";
          }
      }
    } 

    // // CHECK IF THE NAME CONTAINS ONLY LETTERS
// if(nameRegex.test(formData.cardNameInput.inputValue)) {
//   formData.cardNameInput.hintMsg.textContent = "The name is valid";
//   formData.cardNameInput.hintMsg.style.color = "rgb(2, 163, 5)";
//   formData.cardNameInput.valid = true;


// } else {
//   formData.cardNameInput.hintMsg.textContent = "Wrong format. Letters only";
//   formData.cardNameInput.hintMsg.style.color = "red";
//   formData.cardNameInput.valid = false;
// }
}




// ADD OPTIONS FOR MONTH AND YEAR FIELS
let selectMonth = document.getElementById("expiryMonth");

// ARRAY OF MONTHS NAMES
let monthNames = [
  "Ianuarie", "Februarie", "Martie", "Aprilie",
  "Mai", "Iunie", "Iulie", "August",
  "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
];

// ADD MONTH OPTIONS IN DROPDOWN
for (let i = 0; i < monthNames.length; i++) {
  let option = document.createElement("option");
  option.value = (i + 1).toString().padStart(2, '0'); // FORM THE MONTH NUMBER WITH 2 DIGITS
  option.text = monthNames[i];
  selectMonth.add(option);
}

// ADD YEAR OPTIONS
let selectYear = document.getElementById("expiryYear");
let currentYear = new Date().getFullYear();

for(let i = 0; i < 15; i++) {
  let option2 = document.createElement("option");
  let year = currentYear + i;
  option2.value = year;
  option2.text = year;
  selectYear.add(option2);
}

}
