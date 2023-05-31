const toggle= document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');
const bannert = document.querySelector('.banner');

toggle.addEventListener('click' ,()=> {
	navLinks.classList.toggle('active')
    bannert.classList.toggle('active');
    
})


const menu = document.querySelector('.menu')
const nav = document.querySelector('.navbar')

menu.addEventListener('click', ()=>{
    nav.classList.toggle('change')
    menu.classList.toggle('change')
})