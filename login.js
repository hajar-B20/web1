
const users = {
    "admin": "12345",
    "user1": "password",
    "user2": "qwerty"
};

// Gestion du bouton de connexion
document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (users[username] && users[username] === password) {
        errorMessage.style.color = "green";
        errorMessage.textContent = "Connexion réussie !";
    } else {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
    }
});
