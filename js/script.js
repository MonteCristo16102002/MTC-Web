let loginForm = document.querySelector('.login-form');

document.querySelector('.icon-two').onclick = () =>{
    loginForm.classList.add('active')
}

document.querySelector('#close-form').onclick = () =>{
    loginForm.classList.remove('active')
}

let iconOne = document.querySelector('.icon-one')
let navBar = document.querySelector('header nav')

iconOne.onclick = () =>{
    iconOne.classList.toggle('fa-times');
    navBar.classList.toggle('active')
}

window.onscroll= () =>{
    loginForm.classList.remove('active')
    iconOne.classList.remove('fa-times');
    navBar.classList.remove('active')

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active')
    }
    else{
        document.querySelector('.header').classList.remove('active')
    }
}