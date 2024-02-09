let hamburger = document.querySelector(".hamburger");
let crossIcon = document.querySelector(".crossIcon");
hamburger.addEventListener('click', () => {
    let sidebarMenu = document.querySelector(".sidebar-menu");
    sidebarMenu.classList.toggle("show");
    crossIcon.addEventListener('click', () => {
        sidebarMenu.classList.remove("show");
    });
    window.addEventListener('scroll', () => {
        sidebarMenu.classList.remove("show");
    });
});