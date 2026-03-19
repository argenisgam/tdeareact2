import { useState } from "react";
import FormularioUsuario from "./FormularioUsuario";
import TablaUsuarios from "./TablaUsuarios";

function App() {

  const [usuarios, setUsuarios] = useState([]);
  const [mensaje, setMensaje] = useState("");

  function agregarUsuario(usuario) {

    setUsuarios([...usuarios, usuario]);

    setMensaje("El usuario se ha guardado bien");

  }

  return (

    <div style={{padding:"20px"}}>

      <h1>Registro de Usuarios</h1>

      <FormularioUsuario agregarUsuario={agregarUsuario} />

      <h3>{mensaje}</h3>

      <h2>Total usuarios trabajando: {usuarios.length}</h2>

      <TablaUsuarios usuarios={usuarios} />

    </div>

  );

}

export default App;