toastr.options = {
    "closeButton": false,
    "debug": true,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

// Declaring an object to store validation state for each field
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

// Function to update the validation state of a field
function updateValidationState(field, isValid) {
    validationState[field] = isValid;
}

// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the current user's email from localStorage
    let userEmail = localStorage.getItem('currentUserEmail') || "";
    // Check if the user email exists
    if (userEmail) {
        // Log the user's email to the console
        console.log(userEmail);
        // Extract the username from the email
        let userName = extractUserName(userEmail);
        // Log the username to the console
        console.log(userName);
        // Get the element for the welcome message
        let welcomeMessageElement = document.getElementById('welcomeMessage');
        // Log the welcome message element to the console
        console.log(welcomeMessageElement);
        // Set the welcome message with the username
        welcomeMessageElement.textContent = 'Hello, ' + userName + "...";
    }
});

// Function to extract the username from an email
function extractUserName(email) {
    return email.split('@')[0];
}

// Event listener for the burger menu button click
document.getElementById("burgerMenu").addEventListener('click', burgerMenu);

// Function to toggle the burger menu
function burgerMenu() {
    var burgerMenu = document.querySelector("#navMenu");
    // Toggle the responsive class for the nav menu
    if (burgerMenu.className === "nav__menu") {
        burgerMenu.className += " responsive";
    } else {
        burgerMenu.className = "nav__menu"
    }
}

