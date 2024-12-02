
function sendEmail(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (emailInput) {
        message.textContent = `Un email a été envoyé à ${emailInput} pour réinitialiser votre mot de passe.`;
        message.classList.add("visible");

        document.getElementById("passwordResetForm").reset();
    } else {
        alert("Veuillez entrer une adresse email valide.");
    }
}


