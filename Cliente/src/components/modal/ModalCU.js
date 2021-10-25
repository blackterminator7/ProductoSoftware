import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function modalCU(props) {
  return (
    <>
      {/* Modal crear y actualizar */}
      <Modal backdrop="static" isOpen={props.abrirCrear} centered>
        <ModalHeader style={{ display: "block" }}>
          {props.tipoModal === "insertar" ? (
            <span>Agregar {props.titulo}</span>
          ) : (
            <span>Actualizar {props.titulo}</span>
          )}
        </ModalHeader>
        <ModalBody>{props.formulario}</ModalBody>
        <ModalFooter>{props.pieModalCrear}</ModalFooter>
      </Modal>

      {/* Modal para eliminar */}
      <Modal backdrop="static" isOpen={props.abrirEliminar} centered>
        <ModalHeader style={{ display: "block" }}>
          <span>Eliminar {props.titulo}</span>
        </ModalHeader>
        <ModalBody>
          ¿Esta seguro de eliminar el {props.titulo} seleccionado?
        </ModalBody>
        <ModalFooter>{props.pieModalEliminar}</ModalFooter>
      </Modal>
    </>
  );
}
