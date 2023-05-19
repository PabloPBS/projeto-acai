function show() {
    let menuMobile = document.querySelector('#menu');

    if (menuMobile.style.display === 'none') {
        menuMobile.style.display = 'flex';
        menuMobile.style.top = '0';
    } else {
        menuMobile.style.display = 'none';
        menuMobile.style.top = '120%';
    }
    
    
    /*if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon')
    } else {
        menuMobile.classList.add('open');
    }*/
}