// Function to toggle the AC button
function toggleAC() {
    var button = document.getElementById('hasACInput');
    // Toggle the button text and classes
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

// Event listener for the add new flat button click
let addNewFlat = document.querySelector("#addNewFlatButton");
let addFlatTable = document.querySelector("#addFlatTable");
let leftSide = document.querySelector(".left__side");
let container = document.querySelector("#container")
addNewFlat.addEventListener("click", showTable);

// Function to display the add flat table
function showTable() {
    favoritesContainer.style.display = "none";
    addFlatTable.style.display = "table";
    container.style.display = "none";
    flatDataTable.style.display = "none";
    backgroundWrapper.style.filter = "brightness(0.5)";
    userProfileTableContainer.style.display = "none";
    tableControls.style.display = "none";
}

// Retrieving input elements and error elements for validation
let cityNameInput = document.querySelector("#cityNameInput");
let cityNameError = document.querySelector("#cityNameError");
let regexLettersOnly = /^[a-zA-Z\-]+$/;

let streetNameInput = document.querySelector("#streetNameInput");
let streetNameError = document.querySelector("#streetNameError");

let streetNumberInput = document.querySelector("#streetNumberInput");
let streetNumberError = document.querySelector("#streetNumberError");
let regexStreetName = /^[a-zA-Z0-9\.\-\s]+$/;

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

// Retrieving modal elements
var modal = document.getElementById("myModal");
var confirmButton = document.getElementById("confirmSaveButton");
var cancelButton = document.getElementById("cancelSaveButton");

// Event listener for the "All Flats" button click
let allFlatsButton = document.querySelector("#allFlatsButton");
allFlatsButton.addEventListener("click", viewAllFlats);

// Function to handle saving a new flat
saveNewFlatButton();
function saveNewFlatButton() {
    valid = [];
    cityNameInput.addEventListener("keyup", () => { validateCityName()});
    streetNameInput.addEventListener("keyup", () => { validateStreetName()});
    streetNumberInput.addEventListener("keyup", () => { validateStreetNumber()});
    areaSizeInput.addEventListener("keyup", () => { validateAreaSize()});
    yearBuiltInput.addEventListener("keyup", () => { validateYearBuilt()});
    rentPriceInput.addEventListener("keyup", () => { validateRentPrice()});
}

// Function to validate the city name input
function validateCityName() {
    if(cityNameInput.value.trim() == "") {
        cityNameError.textContent = "Can't be blank!";
        cityNameError.style.color = "red";
        cityNameInput.style.border = "2px solid red";
        cityNameError.style.fontSize = "12px"; // Text size
        cityNameError.style.letterSpacing = "1px"; // Spacing between characters
        updateValidationState("cityName", false);
    } else if(!regexLettersOnly.test(cityNameInput.value.trim())) {
        cityNameError.textContent = "Letters Only!";
        cityNameError.style.color = "red";
        cityNameInput.style.border = "3px solid red";
        cityNameError.style.fontSize = "12px"; // Text size
        cityNameError.style.letterSpacing = "1px"; // Spacing between characters
        updateValidationState("cityName", false);
    } else {
        cityNameInput.style.border = "3px solid green";
        cityNameError.textContent = "";
        cityNameError.style.color = "green";
        updateValidationState("cityName", true);
    }
}

// Function to validate the street name input
function validateStreetName() {
    if(streetNameInput.value.trim() == "") {
        streetNameError.textContent = "Can't be blank!";
        streetNameError.style.color = "red";
        streetNameInput.style.border = "2px solid red";
        streetNameError.style.fontSize = "12px"; // Text size
        streetNameError.style.letterSpacing = "1px"; // Spacing between characters
        updateValidationState("streetName", false);
    } else if(!regexStreetName.test(streetNameInput.value.trim())) {
        streetNameError.textContent = "Wrong Format!";
        streetNameError.style.color = "red";
        streetNameInput.style.border = "3px solid red";
        streetNameError.style.fontSize = "12px"; // Text size
        streetNameError.style.letterSpacing = "1px"; // Spacing between characters
        updateValidationState("streetName", false);
    } else {
        streetNameInput.style.border = "3px solid green";
        streetNameError.textContent = "";
        streetNameError.style.color = "green";
        updateValidationState("streetName", true);
    }
}

// Function to validate the street number input
function validateStreetNumber() {
    if(streetNumberInput.value.trim() == "") {
        streetNumberError.textContent = "Can't be blank!";
        streetNumberError.style.color = "red";
        streetNumberInput.style.border = "2px solid red";
        streetNumberError.style.fontSize = "12px"; // Text size
        streetNumberError.style.letterSpacing = "1px"; // Spacing between characters
        updateValidationState("streetNumber", false);
    } else {
        streetNumberInput.style.border = "3px solid green";
        streetNumberError.textContent = "";
        streetNumberError.style.color = "green";
        updateValidationState("streetNumber", true);
    }
}

// Function to validate the area size input
function validateAreaSize() {
    if(areaSizeInput.value.trim() == "") {
        areaSizeError.textContent = "Can't be blank!";
        areaSizeError.style.color = "red";
        areaSizeInput.style.border = "2px solid red";
        areaSizeError.style.fontSize = "12px"; // Text size
        areaSizeError.style.letterSpacing = "1px"; // Spacing between characters
        updateValidationState("areaSize", false);
    } else {
        areaSizeInput.style.border = "3px solid green";
        areaSizeError.textContent = "";
        areaSizeError.style.color = "green";
        updateValidationState("areaSize", true);
    }
}

// Function to validate the year built input
function validateYearBuilt() {
    if(yearBuiltInput.value.trim() == "") {
        yearBuiltError.textContent = "Can't be blank!";
        yearBuiltError.style.color = "red";
        yearBuiltInput.style.border = "2px solid red";
        yearBuiltError.style.fontSize = "12px"; // Text size
        yearBuiltError.style.letterSpacing = "1px"; // Spacing between characters
        updateValidationState("yearBuilt", false);
    } else {
        yearBuiltInput.style.border = "3px solid green";
        yearBuiltError.textContent = "";
        yearBuiltError.style.color = "green";
        updateValidationState("yearBuilt", true);
    }
}

// Function to validate the rent price input
function validateRentPrice() {
    if(rentPriceInput.value.trim() == "") {
        rentPriceError.textContent = "Can't be blank!";
        rentPriceError.style.color = "red";
        rentPriceInput.style.border = "2px solid red";
        rentPriceError.style.fontSize = "12px"; // Text size
        rentPriceError.style.letterSpacing = "1px"; // Spacing between characters
        updateValidationState("rentPrice", false);
    } else {
        rentPriceInput.style.border = "3px solid green";
        rentPriceError.textContent = "";
        rentPriceError.style.color = "green";
        updateValidationState("rentPrice", true);
    }
}

// Function to save a new flat
function saveNewFlat() {
    valid = [];
    validateHasAC();
    validateDateAvailable();
    console.log(validationState);
    if (isAllFieldsValid()) {
        // Display the modal
        modal.style.display = "block";
    } else {
        toastr["error"]("Complete all the fields!");
    }
}

// Event listener for the confirm button in the modal
confirmButton.onclick = function() {
    saveToLocalStorage(); 
    clearInputs(); // Clear the input content
    modal.style.display = "none";
    toastr["success"]("Flat saved!");
    setTimeout(function() {
        location.reload();

    }, 1000);


}

// Event listener for the cancel button in the modal
cancelButton.onclick = function() {
    modal.style.display = "none"; 
}

// Function to clear all input fields
function clearInputs() {
    cityNameInput.value = "";
    cityNameInput.style.border = "1px solid black";
    streetNameInput.value = "";
    streetNameInput.style.border = "1px solid black";
    streetNumberInput.value = "";
    streetNumberInput.style.border = "1px solid black";
    areaSizeInput.value = "";
    areaSizeInput.style.border = "1px solid black";
    hasACInput.innerHTML = "OFF"; 
    yearBuiltInput.value = "";
    yearBuiltInput.style.border = "1px solid black";
    rentPriceInput.value = "";
    rentPriceInput.style.border = "1px solid black";
    dateAvailableInput.value = "";
    dateAvailableInput.style.border = "1px solid black";
}

// Function to validate the AC input
function validateHasAC() {
    if(hasACInput.innerHTML === "OFF") {
        hasACError.textContent = "Must be selected!";
        hasACError.style.color = "red";
        hasACError.style.fontSize = "12px"; // Text size
        hasACError.style.letterSpacing = "1px"; // Spacing between characters
        updateValidationState("hasAC", false);
    } else {
        hasACError.textContent = "";
        updateValidationState("hasAC", true);
    }
}

// Function to validate the date available input
function validateDateAvailable() {
    if(dateAvailableInput.value.trim() == "") {
        dateAvailableError.textContent = "Must be selected!";
        dateAvailableError.style.color = "red";
        dateAvailableInput.style.border = "2px solid red";
        dateAvailableError.style.fontSize = "12px"; // Text size
        dateAvailableError.style.letterSpacing = "1px"; // Spacing between characters
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
    // Get the current user's email address
    let userEmail = localStorage.getItem('currentUserEmail') || "";
    
    // Create an object to store the data of a single flat
    const flatData = {
        cityName: cityNameInput.value.trim(),
        streetName: streetNameInput.value.trim(),
        streetNumber: streetNumberInput.value.trim(),
        areaSize: areaSizeInput.value.trim(),
        hasAC: hasACInput.innerHTML.trim(),
        yearBuilt: yearBuiltInput.value.trim(),
        rentPrice: rentPriceInput.value.trim(),
        dateAvailable: dateAvailableInput.value.trim(),
        favorite: false
    };

    // Get the current list of flats from localStorage for the current user
    let userFlats = JSON.parse(localStorage.getItem(userEmail)) || [];

    // Add the new flat to the existing list
    userFlats.push(flatData);

    // Update the list of flats in localStorage for the current user
    localStorage.setItem(userEmail, JSON.stringify(userFlats));

    addFlatToTable(flatData);
}


document.addEventListener('DOMContentLoaded', function () {
    // Get the current user's email address
    let userEmail = localStorage.getItem('currentUserEmail') || "";

    // Get the list of flats from localStorage for the current user
    let userFlats = JSON.parse(localStorage.getItem(userEmail)) || [];

    // Iterate through each flat in the list and add the data to the table
    userFlats.forEach(function(flat) {
        addFlatToTable(flat);
    });
});

let table = document.getElementById("flatDataTable");


function addFlatToTable(flat) {
    // Create a new row for the table
    let newRow = document.createElement("tr");

    // Iterate through each property of the "flat" object and add a cell for each in the newly created row
    for (let key in flat) {
        if (flat.hasOwnProperty(key) && key !== 'favorite') {
            let newCell = document.createElement("td");
            newCell.textContent = flat[key];
            newRow.appendChild(newCell);
        }
    }

    // Add the cell for the "Favorite" icon in the newly created row
    let favoriteCell = document.createElement("td");
    let favoriteIcon = document.createElement("span");
    favoriteIcon.classList.add("favorite-icon");
    favoriteIcon.textContent = flat.favorite ? "❤️" : "🤍"; // Unicode for filled or empty heart depending on the favorite state
    favoriteIcon.addEventListener("click", function(e) {
        // Toggle the favorite state when the icon is clicked
        console.log(e.target);
        flat.favorite = !flat.favorite;
        favoriteIcon.textContent = flat.favorite ? "❤️" : "🤍"; // Update the favorite icon
    //  saveToLocalStorage(); // Save the updated favorite state to localStorage
    updateFavorite(e.target);
    });
    favoriteCell.appendChild(favoriteIcon);
    newRow.appendChild(favoriteCell);

    // Add the delete button in the newly created row
    let deleteCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
        // Confirm deletion
        if (confirm("Are you sure you want to delete this item?")) {
            deleteRowFromTable(newRow);
        }
    });
    deleteCell.appendChild(deleteButton);
    newRow.appendChild(deleteCell);

    // Add the newly created row to the existing table
    let table = document.getElementById("flatDataTable");
    table.appendChild(newRow);
}

