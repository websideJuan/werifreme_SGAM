window.addEventListener('DOMContentLoaded', main())

function main () {
  const INPUT_PASSWORD = document.querySelector('#password')
  const BTN_SUBMIT = document.querySelector('.btn--login')
  const users = [
    {
      nameUser: 'Juan',
      userlastname: 'Perez',
      email: 'juan.sgam@gmail.com',
      workingRange: 'Medico',
      password: 'Francisco10*'
    }
  ]

  localStorage.setItem('users', JSON.stringify(users[0]))


  INPUT_PASSWORD.addEventListener('input', e => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
    const isvalid = regex.test(e.target.value)

    if (!isvalid) {
      return null
    }

    BTN_SUBMIT.classList.remove('inactive')
    dataUserLogin()
  })

  const dataUserLogin = () => {
    BTN_SUBMIT.addEventListener("click", e => {
      e.preventDefault()
      const currentInput = e.target.parentElement
      const anchor = document.createElement('a')


      const dataUserLogin = {
        userName: currentInput.querySelector('#username').value,
        password: currentInput.querySelector('#password').value
      }

      const existingUser = existingUserValidator(dataUserLogin.password, dataUserLogin.userName)
      

      if (!existingUser) return alert('usuario o contraseña incorrecta')

      anchor.setAttribute('href', './src/html/dashboard/dashboard.html')
      anchor.click()
    })
  }

  const existingUserValidator = (userPassword, nameUser) => {
    const userDate = localStorage.getItem('users')
    const parserUser = JSON.parse(userDate)
  
    return parserUser.password === userPassword && parserUser.email === nameUser
  }
  
}