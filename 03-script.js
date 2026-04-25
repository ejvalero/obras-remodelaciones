document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");

    // WhatsApp Link Consistency
    const whatsappButtons = document.querySelectorAll(".boton-whatsapp, .wa-link");
    const phoneNumber = "573157503478";
    
    whatsappButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            // If it's a link, we let it handle itself, but we ensure the number is correct if it was hardcoded differently
            // In our case, we updated the HTML, so this is just a backup or for dynamic behavior if needed.
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            // Change hamburger icon to X when active
            hamburger.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
        });

        // Close menu when clicking a link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.textContent = "☰";
            });
        });
    }

    // Scroll Effect for Navbar
    const navbar = document.querySelector(".menu-principal");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});