const productos = [
  {
    nombre: "Shampoo Profesional",
    descripcion: "Fórmula nutritiva que aporta brillo y fuerza.",
    cantidad: "500 ml",
    precio: "$37.990"
  },
  {
    nombre: "Acondicionador Reparador",
    descripcion: "Desenreda y repara puntas abiertas.",
    cantidad: "400 ml",
    precio: "$38.990"
  },
  {
    nombre: "Sérum Nutritivo",
    descripcion: "Control de frizz y protección térmica.",
    cantidad: "50 ml",
    precio: "$19.990"
  }
]

function ProductosDestacados() {

  return (

    <section className="productos-destacados">

      <div className="container">

        <h2>Productos destacados</h2>

        <div className="products-grid">

          {productos.map((producto, index) => (

            <article key={index} className="product-card">

              <h3>{producto.nombre}</h3>

              <p>{producto.descripcion}</p>

              <div className="product-meta">
                <span>{producto.cantidad}</span>
                <span>{producto.precio}</span>
              </div>

              <button className="btn btn-success">
                Agregar
              </button>

            </article>

          ))}

        </div>

      </div>

    </section>

  )
}

export default ProductosDestacados