// JavaScript for menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const sideMenu = document.getElementById('sidemenu');

    openMenuBtn.addEventListener('click', function () {
        sideMenu.style.right = '0'; // Show the menu
        openMenuBtn.style.display = 'none'; // Hide the open menu button
        closeMenuBtn.style.display = 'block'; // Show the close menu button
    });

    closeMenuBtn.addEventListener('click', function () {
        sideMenu.style.right = '-100%'; // Hide the menu
        openMenuBtn.style.display = 'block'; // Show the open menu button
        closeMenuBtn.style.display = 'none'; // Hide the close menu button
    });
});
