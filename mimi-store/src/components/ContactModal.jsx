import Contacto from "./ContactoConfirmModal";

function ContactModal() {
  return (
    <div
      className="modal fade"
      id="contactoModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Contacto</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
          </div>
          <div className="modal-body">
            <Contacto />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
