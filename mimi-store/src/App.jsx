import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ContactModal from "./components/ContactModal";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Registro from "./pages/Registro";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Hide any Bootstrap modal when route changes to avoid leftover backdrops
    try {
      const modalEl = document.getElementById("contactoModal");
      const modal = window.bootstrap?.Modal.getOrCreateInstance(modalEl);
      modal?.hide();
    } catch (e) {
      // ignore
    }

    // Remove any modal backdrops and modal-open body class
    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach((b) => b.remove());
    document.body.classList.remove("modal-open");
  }, [location.pathname]);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>

      <ContactModal />
    </>
  );
}

export default App;