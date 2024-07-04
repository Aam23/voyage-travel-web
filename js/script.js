function userScroll() {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.navbar-brand img');
    const button = document.querySelector('.nav-item .btn');
    const menuIcon = document.querySelector('.navbar-toggler svg');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'navbar-sticky');
            navbar.classList.remove('navbar-dark');
            logo.src = 'images/logo-light.png'; // Adjust the path to your light logo
            button.classList.add('btn-outline-dark'); // Add class for dark button outline
            menuIcon.querySelector('path').setAttribute('stroke', 'black'); // Adjust SVG stroke color to black
        } else {
            navbar.classList.remove('bg-white', 'navbar-sticky');
            navbar.classList.add('navbar-dark');
            logo.src = 'images/logo-dark.png'; // Adjust the path to your dark logo
            button.classList.remove('btn-outline-dark'); // Remove dark button outline class
            menuIcon.querySelector('path').setAttribute('stroke', 'white'); // Adjust SVG stroke color to white
        }
    });
}




document.addEventListener('DOMContentLoaded', userScroll);