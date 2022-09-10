import React, { useState } from "react";

const Input = ({ name, label, type = "text", setDataForm, dataForm }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  // También, utilizaremos un estado local para manejar el estado del input.
  const [inputValue, setInputValue] = useState("")

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setInputValue(e.target.value)
  }

  const onBlur = (e) => {
    setDataForm({ ...dataForm, [e.target.id]: e.target.value })
    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={inputValue}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
