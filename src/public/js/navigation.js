const mainNavMenu = document.querySelector('.main-nav__menu')

const openMainNav = () => {
    mainNavMenu.style.width = '70vw'
}

const closeMainNav = () => {
    mainNavMenu.style.width = '0'
}

const mainNavIcon = document.querySelector('.main-nav-icon')
mainNavIcon.addEventListener('click', openMainNav)


const mainNavCloseBtn = document.querySelector('.main-nav-close-btn')
mainNavCloseBtn.addEventListener('click', closeMainNav)