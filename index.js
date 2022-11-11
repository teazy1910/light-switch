let btn = document.querySelector("button");
let body = document.querySelector("body");

// Eventlistener to change light and night mode
btn.addEventListener("click", function() {

    btn.classList.toggle("switch-active");
    body.classList.toggle("switch-active");

    btn.classList.toggle("border-switch");

    // change document title if "night" or "morning"
    if(btn.classList.contains("switch-active")) {
        document.title="Good Night";

    } else {
        document.title ="Good Morning";
    }

});