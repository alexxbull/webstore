const sideNav = document.querySelector('.side-nav')

const openSideNav = () => {
    sideNav.style.width = '70vw'
}

const closeSideNav = () => {
    sideNav.style.width = '0'
}

const sideNavIcon = document.querySelector('.side-nav-icon')
sideNavIcon.addEventListener('click', openSideNav)


const sideNavCloseBtn = document.querySelector('.side-nav-close-btn')
sideNavCloseBtn.addEventListener('click', closeSideNav)