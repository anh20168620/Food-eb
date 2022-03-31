const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Button menu-bar
const menuBar = $('.menu-bar')

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active')
    $('.menu-items').classList.toggle('active')
})

// Scroll
const topElement = $('.top')
const handleScroll = () => {
    if (window.scrollY >= 20) {
        topElement.classList.add('active')
    }
    else {
        topElement.classList.remove('active')
    }
}

window.addEventListener('scroll', handleScroll)

// Active menu

const buttonMenus = $$('.menu-button')
const menuContents = $$('.menu-content')
const line = $('.line')
const menuButtonActive = $('.menu-button.active')

line.style.left = menuButtonActive.offsetLeft + 'px'
line.style.width = menuButtonActive.offsetWidth + 'px'

buttonMenus.forEach((buttonMenu, index) => {
    const menuContent = menuContents[index]

    buttonMenu.onclick = function () {

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        $('.menu-button.active').classList.remove('active')
        $('.menu-content.active').classList.remove('active')

        this.classList.add('active')
        menuContent.classList.add('active')
    }
})

// 