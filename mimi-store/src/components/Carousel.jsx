import loreal from '../assets/images/logo_loreal.jpg'
import revlon from '../assets/images/logo_revlon.jpg'
import olaplex from '../assets/images/logo_olaplex.png'

function Carousel() {

  return (

    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src={loreal} className="d-block w-100" alt="L'Oreal" />
        </div>

        <div className="carousel-item">
          <img src={revlon} className="d-block w-100" alt="Revlon" />
        </div>

        <div className="carousel-item">
          <img src={olaplex} className="d-block w-100" alt="Olaplex" />
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>

  )
}

export default Carousel