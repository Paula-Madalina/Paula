let validationState = {
    cityName: false,
    streetName: false,
    streetNumber: false,
    areaSize: false,
    hasAC: false,
    yearBuilt: false,
    rentPrice: false,
    dateAvailable: false
  };

  function updateValidationState(field, isValid) {
    validationState[field] = isValid;
  }


document.addEventListener('DOMContentLoaded', function () {
    let userEmail = localStorage.getItem('currentUserEmail') || "";
    if (userEmail) {
        console.log(userEmail);
        let userName = extractUserName(userEmail);
        console.log(userName);
        let welcomeMessageElement = document.getElementById('welcomeMessage');
        console.log(welcomeMessageElement);
        welcomeMessageElement.textContent = 'Hello, ' + userName + "...";


    } 
});

function extractUserName(email) {
    return email.split('@')[0];
}


document.getElementById("burgerMenu").addEventListener('click',burgerMenu);


function burgerMenu() {
    var burgerMenu = document.querySelector("#navMenu");

    if(burgerMenu.className ==="nav__menu") {
        burgerMenu.className += " responsive";
    } else {
        burgerMenu.className = "nav__menu"
    }
}

function toggleAC() {
    var button = document.getElementById('hasACInput');
    if (button.innerHTML === 'NO') {
        button.innerHTML = 'YES';
        button.classList.remove('NO');
        button.classList.add('YES');
    } else {
        button.innerHTML = 'NO';
        button.classList.remove('YES');
        button.classList.add('NO');
    }
}


let addNewFlat = document.querySelector("#addNewFlatButton");
let addFlatTable = document.querySelector("#addFlatTable");
let leftSide = document.querySelector(".left__side");
let container = document.querySelector("#container")
addNewFlat.addEventListener("click", showTable);

function showTable() {
  
    // addFlatTable.style.visibility = "visible";
    addFlatTable.style.display = "table";
    container.style.display = "none";
    flatDataTable.style.display = "none";
   

    // addFlatTable.classList.remove("add__flat");

}

let cityNameInput = document.querySelector("#cityNameInput");
let cityNameError = document.querySelector("#cityNameError");
let regexLettersOnly = /^[a-zA-Z]+$/;


let streetNameInput = document.querySelector("#streetNameInput");
let streetNameError = document.querySelector("#streetNameError");


let streetNumberInput = document.querySelector("#streetNumberInput");
let streetNumberError = document.querySelector("#streetNumberError");

let areaSizeInput = document.querySelector("#areaSizeInput")
let areaSizeError = document.querySelector("#areaSizeError");

let hasACInput = document.querySelector("#hasACInput");
let hasACError = document.querySelector("#hasACError");


let yearBuiltInput = document.querySelector("#yearBuiltInput");
let yearBuiltError = document.querySelector("#yearBuiltError");


let rentPriceInput = document.querySelector("#rentPriceInput");
let rentPriceError = document.querySelector("#rentPriceError");

let dateAvailableInput = document.querySelector("#dateAvailableInput");
let dateAvailableError = document.querySelector("#dateAvailableError");
let valid = [];


var modal = document.getElementById("myModal");
var confirmButton = document.getElementById("confirmSaveButton");
var cancelButton = document.getElementById("cancelSaveButton");


let allFlatsButton = document.querySelector("#allFlatsButton");
allFlatsButton.addEventListener("click", viewAllFlats);


