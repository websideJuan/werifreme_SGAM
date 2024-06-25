window.addEventListener('DOMContentLoaded', () => main())

function main () {
  const form = document.getElementById('register-form')  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    localStorage.setItem('users', JSON.stringify(data))

    alert('Usuário cadastrado com sucesso!')
    window.location.href = '/'
  })
}