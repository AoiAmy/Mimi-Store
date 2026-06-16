import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contacto() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [success, setSuccess] = useState(false);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    asunto: /^.{1,60}$/,
    mensaje: /^.{10,300}$/
  };

  const nombreValido =
    nombre === ""
      ? null
      : expresiones.nombre.test(nombre);

  const asuntoValido =
    asunto === ""
      ? null
      : expresiones.asunto.test(asunto);

  const mensajeValido =
    mensaje === ""
      ? null
      : expresiones.mensaje.test(mensaje);

  const guardarContacto = () => {
    const datosContacto = {
      nombre: nombre.trim(),
      asunto: asunto.trim(),
      mensaje: mensaje.trim(),
      fechaEnvio: new Date().toLocaleString()
    };

    const contactos =
      JSON.parse(
        localStorage.getItem("contactos")
      ) || [];

    contactos.push(datosContacto);

    localStorage.setItem(
      "contactos",
      JSON.stringify(contactos)
    );

    localStorage.setItem(
      "contactoEnviado",
      JSON.stringify({
        enviado: true,
        fechaEnvio:
          datosContacto.fechaEnvio
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nombreValido ||
      !asuntoValido ||
      !mensajeValido
    ) {
      return;
    }

    guardarContacto();

    setSuccess(true);

    setTimeout(() => {
      setNombre("");
      setAsunto("");
      setMensaje("");
      setSuccess(false);
    }, 1400);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="container py-5">

      <h1>Contacto</h1>

      <form onSubmit={handleSubmit}>

        {/* NOMBRE */}

        <div className="mb-3">

          <label className="form-label">
            Nombre
          </label>

          <input
            type="text"
            className={`form-control ${
              nombreValido === null
                ? ""
                : nombreValido
                ? "is-valid"
                : "is-invalid"
            }`}
            value={nombre}
            onChange={(e) =>
              setNombre(e.target.value)
            }
          />

          <div className="invalid-feedback">
            Solo letras y espacios.
            Máximo 40 caracteres.
          </div>

        </div>

        {/* ASUNTO */}

        <div className="mb-3">

          <label className="form-label">
            Asunto
          </label>

          <input
            type="text"
            className={`form-control ${
              asuntoValido === null
                ? ""
                : asuntoValido
                ? "is-valid"
                : "is-invalid"
            }`}
            value={asunto}
            onChange={(e) =>
              setAsunto(e.target.value)
            }
          />

          <div className="invalid-feedback">
            Máximo 60 caracteres.
          </div>

        </div>

        {/* MENSAJE */}

        <div className="mb-3">

          <label className="form-label">
            Mensaje
          </label>

          <textarea
            rows="5"
            className={`form-control ${
              mensajeValido === null
                ? ""
                : mensajeValido
                ? "is-valid"
                : "is-invalid"
            }`}
            value={mensaje}
            onChange={(e) =>
              setMensaje(e.target.value)
            }
          />

          <div className="form-text">
            Caracteres: {mensaje.length}/300
          </div>

          <div className="invalid-feedback">
            Debe contener entre 10 y
            300 caracteres.
          </div>

        </div>

        {success && (
          <div className="alert alert-success">
            Formulario enviado
            exitosamente.
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary"
        >
          Enviar
        </button>

      </form>

    </div>
  );
}

export default Contacto;