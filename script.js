const navToggle = document.querySelector(".mobile-nav-toggle");


// FORMATTING NAVIGATION BAR 
navToggle.addEventListener("click", ()=>{
    document.querySelector(".primary-nav").toggleAttribute("data-visible");
    // document.querySelector("header").toggleAttribute("data-opened");
    navToggle.toggleAttribute("data-opened");
})