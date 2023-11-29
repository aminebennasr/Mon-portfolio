// Fonction de validation du formulaire de contact
function validateForm() {
    // Récupération des valeurs des champs (nom, email et message)
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Vérification de champs vides
    if (name === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs.");
        return false;
    }

    // Validation du format de l'adresse email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return false;
    }

    // Vérification de la longueur du message (ne doit pas dépasser 500 caractères)
    if (message.length > 500) {
        alert("La longueur du message ne doit pas dépasser 500 caractères.");
        return false;
    }

    // Confirmation de la soumission réussie du formulaire
    alert("Formulaire soumis avec succès!");
    // Réinitialisation du formulaire
    document.getElementById('contactForm').reset();
}
