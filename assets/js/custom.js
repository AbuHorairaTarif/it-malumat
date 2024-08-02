let mode = document.getElementById('mode');
let bodyTag = document.getElementById("body");

mode.addEventListener("click", function() {
    bodyTag.classList.toggle("dark");
});

