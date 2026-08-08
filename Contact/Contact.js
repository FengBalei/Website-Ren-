"use strict";

//wait for document load
window.addEventListener('load', initialize);
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const naam      = document.getElementById('naam').value;
    const email     = document.getElementById('email').value;
    const telefoon  = document.getElementById('telefoon').value;
    const onderwerp = document.getElementById('onderwerp').value;
    const bericht   = document.getElementById('bericht').value;

    // Vast onderwerp: "contactaanvraag via website van <naam klant>"
    const subject = `contactaanvraag via website van ${naam}`;

    const body =
        `Naam: ${naam}\r\n` +
        `E-mail: ${email}\r\n` +
        `Telefoon: ${telefoon || '—'}\r\n` +
        `Onderwerp: ${onderwerp || '—'}\r\n` +
        `\r\n` +
        `Bericht:\r\n${bericht}`;

    // Pas deze twee adressen aan ↓
    const naarAdres = "info@schoenmakerijrene.be";
    const ccAdres   = "vanparyscharlotte@hotmail.com";

    // Bouw de mailto-link zorgvuldig op
    const params = new URLSearchParams({
        cc: ccAdres,
        subject: subject,
        body: body
    });

    const mailtoLink = `mailto:${naarAdres}?${params.toString()}`;

    // Debug: controleer in de console (F12) of de link correct is
    console.log('Mailto link:', mailtoLink);

    window.location.href = mailtoLink;
});

