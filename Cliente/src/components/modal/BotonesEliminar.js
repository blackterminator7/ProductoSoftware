import React from "react";
import { Button } from "react-bootstrap";

export default function botonesEliminar(props) {
  return (
    <>
      <Button variant="danger" /* onClick={() => this.peticionDelete()} */>
        Confirmar
      </Button>
      <Button
        variant="secondary"
        onClick={props.cancelar}
      >
        Cancelar
      </Button>
    </>
  );
}