function updateFavorite(target) {
    console.log(target.parentElement.parentElement);
    let tr = target.parentElement.parentElement;
    let city = tr.cells[0].innerText;
    console.log(city);
    let street = tr.cells[1].innerText;
    let streetNumber = tr.cells[2].innerText;
    let logUser = localStorage.getItem("currentUserEmail");
    let user = JSON.parse(localStorage.getItem(logUser)) || [];
    if(user) {
        for(let ap of user) {
            if(ap.cityName == city && ap.streetName == street && ap.streetNumber == streetNumber) {
               ap.favorite = !ap.favorite;
            }
        }
        localStorage.setItem(logUser, JSON.stringify(user));
    }
}


let favoriteFlatsButton = document.getElementById("favoriteFlatsButton");
favoriteFlatsButton.addEventListener("click", showFavoriteFlats);

function showFavoriteFlats(event) {
    addFlatTable.style.display = "none";
    container.style.display = "none";
    flatDataTable.style.display = "none";
    userProfileTableContainer.style.display = "none";
    tableControls.style.display = "none";
    event.preventDefault(); // Prevent default behavior of the link

    // Get the current user's email address
    let userEmail = localStorage.getItem('currentUserEmail') || [];

    // Get the list of flats from localStorage for the current user
    let userFlats = JSON.parse(localStorage.getItem(userEmail)) || [];

    // Filter the list of flats to show only the favorites
    let favoriteFlats = userFlats.filter(flat => flat.favorite === true);

    // Display these flats in the favorites area
    displayFlatsInFavorites(favoriteFlats);
}

