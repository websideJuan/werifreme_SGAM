window.addEventListener('DOMContentLoaded', main())

function main () {
  const pacientes = localStorage.getItem('patients')
  const parserPaciente = JSON.parse(pacientes)

  const rendPacient = parserPaciente.map(paciente => {
    const root = document.createElement('tbody')
    root.classList.add('table-patient__body')

    root.innerHTML = `
      <tr class="table-patient__row main">
        <th class="table-patient__main">
          <h2> Servicio de Salud <span>SGAM</span></h2>
          <p>Unidad de Urgencia</p>
          <a href="#">www.sgam.cl</a>
          
      </th>

      <tr class="table-patient__row head">
        <th class="table-patient__head">
          <h1>Ficha de ingreso N° 001</h1>
        </th>
      </tr>
      <tr class="table-patient__row rowHead">
        <th class="table-patient__head">Nombre:</th>
        <th class="table-patient__head">Apellido:</th>
        <th class="table-patient__head">Rut:</th>
        <th class="table-patient__head">E. Civil:</th>
        <th class="table-patient__head">Domicilio:</th>
        <th class="table-patient__head">Fono:</th>
        <th class="table-patient__head">C/A:</th>
      </tr>

      <tr class="table-patient__row rowAnswer">
        <td class="table-patient__data">${paciente.name}</td>
        <td class="table-patient__data">${paciente.lastname}</td>
        <td class="table-patient__data">${paciente.rut}</td>
        <td class="table-patient__data">${paciente.bloodType}</td>
        <td class="table-patient__data">${paciente.address}</td>
        <td class="table-patient__data">${paciente.phone}</td>
        <td class="table-patient__data">${paciente.boolean ? 'SI':' '}</td>
      </tr>

      <tr class="table-patient__row rowHeadUrg">
        <th class="table-patient__head"> </th>
        <th class="table-patient__head"> </th>
        <th class="table-patient__head">Sexo:</th>
        <th class="table-patient__head">Edad</th>
        <th class="table-patient__head">G. sanguineo:</th>
        <th class="table-patient__head"> </th>
        <th class="table-patient__head">${paciente.boolean ? ' ' : 'NO'}</th>
      </tr>

      <tr class="table-patient__row rowAnswerUrg">
        <td class="table-patient__data"> </td>
        <td class="table-patient__data"> </td>
        <td class="table-patient__data">${paciente.gender}</td>
        <td class="table-patient__data">${paciente.age}</td>
        <td class="table-patient__data">${paciente.bloodType}</td>
        <td class="table-patient__data"> </td>
        <td class="table-patient__data"> </td>
      </tr>



    `

    return root
  })
  
  rendPacient.forEach(paciente => {
    const table = document.querySelector('#table-patient')
    table.appendChild(paciente)
  })
  

  
}
