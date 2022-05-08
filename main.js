function onScroll(){
    if(scrollY > 0){
        navbar.classList.add('scroll');
        //document.getElementById('navbar').setAttribute('class', 'scroll');
    }
    else{
        navbar.classList.remove('scroll');
        //document.getElementById('navbar').setAttribute('class', '');
    }
}

function openMenu(){
    body.classList.add('menu-expanded');
}

function closeMenu(){
    body.classList.remove('menu-expanded');
}