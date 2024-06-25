window.addEventListener('DOMContentLoaded', main())

function main () {
  const INPUT_PASSWORD = document.querySelector('#password')
  const INPUT_USERNAME = document.querySelector('#username')
  const BTN_SUBMIT = document.querySelector('.btn--login')


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

      const existingUser = existingUserValidator(dataUserLogin.password)
      

      if (!existingUser) return alert('usuario o contraseña incorrecta')

      anchor.setAttribute('href', './src/html/dashboard/dashboard.html')
      anchor.click()
    })
  }

  const existingUserValidator = (userPassword) => {
    const userDate = localStorage.getItem('users')
    const parserUser = JSON.parse(userDate)
  
    return parserUser.passwordUser === userPassword
  }
  
}