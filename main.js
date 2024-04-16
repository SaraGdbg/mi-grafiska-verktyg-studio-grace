import './scss/style.scss';


const cookieBtn = document.getElementById('cookieBtn');
const cookieBar = document.getElementById('cookieBar');

cookieBtn.addEventListener('click', function() {
    console.log('Knappen klickades!');
    cookieBar.classList.add('hidden');
});
