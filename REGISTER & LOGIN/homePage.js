document.addEventListener('DOMContentLoaded', function () {
    let userEmail = localStorage.getItem('currentUserEmail');
    if (userEmail) {
        let userName = extractUserName(userEmail);
        let welcomeMessageElement = document.getElementById('welcomeMessage');
        welcomeMessageElement.textContent = 'Hello, ' + userName + "...";


    } 
});

function extractUserName(email) {
    return email.split('@')[0];
}


function loadAndDisplayShifts(userEmail) {
    // Incarcam datele de shifturi din local storage asociate utilizatorului curent
    let shiftDataArray = JSON.parse(localStorage.getItem(userEmail)) || [];

    // Afișăm datele de shifturi în tabel
    let tableBody = document.querySelector("#tableShift tbody");
    tableBody.innerHTML = ""; // Stergem datele vechi din tabel

    shiftDataArray.forEach(shiftData => {
        addDataToTable(shiftData);
    });
}

function addShift() {
let formShift = document.querySelector("#formShift");
let shiftPlaceInput = document.getElementById("placeInput");
    let numOfHoursInput = document.getElementById("hoursInput");

    // Resetarea valorilor inputurilor la șirul gol
    shiftPlaceInput.value = "";
    numOfHoursInput.value = "";
    formShift.style.display = "block";
//   tableShift.style.display = "none"
}



let shiftPlaceValue;
let numOfHoursValue;

function saveShiftBtn() {
    // Obține elementele de intrare din DOM
    let shiftPlaceInput = document.getElementById("placeInput");
    let numOfHoursInput = document.getElementById("hoursInput");

    // Obține valorile introduse de utilizator din elementele de intrare și le asignăm la variabilele globale
    shiftPlaceValue = shiftPlaceInput.value;
    numOfHoursValue = numOfHoursInput.value;

    if (shiftPlaceValue.trim() == "" && numOfHoursValue.trim() == "") {
        // Afisează o alertă dacă inputurile nu sunt completate
        alert("Te rog completează ambele câmpuri!");
    } else {
        // Creează un obiect pentru datele noi

        // Afiseaza o alerta după ce utilizatorul confirmă în dialogul modal
        let myModal = new bootstrap.Modal(document.getElementById('confirmModal'));
        myModal.show();
        document.querySelector('#confirmBtn').addEventListener('click', function(event) {
            // Închideți modalul de confirmare
            
            console.log(event.target);
        let newShiftData = {
            place: shiftPlaceValue,
            numOfHours: numOfHoursValue
        };

        // Adaugă datele noi la tabel
        addDataToTable(newShiftData);

        // Verifică dacă există deja datele în localStorage
        let storedShiftData = localStorage.getItem("shiftData");
        let shiftDataArray = storedShiftData ? JSON.parse(storedShiftData) : [];

        // Adaugă datele noi la array-ul existent
        shiftDataArray.push(newShiftData);

        // Actualizează datele în localStorage
        localStorage.setItem("shiftData", JSON.stringify(shiftDataArray));

        // Ascunde formularul de adăugare a shiftului
        formShift.style.display = "none";

        // Resetarea valorilor inputurilor la șirul gol
        shiftPlaceInput.value = "";
        numOfHoursInput.value = "";
        // let myModal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
        myModal.hide();
       
        formShift.style.display = "none";
        // document.querySelector('#confirmBtn').removeEventListener('click',function(){});
   
        },{once:true});

        document.querySelector('#cancelBtn').addEventListener('click', function() {
            // Închideți modalul de confirmare
            myModal.hide();
        });
    }
}





function addDataToTable(newShiftData) {
    // Obține referința la tbody din tabel
    let tableBody = document.querySelector("#tableShift tbody");

    // Creează un nou rând în tabel și adaugă datele
    let row = tableBody.insertRow();
    let cellIndex = row.insertCell(0);
    let cellPlace = row.insertCell(1);
    let cellHours = row.insertCell(2);

    // Incrementăm numărul de rânduri în tabel
    cellIndex.textContent = tableBody.rows.length;

    // Adaugă datele din obiectul newShiftData în celulele rândului
    cellPlace.textContent = newShiftData.place;
    cellHours.textContent = newShiftData.numOfHours;
}


// function confirmBtn() {
//     console.log("fgfhgnjhg")
//     // Ascunde dialogul modal
//     // let myModal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
//     // myModal.hide();
//     // formShift.style.display = "none";
// }

function sortTable() {
    let tableBody = document.querySelector("#tableShift tbody");
    let rows = Array.from(tableBody.querySelectorAll('tr'));

    // Sortează rândurile în ordine descrescătoare în funcție de numărul de ore
    rows.sort((rowA, rowB) => {
        let hoursA = parseInt(rowA.cells[2].textContent);
        let hoursB = parseInt(rowB.cells[2].textContent);
        return hoursB - hoursA;
    });

    // Rearanjează rândurile în tabel în funcție de ordinea sortată
    rows.forEach(row => {
        tableBody.removeChild(row)
        tableBody.appendChild(row) });
}

function viewShift() {
    formShift.style.display = "none";
    let tableShift = document.getElementById("tableShift");
    let sortButton = document.getElementById("sortButton");
    if (true) {
        tableShift.style.display = "block";
        sortButton.style.display = "block";

        // Obține datele din localStorage
        let shiftDataArray = JSON.parse(localStorage.getItem("shiftData")) || [];




        // aici sterg tot ce e in tabel

        let rows = tableShift.querySelectorAll("tbody tr");
        for(row of rows) {
            row.remove();
        }
        // tableShift.innerHTML = "";
        // document.removeChild(tableShift);
        // Adaugă fiecare dată în tabel folosind funcția addDataToTable()
        shiftDataArray.forEach(shiftData => {
            addDataToTable(shiftData);
        });
    }
}


function logoutBtn() {
    // Deschideți modalul de confirmare
    let confirmModaLogOut = new bootstrap.Modal(document.getElementById('confirmModalLogOut'));
    confirmModaLogOut.show();
  
    // Adăugați un ascultător de evenimente pentru butonul "DA"
    document.getElementById('confirmLogout').addEventListener('click', function () {
        // Redirecționați utilizatorul către pagina de deconectare
        window.location.href = 'login.html';
    });

    // Adăugați un ascultător de evenimente pentru butonul "Anulare"
    document.querySelector("#cancelLogOut").addEventListener('click', function() {
        // Închideți modalul de confirmare
        confirmModaLogOut.hide();
    });
}




// cand apas pe view shift sa facem tabelul invisibil dar datele sunt inca acolo.
// tre sa sterg datele din tabel
// 2.cand apas pe add shift, nu adaug date si in tabel. doar in local storage;

