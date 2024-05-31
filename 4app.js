const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo');

// mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const home = document.querySelector('#home-page')
    const about = document.querySelector('#about-page')
    const edu = document.querySelector('#education-page')
    const likes = document.querySelector('#likes-page')
    const con = document.querySelector('#gallery-page')
    let scrollPos = window.scrollY
    console.log(scrollPos);

    if(window.innerWidth > 960 && scrollPos < 947) {
        home.classList.add('highlight') 
        about.classList.remove('highlight')
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        about.classList.add('highlight');
        home.classList.remove('highlight');
        edu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
    
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);
