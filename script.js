// CALL Fancybox
Fancybox.bind('[data-fancybox]', {
})

Fancybox.bind('[data-fancybox="gallery"]', {
})

// FECHAR MENU AO CLICAR NO LINK
let menuItems = document.querySelectorAll('.dropdown-item')

menuItems.forEach(function (menuItems) {
    menuItems.addEventListener('click', () => {

        let btnMenu = document.querySelector('.navbar-toggler')
        let optionsMenu = document.querySelector('.navbar-collapse')

        btnMenu.classList.add('collapsed')
        optionsMenu.classList.remove('show')
        btnMenu.setAttribute('aria-expanded', 'false')

    })
})