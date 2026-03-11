import { useEffect, useState } from "react";
import AgregarContacto from "./AgregarContacto.jsx";
import ListaContactos from "./ListaContactos.jsx";

const URL = "http://www.raydelto.org/agenda.php";

function App() {

  const [contactos, setContactos] = useState([]);

  const cargarContactos = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setContactos(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    cargarContactos();
  }, []);

  const agregarContacto = (contacto) => {

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contacto)
    })
    .then(() => cargarContactos());

  };

  return (

    <div className="container">

      <h1>Agenda Web</h1>

      <AgregarContacto agregarContacto={agregarContacto} />

      <ListaContactos contactos={contactos} />

    </div>

  );
}

export default App;