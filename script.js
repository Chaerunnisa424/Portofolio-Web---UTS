// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navList = document.querySelector(".navlist");

    // Mengaktifkan/menonaktifkan menu navigasi
    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});
