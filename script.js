const switchElement = document.querySelector('.switch');
const footerElement = document.querySelector('footer');
switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    footerElement.classList.toggle('dark');
    switchElement.classList.toggle('switch-light');
})