let favoritesContainer = document.getElementById("favoritesContainer");

function displayFlatsInFavorites(favoriteFlats) {
    // Get a reference to the area where favorite flats are displayed in the user interface
    let favoritesContainer = document.getElementById("favoritesContainer");

    // Clear the current content of the area displaying favorite flats to make room for new flats
    favoritesContainer.innerHTML = "";

    // Create a table element
    let table = document.createElement("table");
    table.classList.add("favorites-table");
    favoritesContainer.style.display = "table";
    
    // Create the table header (thead)
    let headerRow = document.createElement("tr");
    let headerCells = ["City Name", "Street Name", "Street Number", "Area Size", "Has AC", "Year Built", "Rent Price", "Date Available", "Remove"];
    headerCells.forEach(headerText => {
        let headerCell = document.createElement("th");
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });
    let header = document.createElement("thead");
    header.appendChild(headerRow);
    table.appendChild(header);

    // Iterate through the list of favorite flats and add each flat to the table body (tbody)
    let body = document.createElement("tbody");
    favoriteFlats.forEach(flat => {
        let row = document.createElement("tr");
        
        // Add cells for the flat's properties
        for (let key in flat) {
            if (key !== "favorite") {
                let cell = document.createElement("td");
                cell.textContent = flat[key];
                row.appendChild(cell);
            }
        }
        
        // Add the cell for the remove button
        let removeCell = document.createElement("td");
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove__btn");
        
        
        removeButton.addEventListener("click", function() {
            if (confirm("Are you sure you want to remove this item?")) {
                removeFromFavorites(flat);
            displayFlatsInFavorites(favoriteFlats.filter(f => f !== flat)); // Re-display the list of favorite flats, excluding the removed flat
            }
           
        });
        
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);
        
        body.appendChild(row);
    });

    table.appendChild(body);

    // Add the table to the favorites container
    favoritesContainer.appendChild(table);
}

// Function to remove a flat from the list of favorites
function removeFromFavorites(flat) {
    let userEmail = localStorage.getItem('currentUserEmail');
    let userFlats = JSON.parse(localStorage.getItem(userEmail)) || [];

    userFlats.forEach(userFlat => {
        if (userFlat.cityName === flat.cityName && userFlat.streetName===flat.streetName && userFlat.streetNumber===flat.streetNumber && userFlat.streetName===flat.streetName && userFlat.areaSize===flat.areaSize && userFlat.hasAC===flat.hasAC && userFlat.yearBuilt===flat.yearBuilt && userFlat.rentPrice===flat.rentPrice && userFlat.dateAvailable===flat.dateAvailable) {
            userFlat.favorite = false; // Set the "favorite" property to false
        }
    });

    localStorage.setItem(userEmail, JSON.stringify(userFlats)); // Update the list in localStorage
}

// Function to delete a row from the table and local storage
function deleteRowFromTable(row) {
    // Get the current user's email address
    let userEmail = localStorage.getItem('currentUserEmail') || "";

    // Get the index of the row you want to delete
    let rowIndex = row.rowIndex;

    // Get the list of flats from localStorage for the current user
    let userFlats = JSON.parse(localStorage.getItem(userEmail)) || [];

    // Remove the corresponding flat from the data array
    userFlats.splice(rowIndex - 1, 1);

    // Update the content in local storage for the current user
    localStorage.setItem(userEmail, JSON.stringify(userFlats));

    // Remove the row from the table
    row.remove();
}



let backgroundWrapper = document.querySelector(".background-wrapper");

// Function to view all flats
function viewAllFlats() {
    // Save data to local storage (if needed)
    // saveToLocalStorage();

    // Hide the favorites container
    favoritesContainer.style.display = "none";
    console.log(favoritesContainer);

    // Show the flat data table
    flatDataTable.style.display = "table";

    // Hide other elements
    addFlatTable.style.display = "none";
    container.style.display = "none";
    userProfileTableContainer.style.display = "none";
    tableControls.style.display = "flex";
    let userEmail = localStorage.getItem('currentUserEmail') || "";

    // Get the list of flats from localStorage for the current user
    let userFlats = JSON.parse(localStorage.getItem(userEmail)) || [];
    let table = document.getElementById("flatDataTable");
   
        let tr1= table.rows[0];
        table.innerHTML="";
        table.appendChild(tr1);

    // Iterate through each flat in the list and add the data to the table
    userFlats.forEach(function(flat) {
        addFlatToTable(flat);
    });

    // Dim the background
    backgroundWrapper.style.filter = "brightness(0.5)";

    // Display all rows in the table
    let rows = document.querySelectorAll("#flatDataTable tr");
    rows.forEach(function(row) {
        row.style.display = "table-row";
    });
}

