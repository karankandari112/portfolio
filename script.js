const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Message sent successfully!");
});
