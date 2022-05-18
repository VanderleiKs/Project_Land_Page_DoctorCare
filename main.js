window.addEventListener('scroll', onScroll);
onScroll();

function onScroll(){
    navbarOnScroll();
    BackToTopButton();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight/2; //Linha horizontal no meio da tela
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionEnd = sectionTop + sectionHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    if(sectionTopReachOrPassedTargetLine && sectionEnd >= targetLine){
        document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`).classList.add('active');
    }
    else{
        document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`).classList.remove('active');
    }
}

function navbarOnScroll(){
    if(scrollY > 0){
        navbar.classList.add('scroll');
        //document.getElementById('navbar').setAttribute('class', 'scroll');
    }
    else{
        navbar.classList.remove('scroll');
        //document.getElementById('navbar').setAttribute('class', '');
    }
}

function BackToTopButton(){
    if(scrollY > 500){
        buttonBackToTop.classList.add('show');
        //document.getElementById('navbar').setAttribute('class', 'scroll');
    }
    else{
        buttonBackToTop.classList.remove('show');
        //document.getElementById('navbar').setAttribute('class', '');
    }
}

function openMenu(){
    body.classList.add('menu-expanded');
}

function closeMenu(){
    body.classList.remove('menu-expanded');
}

function mudaCor(){
    body.classList.add('custom');
    closeMenu();
}

ScrollReveal({
    origin: 'top',
    distance: '90px',
    duration: 900,
}).reveal(
`#home,
#home img,
#home .statics,
#services,
#services .cards
`);