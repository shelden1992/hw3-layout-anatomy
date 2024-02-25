document.addEventListener('DOMContentLoaded', function () {
    const buttonMenu = document.querySelector('.mobile-menu-button');
    buttonMenu.addEventListener('click', function () {
        document.querySelector('.header-navigation').classList.toggle('visible');
        document.querySelector(".logo-img").classList.toggle('visible');
        buttonMenu.classList.toggle('open')
    });

});