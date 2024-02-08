document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault(); 
    
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error_message");
    const errorIcon = document.getElementById("error_icon");
    const emailBox = document.getElementById("email");
    const submitButton = document.getElementById("submit");
    const email = emailInput.value.trim();
    
    if (email === "") {
        errorMessage.innerText = "Email Address is required."; // zobrazení chybové hlášky
        errorIcon.style.display = "inline-block"; // Zobrazí ikonu chyby
        emailBox.style.border = "2px solid hsl(0, 67%, 68%)"; // změna barvy rámečku
        submitButton.style.top = "1.32em"; // posun pozice ikony
    } 
    
    else if (!isValidEmail(email)) {
        errorMessage.innerText = "Please provide a valid email.";
        errorIcon.style.display = "inline-block"; // 
        emailBox.style.border = "2px solid hsl(0, 67%, 68%)";
        submitButton.style.top = "1.32em"; 
    } 

    else {
        errorMessage.innerText = "";
        errorIcon.style.display = "none"; 
        emailBox.style.border = ""; 
        submitButton.style.top = "";
        emailBox.style.backgroundColor = "hsla(0, 36%, 70%, 0)";
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
