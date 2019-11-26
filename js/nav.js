const burger = document.querySelector('div.burger');
const burgerBtn = document.querySelector('img.burger');
const navDown = document.querySelector('.nav-down');

burger.addEventListener('click', () => {
    navDown.classList.toggle('active');
    if (navDown.classList.contains('active')) {
        if (navDown.dataset.nav) {
            burgerBtn.setAttribute('src', '../img/icons/close.svg')
        } else {
            burgerBtn.setAttribute('src', 'img/icons/close.svg')
        }
    } else {
        if (navDown.dataset.nav) {
            burgerBtn.setAttribute('src', '../img/icons/menu.svg')
        } else {
            burgerBtn.setAttribute('src', 'img/icons/menu.svg')
        }
    }
})
