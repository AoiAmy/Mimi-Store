function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      aria-label="Hero"
      tabIndex="-1"
    >
      <div className="container">

        <h1>¡Bienvenido a Mimi Store!</h1>

        <p>
          Productos <b>profesionales</b> para
          <b> peluquería</b> y
          <b> cuidado personal</b>.
        </p>

        <p>
          Encuentra fórmulas profesionales,
          herramientas y accesorios seleccionados
          para salones y entusiastas del cuidado personal.
        </p>

        <p>
          <a
            className="btn btn-primary"
            href="/productos"
          >
            Comprar ahora
          </a>
        </p>

      </div>
    </section>
  );
}

export default Hero;