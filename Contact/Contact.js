document.addEventListener("DOMContentLoaded", () => {

    console.log("Contact.js geladen");

    const form = document.getElementById("contactForm");

    if (!form) {
        console.error("Formulier met id 'contactForm' niet gevonden.");
        return;
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch("send-mail.php", {
                method: "POST",
                body: formData
            });

            const result = await response.text();

            alert(result);
            form.reset();

        } catch (error) {
            console.error(error);
            alert("Er is iets misgegaan.");
        }
    });

});