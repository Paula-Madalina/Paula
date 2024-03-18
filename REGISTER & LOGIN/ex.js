// Definim obiectul utilizatorului
let user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// Recuperăm array-ul din localStorage (dacă există) sau creăm unul gol
let usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];

// Adăugăm obiectul utilizatorului în array
usersArray.push(user);

// Serializăm array-ul actualizat pentru a-l salva în localStorage
let serializedUsersArray = JSON.stringify(usersArray);

// Salvăm array-ul serializat în localStorage sub cheia "usersArray"
localStorage.setItem("usersArray", serializedUsersArray);
