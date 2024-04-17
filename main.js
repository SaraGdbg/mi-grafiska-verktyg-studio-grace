import './scss/style.scss';

const menuButton = document.querySelector('.menu-closed');
const menuLinks = document.createElement('div');

menuLinks.className = 'menu-links';
menuLinks.innerHTML = `
    <a class="hyperlink" href="#">Book a studio</a>
    <a class="hyperlink" href="#">Book a session</a>
    <a class="hyperlink" href="#">Our studios</a>
    <a class="hyperlink" href="#">The vision</a>
    <a class="hyperlink" href="#">Our team</a>
    <a class="hyperlink" href="#">Contact us</a>
    <a class="hyperlink" href="#">Faq</a>
`;

const openMenu = document.createElement('div');
openMenu.className = 'open-menu hidden';
openMenu.appendChild(menuLinks);
document.body.appendChild(openMenu);


menuButton.addEventListener('click', () => {
    openMenu.classList.remove('hidden');
});

