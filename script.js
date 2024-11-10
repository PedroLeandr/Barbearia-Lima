



document.getElementById("navburgermenu").onclick = function(){

    const icon = document.querySelector("#navburgermenu i");
    const canvasmenu = document.getElementById("canvasmenu");

    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-xmark");
        canvasmenu.style.display = "block";
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
        canvasmenu.style.display = "none";

    }
}
