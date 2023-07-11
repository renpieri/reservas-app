import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


function Formulario({crearCita}) {

    const [ error, setError ] = useState(false)
    const [ cita, setCita ] = useState({
        nombre: '',
        apellido: '',
        fecha: '',
        hora: ''
      });
    
    
    
      function handleCita(e) {
        setCita({
          ...cita,
          [e.target.name]: e.target.value
        });
      }

      
    const { nombre, apellido, fecha, hora } = cita

    function onSubmit(e) {
        e.preventDefault();
      
        if (nombre === '' || apellido === '' || fecha === '' || hora === '') {
          setError(true)
          return;
        }

        cita.id = uuidv4();

        crearCita(cita)
     
        setCita({ nombre: '', apellido: '', fecha: '', hora: '' });
        setError(false)
      }
    


    return (
    <section className="form flex flex-col justify-center py-10">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold">HACÉ TU RESERVA</h2>
            <div className="divide-y divide-gray-200">

              <form onSubmit={onSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                <div className="relative">
                  <label htmlFor="nombre" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Nombre</label>
                  <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleCita} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"/>
                </div>

                <div className="relative">
                  <label htmlFor="apellido" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Apellido</label>
                  <input type="text" id="apellido" name="apellido" value={apellido} onChange={handleCita} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"/>
                </div>
                      
                <div className="relative">
                  <label htmlFor="fecha" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Fecha</label>
                  <input type="date" id="fecha" name="fecha" value={fecha} onChange={handleCita} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"/>
                </div>

                <div className="relative">
                  <label htmlFor="hora" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Hora</label>
                  <input type="time" id="hora" name="hora" value={hora} onChange={handleCita} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                </div>
                
                <div className="flex justify-center">
                  <button className="text-white rounded-md px-2 py-1 btn">Agregar</button>
                </div>

              </form>
              
            </div>
          { error ? <p className="text-red-500">Por favor completa el formulario completo</p> : null }
          </div>
        </div>
      </div>
    </section>
    )
}

export default Formulario
