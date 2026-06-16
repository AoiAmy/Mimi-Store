import React, { useEffect, useState } from "react";

function AccessibilityButton() {
  const [enabled, setEnabled] = useState(false);
  const [size, setSize] = useState("normal");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("a11yAAA");
      const savedSize = localStorage.getItem("a11ySize");

      if (saved === "true") {
        document.body.classList.add("a11y-aaa");
        setEnabled(true);
      }

      if (savedSize) {
        setSize(savedSize);

        if (savedSize !== "normal") {
          document.body.classList.add(
            `a11y-size-${savedSize}`
          );
        }
      }

    } catch (e) {}
  }, []);


  useEffect(() => {

    if (enabled) {

      document.body.classList.add("a11y-aaa");
      localStorage.setItem(
        "a11yAAA",
        "true"
      );

    } else {

      document.body.classList.remove(
        "a11y-aaa"
      );

      localStorage.setItem(
        "a11yAAA",
        "false"
      );
    }

  }, [enabled]);


  function applySize(newSize) {

    document.body.classList.remove(
      "a11y-size-normal",
      "a11y-size-large",
      "a11y-size-xlarge"
    );


    if (newSize !== "normal") {

      document.body.classList.add(
        `a11y-size-${newSize}`
      );

    }


    setSize(newSize);

    localStorage.setItem(
      "a11ySize",
      newSize
    );
  }


  return (

    <div className="accessibility-wrapper">

      <button
        className="btn btn-primary"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Opciones de accesibilidad"
      >
        ♿ Accesibilidad
      </button>


      {open && (

        <div className="accessibility-panel">


          <div className="option-group">

            <h6>
              Contraste alto
            </h6>


            <button
              className={`btn ${
                enabled
                ? "btn-success"
                : "btn-outline-secondary"
              }`}
              onClick={() =>
                setEnabled(!enabled)
              }
            >

              {enabled
                ? "Activado"
                : "Desactivado"}

            </button>

          </div>



          <div className="option-group">


            <h6>
              Tamaño de fuente
            </h6>


            <div className="btn-group">


              <button
                className={`btn btn-outline-secondary ${
                  size === "normal"
                  ? "active"
                  : ""
                }`}
                onClick={() =>
                  applySize("normal")
                }
              >
                A
              </button>



              <button
                className={`btn btn-outline-secondary ${
                  size === "large"
                  ? "active"
                  : ""
                }`}
                onClick={() =>
                  applySize("large")
                }
              >
                A+
              </button>



              <button
                className={`btn btn-outline-secondary ${
                  size === "xlarge"
                  ? "active"
                  : ""
                }`}
                onClick={() =>
                  applySize("xlarge")
                }
              >
                A++
              </button>


            </div>


          </div>


        </div>

      )}

    </div>

  );
}

export default AccessibilityButton;