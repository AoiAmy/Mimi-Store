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
          <div>Tel: +56 9 7536 8889</div>
          <div>Email: info.mimistore@gmail.com</div>
          <div>Dirección: Calle principal 123, Santiago</div>
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