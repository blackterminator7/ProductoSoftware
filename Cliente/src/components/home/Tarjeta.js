import React from 'react';
import { Card } from 'react-bootstrap';

export default function tarjeta(props) {
  return (
    <Card className="tarjeta">
      <Card.Img variant="top" src={props.url} className="card-imagen" />
      <Card.Body>
        <Card.Title className="titulo-repuesto">{props.repuesto}</Card.Title>
        <Card.Text>
          <strong className="font-weight-bold">Descripción:</strong> {props.descripcion}
          <br />
          <strong className="font-weight-bold">Precio:</strong> $ {props.precio}
          <br />
          <strong className="font-weight-bold">Existencias:</strong> {props.cantidad} unidades
          <br />
          <strong className="font-weight-bold"> Marca:</strong> {props.marca}
          <br />
          <strong className="font-weight-bold">Establecimiento:</strong> {props.establecimiento}
        </Card.Text>
      </Card.Body>
      <Card.Footer>{props.botones}</Card.Footer>
    </Card>
  );
}
