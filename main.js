// JavaScript for handling responsive navigation
const nav4 = document.querySelector('.nav4');
const options = document.querySelector('.options');

nav4.addEventListener('click', () => {
    options.style.display = options.style.display === 'none' ? 'flex' : 'none';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        options.style.display = 'none';
    }
});
