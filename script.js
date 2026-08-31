```javascript
// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close menu when clicking a link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;


    // CHANGE YOUR WHATSAPP NUMBER HERE

    const whatsappNumber = "919999999999";


    const text =
        "Hello VM Web Solutions!%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Service: " + encodeURIComponent(service) + "%0A" +
        "Message: " + encodeURIComponent(message);


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        text;


    window.open(whatsappURL, "_blank");

});
```
