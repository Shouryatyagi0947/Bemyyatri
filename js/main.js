/**
 * BEMYIYATRI MAIN JAVASCRIPT
 */
document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            const icon = menuBtn.querySelector("i");
            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    }

    // FAQ Accordion
    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        header.addEventListener("click", () => {
            const currentlyActive = document.querySelector(".accordion-item.active");
            if(currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove("active");
            }
            item.classList.toggle("active");
        });
    });


 // Dynamically update Floating WhatsApp Button with correct number & message from config.js
    const floatingBtn = document.querySelector(".floating-whatsapp");
    if (floatingBtn && typeof CONFIG !== "undefined") {
        const phone = CONFIG.whatsapp.number1; // Pulls 919711909240
        const message = CONFIG.whatsapp.defaultMessage || "Hello Bemyyatri, I am interested in planning an international trip.";
        floatingBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    }


});