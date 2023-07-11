
function Citas({cita, eliminar}) {

    return (

        <div className="flex cita justify-center items-center flex-col sm:justify-around sm:flex-row sm:w- w-4/5 xl:w-1/2">
          <h1 className="text-center w-full sm:w-1/5">{cita.nombre}</h1>
          <p className="text-center w-full sm:w-1/5">{cita.apellido}</p>
          <p className="text-center w-full sm:w-1/5">{cita.fecha}</p>
          <p className="text-center w-full sm:w-1/5">{cita.hora}</p>
          <button className="w-full sm:w-1/5 text-white rounded-md px-2 py-1" onClick={() => eliminar(cita.id)}>ELIMINAR</button>
        </div>

    )
  }
  
  export default Citas
  