saveNewFlatButton();
function saveNewFlatButton() {
    valid = [];
    cityNameInput.addEventListener("keyup", () => { validateCityName()});
    streetNameInput.addEventListener("keyup", () => { validateStreetName()});
    streetNumberInput.addEventListener("keyup", () => { validateStreetNumber()});
    areaSizeInput.addEventListener("keyup", () => { validateAreaSize()});
    yearBuiltInput.addEventListener("keyup", () => { validateYearBuilt()});
    rentPriceInput.addEventListener("keyup", () => { validateRentPrice()});
    // dateAvailableInput.addEventListener("change", () => { validateDateAvailable()});

    
    
}
function validateCityName() {
    if(cityNameInput.value.trim() == "") {
        cityNameError.textContent = "Can't be blank!";
        cityNameError.style.color = "red";
        cityNameInput.style.border = "2px solid red";
        cityNameError.style.fontSize = "12px"; // Dimensiunea textului
        cityNameError.style.letterSpacing = "1px"; // Spațiul între caractere
        updateValidationState("cityName", false);

    } else if(!regexLettersOnly.test(cityNameInput.value.trim())) {
        cityNameError.textContent = "Letters Only!";
        cityNameError.style.color = "red";
        cityNameInput.style.border = "3px solid red";
        cityNameError.style.fontSize = "12px"; // Dimensiunea textului
        cityNameError.style.letterSpacing = "1px";
        updateValidationState("cityName", false);
         // Spațiul între caractere

    } else {
        cityNameInput.style.border = "3px solid green";
        cityNameError.textContent = "";
        cityNameError.style.color = "green";
        updateValidationState("cityName", true);

    }
}


function validateStreetName() {
    if(streetNameInput.value.trim() == "") {
        streetNameError.textContent = "Can't be blank!";
        streetNameError.style.color = "red";
        streetNameInput.style.border = "2px solid red";
        streetNameError.style.fontSize = "12px"; // Dimensiunea textului
        streetNameError.style.letterSpacing = "1px"; // Spațiul între caractere
        updateValidationState("streetName", false);


    } else if(!regexLettersOnly.test(streetNameInput.value.trim())) {
        streetNameError.textContent = "Letters Only!";
        streetNameError.style.color = "red";
        streetNameInput.style.border = "3px solid red";
        streetNameError.style.fontSize = "12px"; // Dimensiunea textului
        streetNameError.style.letterSpacing = "1px"; // Spațiul între caractere
        updateValidationState("streetName", false);


    } else {
        streetNameInput.style.border = "3px solid green";
        streetNameError.textContent = "";
        streetNameError.style.color = "green";
        updateValidationState("streetName", true);

    }
}

function validateStreetNumber() {
    if(streetNumberInput.value.trim() == "") {
        streetNumberError.textContent = "Can't be blank!";
        streetNumberError.style.color = "red";
        streetNumberInput.style.border = "2px solid red";
        streetNumberError.style.fontSize = "12px"; // Dimensiunea textului
        streetNumberError.style.letterSpacing = "1px"; // Spațiul între caractere
        updateValidationState("streetNumber", false);

    } else {
        streetNumberInput.style.border = "3px solid green";
        streetNumberError.textContent = "";
        streetNumberError.style.color = "green";
        updateValidationState("streetNumber", true);

    }
}

function validateAreaSize() {
    if(areaSizeInput.value.trim() == "") {
        areaSizeError.textContent = "Can't be blank!";
        areaSizeError.style.color = "red";
        areaSizeInput.style.border = "2px solid red";
        areaSizeError.style.fontSize = "12px"; // Dimensiunea textului
        areaSizeError.style.letterSpacing = "1px"; // Spațiul între caractere
        updateValidationState("areaSize", false);

    } else {
        areaSizeInput.style.border = "3px solid green";
        areaSizeError.textContent = "";
        areaSizeError.style.color = "green";
        updateValidationState("areaSize", true);

    }
}

function validateYearBuilt() {
    if(yearBuiltInput.value.trim() == "") {
        yearBuiltError.textContent = "Can't be blank!";
        yearBuiltError.style.color = "red";
        yearBuiltInput.style.border = "2px solid red";
        yearBuiltError.style.fontSize = "12px"; // Dimensiunea textului
        yearBuiltError.style.letterSpacing = "1px"; // Spațiul între caractere
        updateValidationState("yearBuilt", false);

    } else {
        yearBuiltInput.style.border = "3px solid green";
        yearBuiltError.textContent = "";
        yearBuiltError.style.color = "green";
        updateValidationState("yearBuilt", true);

    }
}

