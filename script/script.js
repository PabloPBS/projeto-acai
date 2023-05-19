let menuMobile = document.querySelector('#menu')
let abrirMenu = document.querySelector('#abrir-menu')
let fecharMenu = document.querySelector('#fechar-menu')

abrirMenu.addEventListener('click', show)
fecharMenu.addEventListener('click', close)

function show() {
    menuMobile.style.display = 'flex'
    menuMobile.style.top = '0'
}
function close() {
    menuMobile.style.top = '-120%'
}