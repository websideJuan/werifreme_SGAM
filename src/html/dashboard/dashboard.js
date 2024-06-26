window.addEventListener('DOMContentLoaded', () => main())
const patients = [
  {
    name: 'Juan',
    lastname: 'Perez',
    email: '',
    address: 'Callesita 123',
    phone: '8278293',
    rut: '1234567-0',
    age:  30,
    weight: 80,
    height: 1.80,
    bloodType: 'A+',
    gender: 'Masculino',
    alergies: 'Ninguna',
    diseases: 'Ninguna',
    treatments: 'Ninguna',
    observations: 'Ninguna',
    doctor: [
      {
        name: 'Francisco',
        lastname: 'Gonzalez',
        email: '    ',  
        phone: '12345678',
        workingRange: 'Medico',
      }
    ]
  }
]

localStorage.setItem('patients', JSON.stringify(patients))


const main = () => {
  const users = localStorage.getItem('users')
  const parserUser = JSON.parse(users)

  const root = document.createElement('div')
  root.classList.add('dashboard__form')

  const title = document.querySelector('title').textContent
  title.replace('user', parserUser.nameUser)

  root.innerHTML = `
    <h5 class="dashboard_title">Bienvenido ${parserUser.workingRange}: ${parserUser.nameUser} ${parserUser.userlastname}</h5>
    <p class="dashboard_text">Horas de pacientes</p>

    <div class="glass-effect"> 
      <form class="form" id="formActionRut">
        <div class="form-group">
          <label class="form-label" for"rutPaciente">
            Digite el RUN del paciente.
          </label>
          <input type"text" class="form-control" placeholder="1234567-0" id="rutPaciente" name="rutPaciente"/>
        </div>

        <button class="btn btn--rut">
          Comprobar
        </button>
      </form>
    </div>
  `

  document.querySelector('.dashboard__body').appendChild(root)


  document.querySelector('#formActionRut').addEventListener('submit', e => {
    e.preventDefault()
    const rutPatient = e.target.querySelector('#rutPaciente')
    const patients = JSON.parse(localStorage.getItem('patients'))
    
    console.log(rutPatient.name)
    if (rutPatient.value === '') return alert(`Campo ${rutPatient.name} es requerido!`)
  
    const resutl = patients.find(patient => patient.rut === rutPatient.value)

    if (!resutl) return alert(`El paciente con el Rut:${rutPatient.value} no tiene una cita  medica`) 

    const popup = document.createElement('div')
    popup.classList.add('popup')

    popup.innerHTML = `
      <div class="popup-content glass-effect">
        <h2 class="popup-title">
          Doctor tratante
        </h2>
        <p class="popup-text">
          -${resutl.doctor[0].name}
        </p>

        <h2 class="popup-title">
          Tipo de especialidad
        </h2>
        <p class="popup-text">
          -Medicina general
        </p>

        <h2 class="popup-title">
          Horario
        </h2>
        <p class="popup-text">
          -08:30
        </p>

        <h1 class="popup-title">
          Observaciones
        </h1>
        <p class="popup-text">
          -Paciente presenta dolor de cabeza, se recomienda tratamiento para el dolor de cabeza.  
        </p>

      </div
    `

    document.body.appendChild(popup)
  })
}