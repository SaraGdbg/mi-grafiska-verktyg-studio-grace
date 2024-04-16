import './scss/style.scss';

const menuButton = document.querySelector('.menu-closed');
const menuLinks = document.createElement('div');

menuLinks.className = 'menu-links';
menuLinks.innerHTML = `
    <a class="hyperlink" href="#">Link</a>
    <a class="hyperlink" href="#">Link</a>
    <a class="hyperlink" href="#">Link</a>
    <a class="hyperlink" href="#">Link</a>
    <a class="hyperlink" href="#">Link</a>
    <a class="hyperlink" href="#">Link</a>
    <a class="hyperlink" href="#">Link</a>
`;

const openMenu = document.createElement('div');
openMenu.className = 'open-menu hidden';
openMenu.appendChild(menuLinks);
document.body.appendChild(openMenu);


menuButton.addEventListener('click', () => {
    openMenu.classList.remove('hidden');
});