// Function to handle logout button click
function logOutButton() {
    favoritesContainer.style.display = "none";
    addFlatTable.style.display = "none";
    container.style.display = "none";
    flatDataTable.style.display = "none";
    userProfileTableContainer.style.display = "none";
    tableControls.style.display = "none";
    // Display the logout modal when the Logout button is clicked
    var modal = document.getElementById('logoutModal');
    modal.style.display = 'block';
}

// Function to confirm logout
function confirmLogout() {
    // Redirect to the login page after logout confirmation
    window.location.href = "../register+login/index.html";
}

// Function to close the logout modal
function closeModal() {
    // Hide the logout modal when the user clicks "No"
    var modal = document.getElementById('logoutModal');
    modal.style.display = 'none';

    setTimeout(function() {
        location.reload();
    }, 300);
}




let startButton = document.querySelector("#startButton");

// Event listener for the start button
startButton.addEventListener("click", clickToStart);

// Function called when start button is clicked
function clickToStart() {
    showTable();
}

// Get the user profile table container
let userProfileTableContainer = document.querySelector("#userProfileTableContainer");

// Event listener for the My Profile button
document.getElementById("myProfileButton").addEventListener("click", displayUserProfile);

// Function to display the user profile
function displayUserProfile() {
    // Hide other elements
    favoritesContainer.style.display = "none";
    container.style.display = "none";
    backgroundWrapper.style.filter = "brightness(0.1)";
    userProfileTableContainer.style.display = "table";
    addFlatTable.style.display = "none";
    flatDataTable.style.display = "none";
    tableControls.style.display = "none";

    // Get the current user's email from local storage
    let currentUserEmail = localStorage.getItem("currentUserEmail");

    // Get the users' data from local storage
    let usersData = JSON.parse(localStorage.getItem("Users"));

    // Find the user corresponding to the current email
    let userData = usersData.find(user => user.email === currentUserEmail);

    if (!userData) {
        toastr["error"]("User not found");
        return;
    }

    // Display user data in a table
    let tableHTML = "<table border='1' class='user-profile-table'>";
    tableHTML += "<tr>";
    tableHTML += "<th>Property</th>";
    tableHTML += "<th>Value</th>";
    tableHTML += "<th>Edit</th>";
    tableHTML += "</tr>";
    for (let key in userData) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + key + "</td>";
        if (key !== "email") {
            tableHTML += "<td class='value-cell' data-property='" + key + "'>" + userData[key] + "</td>";
        } else {
            tableHTML += "<td class='value-cell' data-property='" + key + "'>" + userData[key] + "</td>";
        }
        if (key !== "email") {
            tableHTML += "<td><button class='edit-button'>Edit</button></td>";
        } else {
            tableHTML += "<td></td>";
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    document.getElementById("userProfileTable").innerHTML = tableHTML;

    // Add event listeners to edit buttons
    let editButtons = document.querySelectorAll(".edit-button");
    editButtons.forEach(button => {
        button.addEventListener("click", function() {
            let valueCell = this.parentElement.previousElementSibling;
            let currentValue = valueCell.textContent.trim();
            let newValue = prompt("Enter new value:", currentValue);
            toastr["success"]("Changed data");
            setTimeout(function() {
                location.reload();
            }, 1000);
            if (newValue !== null && newValue !== "") {
                if (valueCell.dataset.property === "birthDate") {
                    let newDate = new Date(newValue);
                    let currentDate = new Date();
                    let ageDifference = currentDate.getFullYear() - newDate.getFullYear();
                    if (ageDifference < 18) {
                        toastr["error"]("You must be at least 18 years old!");

                        
                        return;
                    }
                }
                valueCell.textContent = newValue;
                let property = valueCell.dataset.property;
                userData[property] = newValue;

                // If the modified property is 'password', remove apartment data and redirect user to login page
                if (property === "password") {
                    // Remove apartment data for the current user
                    localStorage.removeItem(currentUserEmail);

                    // Update password in usersData and save to localStorage
                    let userIndex = usersData.findIndex(user => user.email === currentUserEmail);
                    if (userIndex !== -1) {
                        usersData[userIndex].password = newValue;
                        localStorage.setItem("Users", JSON.stringify(usersData));
                    }
                    toastr["warning"]("Your password has been changed. All your apartment data has been removed. You will be logged out for security reasons.");

                    setTimeout(function() {
                        window.location.href = "../register+login/index.html"; // Redirect user to login page
                    }, 1000);
                
                    return;
                }

                localStorage.setItem("Users", JSON.stringify(usersData));
            }
        });
    });
}


let inactivityTimer; // Variable to hold the inactivity timer

// Function to start the inactivity timer
function startInactivityTimer() {
    // Reset the timer on any user interaction with the page
    document.addEventListener("click", resetInactivityTimer);
    document.addEventListener("keydown", resetInactivityTimer);

    // Set a timeout of 30 minutes (1800000 milliseconds) for logout
    inactivityTimer = setTimeout(logOutUser, 30 * 60 * 1000); // 30 minutes
}

// Function to reset the inactivity timer
function resetInactivityTimer() {
    clearTimeout(inactivityTimer); // Reset the timeout
    startInactivityTimer(); // Start the timer again
}

// Function to log out the user
function logOutUser() {
    confirmLogout(); // Call the logout function already defined in your code
}

// Start the inactivity timer when the document is fully loaded
document.addEventListener("DOMContentLoaded", startInactivityTimer);


// Get the th element and the sort arrow with the sort-arrow class
const citySort = document.getElementById('citySort');
const sortArrows = citySort.querySelectorAll('.sort-arrow');
console.log(citySort)

// Add an event listener for click on the th element
citySort.addEventListener('click', () => {
    // Check the current sorting state
    const isAscending = sortArrows[0].classList.contains('sort-up');
    console.log("GFD");
    console.log(citySort)
    // Sort the column based on the current state
    if (isAscending) {
        // Sort in descending order
        sortDescending();
        sortArrows[0].classList.remove('sort-up'); // Remove the sort-up class for the ascending arrow
        sortArrows[1].classList.add('sort-down'); // Add the sort-down class for the descending arrow
    } else {
        // Sort in ascending order
        sortAscending();
        sortArrows[0].classList.add('sort-up'); // Add the sort-up class for the ascending arrow
        sortArrows[1].classList.remove('sort-down'); // Remove the sort-down class for the descending arrow
    }
});

// Function to sort the column in ascending order
function sortAscending() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1); // Get the table rows (excluding the header)
    rows.sort((a, b) => {
        const cityA = a.cells[0].textContent.trim(); // Get the city value from the first row
        const cityB = b.cells[0].textContent.trim(); // Get the city value from the second row
        return cityA.localeCompare(cityB); // Sort the city values in ascending order using the localeCompare() function
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row)); // Rearrange the table rows according to the sorting
}