function validateRentPrice() {
    if(rentPriceInput.value.trim() == "") {
        rentPriceError.textContent = "Can't be blank!";
        rentPriceError.style.color = "red";
        rentPriceInput.style.border = "2px solid red";
        rentPriceError.style.fontSize = "12px"; // Dimensiunea textului
        rentPriceError.style.letterSpacing = "1px"; // Spațiul între caractere
        updateValidationState("rentPrice", false);

    } else {
        rentPriceInput.style.border = "3px solid green";
        rentPriceError.textContent = "";
        rentPriceError.style.color = "green";
        updateValidationState("rentPrice", true);

    }
}


function saveNewFlat() {
    valid = [];
    validateHasAC();
    validateDateAvailable();

    console.log(validationState);
  
    if (isAllFieldsValid()) {
        // Afiseaza modalul
        modal.style.display = "block";
    } else {
      alert("Complete all the fields!");
    }
}

confirmButton.onclick = function() {
    saveToLocalStorage(); 
    clearInputs(); // Șterge conținutul inputurilor

    modal.style.display = "none";
}

cancelButton.onclick = function() {
    modal.style.display = "none"; 

}

function clearInputs() {
    cityNameInput.value = "";
    streetNameInput.value = "";
    streetNumberInput.value = "";
    areaSizeInput.value = "";
    hasACInput.innerHTML = "NO"; // Setează la valoarea implicită
    yearBuiltInput.value = "";
    rentPriceInput.value = "";
    dateAvailableInput.value = "";
}

function validateHasAC() {
    if(hasACInput.innerHTML === "OFF") {
        hasACError.textContent = "Must be selected!";
        hasACError.style.color = "red";
        hasACError.style.fontSize = "12px"; // Dimensiunea textului
        hasACError.style.letterSpacing = "1px"; // Spațiul între caractere
        updateValidationState("hasAC", false);

    } else {
        hasACError.textContent = "";
        updateValidationState("hasAC", true);

        // hasACInput.style.border = "3px solid green";
    }
}

function validateDateAvailable() {
    if(dateAvailableInput.value.trim() == "") {
        dateAvailableError.textContent = "Must be selected!";
        dateAvailableError.style.color = "red";
        dateAvailableInput.style.border = "2px solid red";
        dateAvailableError.style.fontSize = "12px"; // Dimensiunea textului
        dateAvailableError.style.letterSpacing = "1px"; // Spațiul între caractere
        updateValidationState("dateAvailable", false);

    } else {
        dateAvailableInput.style.border = "3px solid green";
        dateAvailableError.textContent = "";
        dateAvailableError.style.color = "green";
        updateValidationState("dateAvailable", true);

    }
}

function isAllFieldsValid() {
    return Object.values(validationState).every(value => value === true);
}


function saveToLocalStorage() {
    // Creează un obiect pentru a stoca datele dintr-un singur apartament
    const flatData = {
        cityName: cityNameInput.value.trim(),
        streetName: streetNameInput.value.trim(),
        streetNumber: streetNumberInput.value.trim(),
        areaSize: areaSizeInput.value.trim(),
        hasAC: hasACInput.innerHTML.trim(),
        yearBuilt: yearBuiltInput.value.trim(),
        rentPrice: rentPriceInput.value.trim(),
        dateAvailable: dateAvailableInput.value.trim()
    };

    // Obține lista actuală de apartamente din localStorage
    let flats = JSON.parse(localStorage.getItem("flats")) || [];

    // Adaugă noul apartament la lista existentă
    flats.push(flatData);

    // Actualizează lista de apartamente în stocarea locală
    localStorage.setItem("flats", JSON.stringify(flats));
}

