const navbar = document.querySelector('[data-navbar-nav]')
const navBtn = document.querySelector('[data-toggle-btn]')

navBtn.addEventListener('click' ,() => {
    navbar.classList.toggle('active')
    navBtn.classList.toggle('active')
})