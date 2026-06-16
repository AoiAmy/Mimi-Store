import loreal from '../assets/images/logo_loreal.jpg'
import revlon from '../assets/images/logo_revlon.jpg'
import olaplex from '../assets/images/logo_olaplex.png'

function Carousel() {

  return (

    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src={loreal} className="d-block w-100" />
        </div>

        <div className="carousel-item">
          <img src={revlon} className="d-block w-100" />
        </div>

        <div className="carousel-item">
          <img src={olaplex} className="d-block w-100" />
        </div>

      </div>

    </div>

  )
}

export default Carousel