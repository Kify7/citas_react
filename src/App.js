import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";


function App() {

  // CITAS EN LOCAL STORAGE
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }
  // ARREGLO DE CITAS
  const [citas, guardarCitas] = useState(citasIniciales);

  // useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    } else {
      localStorage.setItem('citas',JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  // Funcion que tome las citas actualesy agregue la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  // Función que elimina una cita por su id

  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  // Mensaje Condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador de Asesorías</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
           <h2>{titulo }</h2>
            {citas.map(cita=>(
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
