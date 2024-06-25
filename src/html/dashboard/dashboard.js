window.addEventListener('DOMContentLoaded', () => main())

const main = () => {
  const users = localStorage.getItem('users')
  const parserUser = JSON.parse(users)

  const root = document.createElement('div')
  root.classList.add('dashboard__form')

  root.innerHTML = `

    <h5 style="font-size: 2.5rem;">Bienvenido ${parserUser.workingRange}: ${parserUser.nameUser} ${parserUser.userlastname}</h5>
    <p style="font-size: 1.8rem;">Horas de pacientes</p>

    <div class="glass-effect"> 
      <form class="form">
        <div class="form-group">
          <label class="form-label" for"rutPaciente">
            Digite el RUN del paciente.
          </label>
          <input type"text" class="form-control" placeholder="1234567-0" id="rutPaciente" />
        </div>

        <button class="btn btn--rut">
          Comprobar
        </button>
      </form>
    </div>


  `

  document.querySelector('.dashboard__body').appendChild(root)
}