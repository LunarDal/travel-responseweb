const header = document.querySelector('header')
window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', this.window.scrollY > 180)
})

// responsive menu
let menu = document.querySelector('#menu-icon')
let nav = document.querySelector('.nav')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    nav.classList.toggle('open')
}

// menu scroll
window.onscroll = () => {
    menu.classList.remove('bx-x')
    nav.classList.remove('open')
}