// Function to sort the column in descending order
function sortDescending() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1); // Get the table rows (excluding the header)
    rows.sort((a, b) => {
        const cityA = a.cells[0].textContent.trim(); // Get the city value from the first row
        const cityB = b.cells[0].textContent.trim(); // Get the city value from the second row
        return cityB.localeCompare(cityA); // Sort the city values in descending order using the localeCompare() function
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row)); // Rearrange the table rows according to the sorting
}



// Get the streetSort element and the sort arrows within it
const streetSort = document.getElementById('streetSort');
const streetArrows = streetSort.querySelectorAll('.sort-arrow');

// Add an event listener for click on the streetSort element
streetSort.addEventListener('click', () => {
    // Check the current sorting state
    const isAscending = streetArrows[0].classList.contains('sort-up');
    
    // Sort the column based on the current state
    if (isAscending) {
        // Sort in descending order
        sortDescendingByStreet();
        streetArrows[0].classList.remove('sort-up'); // Remove the sort-up class for the ascending arrow
        streetArrows[1].classList.add('sort-down'); // Add the sort-down class for the descending arrow
    } else {
        // Sort in ascending order
        sortAscendingByStreet();
        streetArrows[0].classList.add('sort-up'); // Add the sort-up class for the ascending arrow
        streetArrows[1].classList.remove('sort-down'); // Remove the sort-down class for the descending arrow
    }
});

// Function to sort the column "Street Name" in ascending order
function sortAscendingByStreet() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1); // Get the table rows (excluding the header)
    rows.sort((a, b) => {
        const streetA = a.cells[1].textContent.trim(); // Get the street name value from the second column (index 1)
        const streetB = b.cells[1].textContent.trim();
        return streetA.localeCompare(streetB); // Sort the street name values in ascending order using the localeCompare() function
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row)); // Rearrange the table rows according to the sorting
}

// Function to sort the column "Street Name" in descending order
function sortDescendingByStreet() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1); // Get the table rows (excluding the header)
    rows.sort((a, b) => {
        const streetA = a.cells[1].textContent.trim(); // Get the street name value from the second column (index 1)
        const streetB = b.cells[1].textContent.trim();
        return streetB.localeCompare(streetA); // Sort the street name values in descending order using the localeCompare() function
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row)); // Rearrange the table rows according to the sorting
}

// Get the streetNumberSort element and the sort arrows within it
const streetNumberSort = document.getElementById('streetNumberSort');
const streetNumberArrows = streetNumberSort.querySelectorAll('.sort-arrow');

// Add an event listener for click on the streetNumberSort element
streetNumberSort.addEventListener('click', () => {
    // Check the current sorting state
    const isAscending = streetNumberArrows[0].classList.contains('sort-up');
    
    // Sort the column based on the current state
    if (isAscending) {
        // Sort in descending order
        sortDescendingByStreetNumber();
        streetNumberArrows[0].classList.remove('sort-up');
        streetNumberArrows[1].classList.add('sort-down');
    } else {
        // Sort in ascending order
        sortAscendingByStreetNumber();
        streetNumberArrows[0].classList.add('sort-up');
        streetNumberArrows[1].classList.remove('sort-down');
    }
});

