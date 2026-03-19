import { useState } from "react";

function FormularioUsuario({ agregarUsuario }) {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documento, setDocumento] = useState("");
  const [edad, setEdad] = useState("");

  function guardar() {

    const nuevoUsuario = {
      nombre,
      apellido,
      documento,
      edad
    };

    agregarUsuario(nuevoUsuario);

    setNombre("");
    setApellido("");
    setDocumento("");
    setEdad("");

  }

  return (

    <div>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
      />

      <br/><br/>

      <input
        type="text"
        placeholder="Apellido persona"
        value={apellido}
        onChange={(e)=>setApellido(e.target.value)}
      />

      <br/><br/>

      <input
        type="text"
        placeholder="Documento"
        value={documento}
        onChange={(e)=>setDocumento(e.target.value)}
      />

      <br/><br/>

      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e)=>setEdad(e.target.value)}
      />

      <br/><br/>

      <button onClick={guardar}>
        Guardar
      </button>

    </div>

  );

}

export default FormularioUsuario;