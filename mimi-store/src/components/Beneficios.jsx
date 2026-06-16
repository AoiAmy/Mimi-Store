function Beneficios() {
  return (
    <section
      id="beneficios"
      className="beneficios"
      aria-labelledby="beneficios-title"
    >
      <div className="container">

        <h2 id="beneficios-title">
          Por qué elegir nuestros productos
        </h2>

        <div className="benefits-grid">

          <article className="benefit">
            <h3>Calidad profesional</h3>
            <p>
              Trabajamos con marcas líderes.
            </p>
          </article>

          <article className="benefit">
            <h3>Envío rápido y seguro</h3>
            <p>
              Pedidos entregados en tiempo récord.
            </p>
          </article>

          <article className="benefit">
            <h3>Asesoría experta</h3>
            <p>
              Ayuda personalizada para elegir productos.
            </p>
          </article>

        </div>

      </div>
    </section>
  );
}

export default Beneficios;