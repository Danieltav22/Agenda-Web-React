import { useState } from "react";

function AgregarContacto({ agregarContacto }) {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();

    agregarContacto({
      nombre,
      apellido,
      telefono
    });

    setNombre("");
    setApellido("");
    setTelefono("");
  };

  return (
    <form onSubmit={enviarFormulario}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        required
      />

      <input
        type="tel"
        placeholder="Telefono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
      />

      <button type="submit">Guardar contacto</button>
    </form>
  );
}

export default AgregarContacto;