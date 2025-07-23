
const navToggle = document.querySelector('.nav-toggle');

const navItems = document.querySelector('.nav-items');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navItems.classList.toggle('active');
}); 
