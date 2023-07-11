import { useEffect, useState } from 'react'
import './App.css'
import Formulario from '../pages/Formulario'
import Citas from '../pages/Citas'

function App() {

  let citasLocal = JSON.parse(localStorage.getItem('citas'))

  if(!citasLocal) {
    citasLocal = []
  }

  const [ citas, guardarCitas ] = useState(citasLocal)


  useEffect(() => {

    if(citasLocal) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }

  }, [citas])


  function crearCita(cita){
    guardarCitas([
      ...citas,
      cita
    ])
  }

  function eliminar(id){
    const citasNueva = citas.filter(cita => cita.id !== id)
    guardarCitas(citasNueva)
    console.log(citas)
  }


  return (

    <div className='section-app min-h-screen'>
      <h1 className="text-2xl font-semibold text-center p-2">FORMULARIO DE RESERVAS</h1>
      <Formulario crearCita={crearCita}/>
      <div className='flex items-center justify-center flex-col gap-5 py-5'>
        <h3 className='font-medium'>RESERVAS:</h3>
        {
          citas.map(cita => (
            <Citas key={cita.id} cita={cita} eliminar={eliminar}/>
          ))
        }
      </div>
    </div>

  )
}

export default App
