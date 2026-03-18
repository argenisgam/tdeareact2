function TablaUsuarios({ usuarios }) {

  return (

    <table border="1" cellPadding="10">

      <thead>

        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Documento</th>
          <th>Edad</th>
        </tr>

      </thead>

      <tbody>

        {usuarios.map((usuario, index) => (

          <tr key={index}>

            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
            <td>{usuario.documento}</td>
            <td>{usuario.edad}</td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}

export default TablaUsuarios;