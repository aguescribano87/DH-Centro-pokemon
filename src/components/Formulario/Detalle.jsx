import React from "react";
import { useStore } from "../../context/ContextoFormulario";

const Detalle = () => {
  const store = useStore()

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {store?.data.nombre}</p>
          <p>Apellido: {store?.data.apellido}</p>
          <p>Email: {store?.data.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {store?.data.nombrePokemon}</p>
          <p>Tipo: {store?.data.tipoPokemon}</p>
          <p>Elemento: {store?.data.elementoPokemon}</p>
          <p>Altura: {store?.data.alturaPokemon}</p>
          <p>Edad: {store?.data.edadPokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
