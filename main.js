import './scss/style.scss';

const menuButton = document.querySelector('.menu-closed');

// Create the navigation links for the open menu
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

// Create the close menu icon
const closeMenuIcon = document.createElement('img');
closeMenuIcon.src = './assets/menu/close-menu-svg.png';
closeMenuIcon.setAttribute('width', '35')
closeMenuIcon.setAttribute('height', '35')

// Create the open menu 
const openMenu = document.createElement('div');
openMenu.className = 'open-menu hidden';
openMenu.appendChild(menuLinks);
openMenu.appendChild(closeMenuIcon);
document.body.appendChild(openMenu);

// Event listeners for the open and close menu icons
menuButton.addEventListener('click', () => {
    openMenu.classList.remove('hidden');
});

closeMenuIcon.addEventListener('click', () => {
    openMenu.classList.add('hidden');
});
