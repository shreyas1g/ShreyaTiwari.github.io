const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-list ul');
const menu_item = document.querySelectorAll('.main');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	
	mobile_menu.classList.toggle('active');
    mobile_item.classList.toggle('active');
});