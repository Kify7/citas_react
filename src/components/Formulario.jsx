import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";

const Formulario = ({ crearCita }) => {
  // Crear state de citas (state local => componente Formulario)
  const [cita, actualizarCita] = useState({
    alumno: "",
    tema: "",
    fecha: "",
    hora: "",
    comentarios: "",
  });

  const [error, actualizarError] = useState(false);

  // FUNCION QUE SE EJECUTA CADA QUE EL USUARIO ESCRIBE EN UN INPUT
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //   Extraer valores
  const { alumno, tema, fecha, hora, comentarios } = cita;

  // Cuando el usuario presiona para agregar cita
  const submitCita = (e) => {
    e.preventDefault();

    // VALIDAR
    if (
      alumno.trim() === "" ||
      tema.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      comentarios.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    // ELIMINAR MENSAJE ANTERIOR
    actualizarError(false);
    // ASINAR UN ID
    cita.id = uuid();
    // CREAR LA CITA
    crearCita(cita);
    // REINICIAR EL FORM
    actualizarCita({
      alumno: "",
      tema: "",
      fecha: "",
      hora: "",
      comentarios: ""
    })

  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label htmlFor="">Nombre:</label>
        <input
          type="text"
          name="alumno"
          className="u-full-width"
          placeholder="Nombre alumno"
          onChange={actualizarState}
          value={alumno}
        />

        <label htmlFor="">Tema:</label>
        <input
          type="text"
          name="tema"
          className="u-full-width"
          placeholder="Tema de asesoría"
          onChange={actualizarState}
          value={tema}
        />

        <label htmlFor="">Fecha:</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label htmlFor="">Hora:</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label htmlFor="">Comentarios:</label>
        <textarea
          name="comentarios"
          className="u-full-width"
          onChange={actualizarState}
          value={comentarios}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar asesoría
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
