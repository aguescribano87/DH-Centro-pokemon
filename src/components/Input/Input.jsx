import React, { useState } from "react";
import { useDispatch, useStore } from "../../context/ContextoFormulario"

const Input = React.forwardRef((props, ref) => {

  const store = useStore()
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("")
  const { name, label } = props

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  const onBlur = (e) => dispatch({
    type: 'ACTUALIZAR_FORM',
    payload: { ...store?.data, [e.target.id]: e.target.value }
  })

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        ref={ref}
        type='text'
        id={name}
        value={inputValue}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
})

export default Input;
