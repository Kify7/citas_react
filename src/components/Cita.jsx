import React from "react";

const Cita = ({cita, eliminarCita}) => (
  <div className="cita">
    <p>Alumno: <span>{cita.alumno}</span> </p>
    <p>Tema: <span>{cita.tema}</span> </p>
    <p>Fecha: <span>{cita.fecha}</span> </p>
    <p>Hora: <span>{cita.hora}</span> </p>
    <p>Comentarios: <span>{cita.comentarios}</span> </p>

    <button className="button eliminar u-full-width"
    // onClick? => creado desde el App.js por que así es donde estan todas las citas
    onClick={()=> eliminarCita(cita.id)}

    
    >Eliminar</button>
  </div>
);

export default Cita;
