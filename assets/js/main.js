function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}


/*--------Dark mode--------*/
const body = document.querySelector("body"), // Corrected querySelector
    toggleSwitch = document.getElementById("toggle-switch"); // Corrected getElementById

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});


/*------Typing Effect--------*/
var typingEffect = new Typed(".typedText", {
    strings: ["Cybersecurity Student", "Frontend Developer", "Designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000 // Remove the semicolon here
});

/*-- -------Scr0ll animation-------------*/
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 }); // Corrected typo
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });
sr.reveal(".experience-container", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

