import router from './router.js';

addEventListener('DOMContentLoaded', () => {
    router.init();

    const toggleButton = document.getElementById('toggleButton');
    const elementToToggle = document.getElementById('navbarSupportedContent');
    let isOpen = false;

    toggleButton.addEventListener('click', () => {
        isOpen = !isOpen;
        elementToToggle.style.display = isOpen ? 'block' : 'none';
    });
});
