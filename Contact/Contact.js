// Wacht tot de pagina volledig geladen is
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('contactForm');

    // Controleer of het formulier bestaat
    if (!form) {
        console.error('Contactformulier niet gevonden!');
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const naam      = document.getElementById('naam').value;
        const email     = document.getElementById('email').value;
        const telefoon  = document.getElementById('telefoon').value;
        const onderwerp = document.getElementById('onderwerp').value;
        const bericht   = document.getElementById('bericht').value;

        const subject = `contactaanvraag via website van ${naam}`;

        const body =
            `Naam: ${naam}\r\n` +
            `E-mail: ${email}\r\n` +
            `Telefoon: ${telefoon || '—'}\r\n` +
            `Onderwerp: ${onderwerp || '—'}\r\n` +
            `\r\n` +
            `Bericht:\r\n${bericht}`;

        // Pas deze twee adressen aan ↓
        const naarAdres = "vanparyscharlotte@hotmail.com";
        const ccAdres   = "info@schoenmakerijrene.be"; // laat leeg als je geen CC wil

        // Bouw de parameters
        const params = new URLSearchParams();

        if (ccAdres) {
            params.append('cc', ccAdres);
        }
        params.append('subject', subject);
        params.append('body', body);

        const mailtoLink = `mailto:${naarAdres}?${params.toString()}`;

        console.log('Mailto link:', mailtoLink);

        window.location.href = mailtoLink;
    });

});
