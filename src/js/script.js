const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle){
    element.addEventListener('click', function (){
        nav.classList.toggle('show')
    })
}

// quando clicar em um item do menu, esconder o menu

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
    links. addEventListener('click', function (){
        nav.classList.remove('show')
    })
}
// Carrocel Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        767:{
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})