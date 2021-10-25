import React from "react";
import { Button } from "react-bootstrap";

export default function botones(props) {
  return (
    <>
      {props.tipoModal === "insertar" ? (
        <Button variant="primary" /* onClick={props.guardar} */>
          Guardar
        </Button>
      ) : (
        <Button variant="primary" /* onClick={props.actualizar} */>
          Actualizar
        </Button>
      )}
      <Button variant="secondary" onClick={props.cancelar}>
        Cancelar
      </Button>
    </>
  );
}
