/**
 * Gère l'affichage et les interactions de la page de contact
 */

// document.querySelector(".form input[type='button']").addEventListener("click", () => {
//     let valid = true;
//     for (const input of document.querySelectorAll(".form input, .form textarea")) {
//         valid = valid && input.reportValidity();
//         if (!valid) {
//             break;
//         }
//     }
//     if (valid) {
//         alert("Votre message a bien été envoyé!");
//     }
// });

const formFields = document.querySelectorAll(".form #mail, .form #message");

document.querySelector(".form .btn").addEventListener("click", () => {
    const valid = Array.from(formFields);
    console.log("🚀 ~ file: contact.js:22 ~ document.querySelector ~ valid:", valid);
    const test = valid.every((input) => input.reportValidity());
    console.log("🚀 ~ file: contact.js:23 ~ document.querySelector ~ test:", test);

    if (test) {
        alert("Votre message à bien été envoyé!");
    }
});
