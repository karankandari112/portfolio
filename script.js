

// ham burger


const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// send message pop up


const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Message sent successfully!");
});



// theme button

const themeBtn=document.getElementById("theme-btn");
themeBtn.addEventListener("click",function(){
    document.body.classList.toggle("light-mode")

})