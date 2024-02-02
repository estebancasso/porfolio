document.addEventListener("DOMContentLoaded", function () {
    //?boton cambio del tema
  const changeMode = document.querySelector("#toggleModeBtn");

  //?selection del body
  const body = document.querySelector('body')
  changeMode.addEventListener('click', function () {
    const currentMode = changeMode.textContent.trim()

    if(currentMode === 'light_mode') {
        changeMode.textContent = 'dark_mode'
        body.classList.remove('body--dark')
    }else {
        changeMode.textContent = 'light_mode'
        body.classList.add('body--dark')
    }

  })

});


// const body = document.getElementById('body');
// let currentMode = localStorage.getItem('mode') || 'dark-mode'
// body.classList.add(currentMode);

// const toggleModeBtn = document.getElementById('toggleModeBtn')
// toggleModeBtn.addEventListener('click', function () {
//   toggleMode()
// })