// Function to sort the column "Street Number" in ascending order
function sortAscendingByStreetNumber() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1); // Get the table rows (excluding the header)
    rows.sort((a, b) => {
        const streetNumberA = parseInt(a.cells[2].textContent.trim()); // Get the street number value from the third column (index 2)
        const streetNumberB = parseInt(b.cells[2].textContent.trim());
        return streetNumberA - streetNumberB; // Sort the street number values in ascending order
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row)); // Rearrange the table rows according to the sorting
}

// Function to sort the column "Street Number" in descending order
function sortDescendingByStreetNumber() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1); // Get the table rows (excluding the header)
    rows.sort((a, b) => {
        const streetNumberA = parseInt(a.cells[2].textContent.trim()); // Get the street number value from the third column (index 2)
        const streetNumberB = parseInt(b.cells[2].textContent.trim());
        return streetNumberB - streetNumberA; // Sort the street number values in descending order
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row)); // Rearrange the table rows according to the sorting
}


// Get the areaSizeSort element and the sort arrows within it
const areaSizeSort = document.getElementById('areaSizeSort');
const areaSizeArrows = areaSizeSort.querySelectorAll('.sort-arrow');

// Add an event listener for click on the areaSizeSort element
areaSizeSort.addEventListener('click', () => {
    // Check the current sorting state
    const isAscending = areaSizeArrows[0].classList.contains('sort-up');
    
    // Sort the column based on the current state
    if (isAscending) {
        // Sort in descending order
        sortDescendingByAreaSize();
        areaSizeArrows[0].classList.remove('sort-up');
        areaSizeArrows[1].classList.add('sort-down');
    } else {
        // Sort in ascending order
        sortAscendingByAreaSize();
        areaSizeArrows[0].classList.add('sort-up');
        areaSizeArrows[1].classList.remove('sort-down');
    }
});

// Function to sort the column "Area Size" in ascending order
function sortAscendingByAreaSize() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1); // Get the table rows (excluding the header)
    rows.sort((a, b) => {
        const areaSizeA = parseFloat(a.cells[3].textContent.trim()); // Get the area size value from the fourth column (index 3)
        const areaSizeB = parseFloat(b.cells[3].textContent.trim());
        return areaSizeA - areaSizeB; // Sort the area size values in ascending order
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row)); // Rearrange the table rows according to the sorting
}

// Function to sort the column "Area Size" in descending order
function sortDescendingByAreaSize() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1); // Get the table rows (excluding the header)
    rows.sort((a, b) => {
        const areaSizeA = parseFloat(a.cells[3].textContent.trim()); // Get the area size value from the fourth column (index 3)
        const areaSizeB = parseFloat(b.cells[3].textContent.trim());
        return areaSizeB - areaSizeA; // Sort the area size values in descending order
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row)); // Rearrange the table rows according to the sorting
}

// Get the yearBuiltSort element and the sort arrows within it
const yearBuiltSort = document.getElementById('yearBuiltSort');
const yearBuiltArrows = yearBuiltSort.querySelectorAll('.sort-arrow');

// Add an event listener for click on the yearBuiltSort element
yearBuiltSort.addEventListener('click', () => {
    // Check the current sorting state
    const isAscending = yearBuiltArrows[0].classList.contains('sort-up');
    
    // Sort the column based on the current state
    if (isAscending) {
        // Sort in descending order
        sortDescendingByYearBuilt();
        // Remove the sort-up class and add the sort-down class for the ascending arrow
        yearBuiltArrows[0].classList.remove('sort-up');
        yearBuiltArrows[1].classList.add('sort-down');
    } else {
        // Sort in ascending order
        sortAscendingByYearBuilt();
        // Add the sort-up class and remove the sort-down class for the descending arrow
        yearBuiltArrows[0].classList.add('sort-up');
        yearBuiltArrows[1].classList.remove('sort-down');
    }
});

// Function to sort the column "Year Built" in ascending order
function sortAscendingByYearBuilt() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1); // Get the table rows (excluding the header)
    rows.sort((a, b) => {
        const yearBuiltA = parseFloat(a.cells[5].textContent.trim()); // Get the year built value from the sixth column (index 5)
        const yearBuiltB = parseFloat(b.cells[5].textContent.trim());
        return yearBuiltA - yearBuiltB; // Sort the year built values in ascending order
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row)); // Rearrange the table rows according to the sorting
}

// Function to sort the column "Year Built" in descending order
function sortDescendingByYearBuilt() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1); // Get the table rows (excluding the header)
    rows.sort((a, b) => {
        const yearBuiltA = parseFloat(a.cells[5].textContent.trim()); // Get the year built value from the sixth column (index 5)
        const yearBuiltB = parseFloat(b.cells[5].textContent.trim());
        return yearBuiltB - yearBuiltA; // Sort the year built values in descending order
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row)); // Rearrange the table rows according to the sorting
}

// Get the th element and the sort arrows with the class sort-arrow for the "Rent Price" column
const rentPriceSort = document.getElementById('rentPriceSort');
const rentPriceArrows = rentPriceSort.querySelectorAll('.sort-arrow');

