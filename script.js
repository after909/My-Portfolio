const switchElement = document.querySelector('.switch');
switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchElement.classList.toggle('switch-light');
})
