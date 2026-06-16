import { useState } from "react";
import { Link } from "react-router-dom";

function LoginModal() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [error, setError] = useState("");
const [success, setSuccess] = useState(false);

const expresiones = {
correo:
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
password:
/^(?=.*[A-Za-z])(?=.*\d).{8,12}$/
};

const validarUsuario = (email, password) => {
const registros =
JSON.parse(localStorage.getItem("registros")) || [];

  return registros.some(
    (registro) =>
      registro.correo === email &&
      registro.password === password
  );

};

const handleSubmit = (e) => {
e.preventDefault();

  setError("");

  const emailOk = expresiones.correo.test(email);
  const passOk = expresiones.password.test(password);

  if (!emailOk || !passOk) {
    setError("Correo o contraseña con formato inválido.");
    return;
  }

  const loginOk = validarUsuario(email, password);

  if (!loginOk) {
    setError("El correo o la contraseña no coinciden.");
    return;
  }

  setSuccess(true);

  setTimeout(() => {
    setSuccess(false);
    setEmail("");
    setPassword("");

    const modalElement = document.getElementById("loginModal");
    const modal = window.bootstrap?.Modal.getInstance(modalElement);

    if (modal) {
      modal.hide();
    }
  }, 1800);

};

return (
  <div
    className="modal fade"
    id="loginModal"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">

        <div className="modal-header">
          <h5 className="modal-title">Iniciar Sesión</h5>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
          />
        </div>

        <div className="modal-body">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>

              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            {success && <div className="alert alert-success">Inicio de sesión correcto.</div>}

            <div className="modal-footer">

              <Link to="/registro" className="nav-link">
                ¿No estás registrado? Regístrate aquí
              </Link>

              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>

              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>

            </div>

          </form>

        </div>

      </div>
    </div>
  </div>
);

}

export default LoginModal;