document.addEventListener('DOMContentLoaded', function () {
    // Obține lista de apartamente din localStorage
    let flats = JSON.parse(localStorage.getItem("flats")) || [];

    // Parcurge fiecare apartament din listă și adaugă datele în tabel
    flats.forEach(function(flat) {
        addFlatToTable(flat);
    });
});

let table = document.getElementById("flatDataTable");

function addFlatToTable(flat) {
    // Crează un rând nou pentru tabel
    let newRow = document.createElement("tr");

    // Parcurge fiecare proprietate a obiectului "flat" și adaugă o celulă pentru fiecare în rândul nou creat
    for (let key in flat) {
        if (flat.hasOwnProperty(key)) {
            let newCell = document.createElement("td");
            newCell.textContent = flat[key];
            newRow.appendChild(newCell);
        }
    }

    // Adaugă butonul de "Favorite" în rândul nou creat
    let favoriteCell = document.createElement("td");
    let favoriteIcon = document.createElement("span");
    favoriteIcon.classList.add("favorite-icon");
    favoriteIcon.textContent = "🤍"; // Unicode pentru inima goală
    favoriteIcon.addEventListener("click", function() {
        favoriteIcon.textContent = (favoriteIcon.textContent === "🤍") ? "❤️" : "🤍"; // Schimbă între inima goală și inima plină la fiecare clic
    });
    favoriteCell.appendChild(favoriteIcon);
    newRow.appendChild(favoriteCell);

    // Adaugă butonul de ștergere în rândul nou creat
    let deleteCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
        deleteRowFromTable(newRow);
    });
    deleteCell.appendChild(deleteButton);
    newRow.appendChild(deleteCell);

    // Adaugă rândul nou în tabelul existent
    let table = document.getElementById("flatDataTable");
    table.appendChild(newRow);
}

function deleteRowFromTable(row) {
    // Obține indexul rândului pe care vrei să-l ștergi
    let rowIndex = row.rowIndex;

    // Obține datele din local storage
    let flats = JSON.parse(localStorage.getItem("flats")) || [];

    // Șterge rândul corespunzător din array-ul de date
    flats.splice(rowIndex - 1, 1);

    // Actualizează conținutul din local storage
    localStorage.setItem("flats", JSON.stringify(flats));

    // Elimină rândul din tabel
    row.remove();
}





function viewAllFlats() {
    flatDataTable.style.display = "block";
    addFlatTable.style.display = "none";

    // Afisează toate rândurile din tabel
    let rows = document.querySelectorAll("#flatDataTable tr");
    rows.forEach(function(row) {
        row.style.display = "table-row";
    });
}



function logOutButton() {
    alert("FDFB")
    console.log(":Vfdb")
    // Afișează modalul pentru deconectare când butonul de Log Out este apăsat
    var modal = document.getElementById('logoutModal');
    modal.style.display = 'block';
}

function confirmLogout() {
    // Redirecționează către pagina de login după confirmarea deconectării
    window.location.href = "../register+login/both.html";
}
function closeModal() {
    // Ascunde modalul pentru deconectare când utilizatorul apasă pe "Nu"
    var modal = document.getElementById('logoutModal');
    modal.style.display = 'none';
}



document.getElementById("myProfileButton").addEventListener("click", displayUserProfile);

        function displayUserProfile() {
            // Preia datele utilizatorului din stocarea locală
            let currentUser = JSON.parse(localStorage.getItem("currentUser"));

            // Verifică dacă există date pentru utilizator
            if (currentUser) {
                // Construiește un tabel HTML cu datele utilizatorului
                let tableHtml = "<h2>User Profile</h2><table>";
                for (let key in currentUser) {
                    tableHtml += "<tr><th>" + key + "</th><td>" + currentUser[key] + "</td></tr>";
                }
                tableHtml += "</table>";

                // Afișează tabelul în div-ul cu id-ul "profileTable"
                document.getElementById("profileTable").innerHTML = tableHtml;
            } else {
                alert("No user data found.");
            }
        }