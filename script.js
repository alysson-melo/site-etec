// CALL Fancybox
Fancybox.bind('[data-fancybox]', {
})

Fancybox.bind('[data-fancybox="gallery"]', {
})

// FECHAR MENU AO CLICAR NO LINK
const menuCursos = document.querySelectorAll('.dropdown-item')
const menuItems = document.querySelectorAll('.js')

menuItems.forEach(function (menuItems) {
    menuItems.addEventListener('click', () => {

        const btnMenu = document.querySelector('.navbar-toggler')
        const optionsMenu = document.querySelector('.navbar-collapse')

        btnMenu.classList.add('collapsed')
        optionsMenu.classList.remove('show')
        btnMenu.setAttribute('aria-expanded', 'false')

    })
})

menuCursos.forEach(function (menuCursos) {
    menuCursos.addEventListener('click', () => {

        const btnMenu = document.querySelector('.navbar-toggler')
        const optionsMenu = document.querySelector('.navbar-collapse')

        btnMenu.classList.add('collapsed')
        optionsMenu.classList.remove('show')
        btnMenu.setAttribute('aria-expanded', 'false')

    })
})

// VALIDAÇÃO DO CONTATO
const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const messageTextarea = document.querySelector("message")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome")
        return
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email")
        return
    }

    form.submit()
})

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-z0-9._-]+@[a-zA-z0._-]+\.[a-zA-Z]{2,}$/
    )

    if (emailRegex.test(email)) {
        return true
    }
    return false

}

