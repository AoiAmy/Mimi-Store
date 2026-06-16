function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="container">

          <a href="/" className="navbar-brand">
            Mimi Store
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#contenidoMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="contenidoMenu">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a href="/" className="nav-link">Inicio</a>
              </li>

              <li className="nav-item">
                <a href="/productos" className="nav-link">Productos</a>
              </li>

              <li className="nav-item">
                <a href="#beneficios" className="nav-link">Beneficios</a>
              </li>

              <li className="nav-item">
                <a href="#contacto" className="nav-link">Contacto</a>
              </li>

              <li className="nav-item">
                <button
                  className="btn nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login
                </button>
              </li>

            </ul>

          </div>

        </div>

      </nav>
    </header>
  )
}

export default Navbar