// Add an event listener for click on the th element for the "Rent Price" column
rentPriceSort.addEventListener('click', () => {
    // Check the current sorting state
    const isAscending = rentPriceArrows[0].classList.contains('sort-up');
    
    // Sort the column based on the current state
    if (isAscending) {
        // Sort in descending order
        sortDescendingByRentPrice();
        // Remove the sort-up class and add the sort-down class for the ascending arrow
        rentPriceArrows[0].classList.remove('sort-up');
        rentPriceArrows[1].classList.add('sort-down');
    } else {
        // Sort in ascending order
        sortAscendingByRentPrice();
        // Add the sort-up class and remove the sort-down class for the descending arrow
        rentPriceArrows[0].classList.add('sort-up');
        rentPriceArrows[1].classList.remove('sort-down');
    }
});

// Function to sort in ascending order by rent price
function sortAscendingByRentPrice() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1); // Get the table rows (excluding the header)
    rows.sort((a, b) => {
        const rentPriceA = parseFloat(a.cells[5].textContent.trim()); // Get the rent price value from the first row (the "Rent Price" column is the sixth column, so the index is 5)
        const rentPriceB = parseFloat(b.cells[5].textContent.trim()); // Get the rent price value from the second row
        return rentPriceA - rentPriceB; // Sort the rent price values in ascending order
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row)); // Rearrange the table rows according to the sorting
}

// Function to sort in descending order by rent price
function sortDescendingByRentPrice() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1); // Get the table rows (excluding the header)
    rows.sort((a, b) => {
        const rentPriceA = parseFloat(a.cells[5].textContent.trim()); // Get the rent price value from the first row (the "Rent Price" column is the sixth column, so the index is 5)
        const rentPriceB = parseFloat(b.cells[5].textContent.trim()); // Get the rent price value from the second row
        return rentPriceB - rentPriceA; // Sort the rent price values in descending order
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row)); // Rearrange the table rows according to the sorting
}

// Get the th element and the sort arrows with the class sort-arrow for the "Date Available" column
const dateAvailableSort = document.getElementById('dateAvailableSort');
const dateAvailableArrows = dateAvailableSort.querySelectorAll('.sort-arrow');

// Add an event listener for click on the th element for the "Date Available" column
dateAvailableSort.addEventListener('click', () => {
    // Check the current sorting state
    const isAscending = dateAvailableArrows[0].classList.contains('sort-up');
    
    // Sort the column based on the current state
    if (isAscending) {
        // Sort in descending order
        sortDescendingByDateAvailable();
        // Remove the sort-up class and add the sort-down class for the ascending arrow
        dateAvailableArrows[0].classList.remove('sort-up');
        dateAvailableArrows[1].classList.add('sort-down');
    } else {
        // Sort in ascending order
        sortAscendingByDateAvailable();
        // Add the sort-up class and remove the sort-down class for the descending arrow
        dateAvailableArrows[0].classList.add('sort-up');
        dateAvailableArrows[1].classList.remove('sort-down');
    }
});

// Function to sort in ascending order by date available
function sortAscendingByDateAvailable() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1);
    rows.sort((a, b) => {
        const dateAvailableA = new Date(a.cells[5].textContent.trim()); // The "Date Available" column is the sixth column (index 5)
        const dateAvailableB = new Date(b.cells[5].textContent.trim());
        return dateAvailableA - dateAvailableB;
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row));
}

// Function to sort in descending order by date available
function sortDescendingByDateAvailable() {
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1);
    rows.sort((a, b) => {
        const dateAvailableA = new Date(a.cells[5].textContent.trim()); // The "Date Available" column is the sixth column (index 5)
        const dateAvailableB = new Date(b.cells[5].textContent.trim());
        return dateAvailableB - dateAvailableA;
    });
    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row));
}

const hasACSort = document.getElementById('hasACSort');
const hasACSortArrows = hasACSort.querySelectorAll('.sort-arrow');

hasACSort.addEventListener('click', () => {
    const isAscending = hasACSortArrows[0].classList.contains('sort-up');
    const rows = Array.from(document.querySelectorAll("#flatDataTable tr")).slice(1);
    rows.sort((a, b) => {
        const hasACA = a.cells[4].textContent.trim().toUpperCase(); // Colțul "Has AC" este a șasea coloană (index 5)
        const hasACB = b.cells[4].textContent.trim().toUpperCase();
        if (isAscending) {
            if (hasACA === 'YES' && hasACB === 'NO') return -1;
            if (hasACA === 'NO' && hasACB === 'YES') return 1;
        } else {
            if (hasACA === 'YES' && hasACB === 'NO') return 1;
            if (hasACA === 'NO' && hasACB === 'YES') return -1;
        }
        return 0;
    });

    const flatDataTable = document.getElementById("flatDataTable");
    rows.forEach(row => flatDataTable.appendChild(row));

    // Schimbați direcția săgeții în funcție de starea sortării
    hasACSortArrows.forEach(arrow => arrow.classList.toggle('sort-up', !isAscending));
    hasACSortArrows.forEach(arrow => arrow.classList.toggle('sort-down', isAscending));
}); 

