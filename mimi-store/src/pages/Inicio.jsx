import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import ProductosDestacados from "../components/ProductosDestacados";
import Beneficios from "../components/Beneficios";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";

function Inicio() {
  return (
    <>
      <Carousel />
      <Hero />
      <ProductosDestacados />
      <Beneficios />
      <Footer />
      <LoginModal />
    </>
  );
}

export default Inicio;