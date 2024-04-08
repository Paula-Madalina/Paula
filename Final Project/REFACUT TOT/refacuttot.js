$(document).ready(function() {
    // Atașează evenimentul de click pe iconiță
    $('#calendar-icon').click(function() {
        $('#date').datepicker('show'); // Deschide calendarul asociat input-ului de tip date
    });
    
    // Initializează datepicker-ul
    $('#date').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+0", // de la acum până cu 100 de ani în urmă
    });
});


function myMenuFunction() {
    let i = document.querySelector("#navMenu");

    if(i.className === "nav__menu") {
        i.className += " responsive";
    } else {
        i.className = "nav__menu"
    }
}