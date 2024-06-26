window.addEventListener('DOMContentLoaded', main())

function main () {
  const form = document.getElementById('patients-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    localStorage.setItem('patients', JSON.stringify(data))

    alert('Paciente registrado con éxito!')
    
    const anchor = document.createElement('a')
    anchor.setAttribute('href', './src/html/pasiente/pasiente.html')
    anchor.click()
  })

}