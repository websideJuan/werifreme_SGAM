const navbar = document.querySelector('.dashboard__navbar')
const navbarContent = navbar.childNodes[1]
const navbarBtn = navbar.childNodes[3].childNodes[1]


navbarBtn.addEventListener('click', () => {
  const isShow = navbarContent.classList.toggle('show')
  const navbarContainer = navbarContent.childNodes[1]
  
  if (isShow) {
    navbarBtn.innerHTML = '<i class="fa-solid fa-xmark fa-lg"></i>'
    navbarContainer.style.transform = 'translate(0)'
    navbarContent.style.transform = 'translate(0)'
  } else {
    navbarBtn.innerHTML = '<i class="fa-solid fa-bars fa-lg"></i>'
    navbarContainer.style.transform = 'translate(-100%)'
    navbarContent.style.transform = 'translate(-100%)'
  }


  
})

