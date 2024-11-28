const btn = document.querySelector('.icon-menu');
const nav = document.querySelector('.header-nav nav');

btn.onclick=()=>{
    if(nav.classList.contains('active')){
        nav.classList.add('hide');
        nav.classList.remove('active');
        btn.setAttribute('src', './images/icon-hamburger.svg')
    }else{
        nav.classList.add('active');
        nav.classList.remove('hide');
        btn.setAttribute('src', './images/icon-close.svg')
    }
    
}