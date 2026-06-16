import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import ProductosDestacados from './components/ProductosDestacados'
import Beneficios from './components/Beneficios'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'
import ContactoConfirmModal from './components/ContactoConfirmModal'

function App() {
  return (
    <>
      <Navbar />
      <Carousel />

      <main>
        <Hero />
        <ProductosDestacados />
        <Beneficios />
      </main>

      <Footer />

      <LoginModal />
      <ContactoConfirmModal />
    </>
  )
}

export default App