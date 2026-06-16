import { useState } from "react";

function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValido, setEmailValido] = useState(null);
  const [passwordValida, setPasswordValida] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const expresiones = {
    correo:
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:
      /^(?=.*[A-Za-z])(?=.*\d).{8,12}$/
  };

  const obtenerRegistros = () => {
    return JSON.parse(localStorage.getItem("registros")) || [];
  };

  const validarUsuario = (email, password) => {
    const registros = obtenerRegistros();

    return registros.some(
      (registro) =>
        registro.correo === email &&
        registro.password === password
    );
  };

  const validarEmail = (valor) => {
    const valido =
      expresiones.correo.test(valor);

    setEmailValido(valido);
    return valido;
  };

  const validarPassword = (valor) => {
    const valido =
      expresiones.password.test(valor);

    setPasswordValida(valido);
    return valido;
  };

  const handleEmailChange = (e) => {
    const valor = e.target.value;

    setEmail(valor);
    validarEmail(valor);
  };

  const handlePasswordChange = (e) => {
    const valor = e.target.value;

    setPassword(valor);
    validarPassword(valor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    const emailOk = validarEmail(email);
    const passOk = validarPassword(password);

    if (!emailOk || !passOk) {
      return;
    }

    const loginOk = validarUsuario(
      email.trim(),
      password
    );

    if (!loginOk) {
      setError(
        "El correo o la contraseña no coinciden con ningún usuario registrado."
      );
      return;
    }

    setSuccess(true);

    console.log("Login válido:", {
      email
    });

    setTimeout(() => {
      const modalEl =
        document.getElementById(
          "loginModal"
        );

      if (modalEl) {
        const modal =
          window.bootstrap.Modal.getInstance(
            modalEl
          );

        modal?.hide();
      }

      setSuccess(false);
      setEmail("");
      setPassword("");

      setEmailValido(null);
      setPasswordValida(null);
    }, 1800);
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              Iniciar Sesión
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>

          <div className="modal-body">

            <form onSubmit={handleSubmit}>

              <div className="mb-3">

                <label className="form-label">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`form-control ${
                    emailValido === null
                      ? ""
                      : emailValido
                      ? "is-valid"
                      : "is-invalid"
                  }`}
                  placeholder="Ingrese su correo"
                />

                <div className="invalid-feedback">
                  Ingrese un correo electrónico válido.
                </div>

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Contraseña
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={`form-control ${
                    passwordValida === null
                      ? ""
                      : passwordValida
                      ? "is-valid"
                      : "is-invalid"
                  }`}
                  placeholder="Ingrese su contraseña"
                />

                <div className="invalid-feedback">
                  La contraseña debe tener entre
                  8 y 12 caracteres e incluir
                  al menos una letra y un número.
                </div>

              </div>

              {success && (
                <div className="alert alert-success">
                  Inicio de sesión correcto.
                </div>
              )}

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <div className="modal-footer">

                <a
                  href="/registro"
                  className="nav-link"
                >
                  ¿No estás registrado?
                </a>

                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>

                <button
                  type="submit"
                  className="btn btn-primary"
                >
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