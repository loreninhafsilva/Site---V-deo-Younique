var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var contentFirst = document.querySelector(".first-content");
var contentSecond = document.querySelector(".second-content");
var body = document.querySelector("body");

btnSignin.addEventListener("click", function (){
    if (window.innerWidth <= 850) {
        contentFirst.style.display = "none";
        contentSecond.style.display = "flex";
    }
    body.className = 'sign-in-js';
})

btnSignup.addEventListener("click", function (){
    if (window.innerWidth <= 850) {
        contentFirst.style.display = "flex";
        contentSecond.style.display = "none";
    }
    body.className = 'sign-up-js';
})
