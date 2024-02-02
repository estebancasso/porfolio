const nav = document.querySelector('.nav')
nav.addEventListener('click', function (e) {
    if(e.target.closest('.nav__a')) {
        const links = document.querySelectorAll('.nav__a')
        for (const link of links) {
           link.classList.remove('active') 
        }
        e.target.classList.add('active')
    }
})

//? RESPONSIVE MENU
document.addEventListener('DOMContentLoaded', function () {

    const menu = document.getElementById('menu');
  
    const navMenu = document.querySelector('.nav--menu')
  
    menu.addEventListener('click', function () {
      // window.alert('clickkkkkkkkkkkk 👌')
      navMenu.classList.toggle('transalate--menu')
    })
  
  })