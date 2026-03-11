function ListaContactos({ contactos }) {

  

  return (

    <div className="lista-contactos">

      {contactos.map((c, i) => (

        <div className="card-contacto" key={i}>

          <div className="avatar">
            {c.nombre.charAt(0)}
          </div>

          <div className="info">

            <h3>
              {c.nombre} {c.apellido}
            </h3>

            <p>📞 {c.telefono}</p>

          </div>

        </div>

      ))}

    </div>

  );

}

export default ListaContactos;