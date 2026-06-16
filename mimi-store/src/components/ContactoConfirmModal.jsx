import { useEffect } from "react";

function ContactoConfirmModal() {

  useEffect(() => {

    const contactoEnviado = JSON.parse(
      localStorage.getItem("contactoEnviado")
    );

    if (
      contactoEnviado &&
      contactoEnviado.enviado
    ) {
      const modalElement =
        document.getElementById(
          "contactoConfirmModal"
        );

      if (modalElement) {

        const modal =
          window.bootstrap.Modal.getOrCreateInstance(
            modalElement
          );

        modal.show();
      }

      localStorage.removeItem(
        "contactoEnviado"
      );
    }

  }, []);

  return (
    <div
      className="modal fade"
      id="contactoConfirmModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">

        <div className="modal-content">

          <div
            className="modal-header"
            style={{
              backgroundColor: "#ffe6f0",
              color: "#d63384",
            }}
          >
            <h5 className="modal-title">
              Mensaje enviado
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            />
          </div>

          <div
            className="modal-body"
            style={{
              textAlign: "center",
              padding: "2rem",
            }}
          >
            <div
              style={{
                fontSize: "3em",
                color: "#d63384",
                marginBottom: "1rem",
              }}
            >
              ✓
            </div>

            <p
              style={{
                fontSize: "1.1em",
                color: "#333",
              }}
            >
              Gracias por contactarnos.
              Nuestro personal se comunicará
              en un plazo máximo de 48 horas
              para responder tu duda o reclamo.
            </p>

          </div>

          <div
            className="modal-footer"
            style={{
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              className="btn"
              style={{
                backgroundColor: "#d63384",
                color: "white",
                border: "none",
              }}
              data-bs-dismiss="modal"
            >
              Aceptar
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ContactoConfirmModal;