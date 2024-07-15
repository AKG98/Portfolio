
const menuBtn = document.getElementById('menu');
const sideMenuBar = document.getElementById('side-menu-bar');
const menuBar = document.getElementById('menu-bar');
const closeMenu = document.getElementById('side-cross');

menuBtn.addEventListener('click', () => {
    sideMenuBar.classList.remove('side-menu-inactive');
    sideMenuBar.classList.add('side-menu-active');
    menuBar.classList.remove('menu-container-inactive');
    menuBar.classList.add('menu-container-active');
});

closeMenu.addEventListener('click', () => {
    menuBar.classList.remove('menu-container-active');
    menuBar.classList.add('menu-container-inactive');
    
    sideMenuBar.classList.add('side-menu-inactive');
    setTimeout(() => {
        sideMenuBar.classList.remove('side-menu-active');
    }, 300); // Match this duration with the transition duration
});
