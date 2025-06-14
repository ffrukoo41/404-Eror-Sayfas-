document.addEventListener("DOMContentLoaded", function() {
    const caveman = document.getElementById("caveman");
    caveman.addEventListener("mouseover", function() {
        caveman.style.transform = "rotate(10deg)";
    });
    caveman.addEventListener("mouseout", function() {
        caveman.style.transform = "rotate(0deg)";
    });
});
