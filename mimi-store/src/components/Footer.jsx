function Footer() {
  return (
    <footer
      id="contacto"
      className="site-footer"
      role="contentinfo"
      aria-labelledby="contacto-title"
    >
      <div className="container">

        <h2 id="contacto-title">
          Contacto
        </h2>

        <address>
          <div>Alumno: Francisca López Martínez</div>
          <div>Profesor: Victor Armando Vásquez Muñoz</div>
          <div>Asignatura: Programación Front End</div>
          <div>Sección: TI3031/D-FB50-N3-P13-C1/D</div>
        </address>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const modalEl = document.getElementById('contactoModal');
            const modal = window.bootstrap?.Modal.getOrCreateInstance(modalEl);
            modal?.show();
          }}
        >
          Envíanos un mensaje
        </button>

        <p>
          © 2026 Mimi Store — Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}

export default Footer;