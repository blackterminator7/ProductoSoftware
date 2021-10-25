import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from '@mui/icons-material/FilterList';
import Tarjeta from "./Tarjeta";
import "./Home.css";
import Imagen1 from "./img/llantas_pesadas.jpg";
import Imagen2 from "./img/llantas_livianas.jpg";
import Imagen3 from "./img/llantas_moto.jpg";

class Home extends Component {
  render() {
    return (
      <>
        <Container className="menu-busqueda">
          <Row className="pt-4">
            <Col sm={2} className="pb-2">
              <Button variant="success">
                <SearchIcon />
                Buscar
              </Button>
            </Col>
            <Col sm={10}>
              <Form.Group>
                <Form.Control type="text" id="buscador" name="buscador" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="pt-2 pb-2"></Row>
        </Container>
        <Container className="pt-4">
          <Row>
            <Col sm={3} className="pt-3 pb-3 contenedor-filtros ">
              <div className="text-center">
                <h4>Filtros</h4>
              </div>
              <Form.Group className="pb-2">
                <Form.Label>Departamento</Form.Label>
                <Form.Control as="select" id="departamento" name="departamento">
                  <option value="" disabled={true} selected>
                    Seleccione..
                  </option>
                  <option value="San Salvador">San Salvador</option>
                  <option value="San Miguel">San Miguel</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="pb-2">
                <Form.Label>Tipo</Form.Label>
                <Form.Control as="select" id="tipo" name="tipo">
                  <option value="" disabled={true} selected>
                    Seleccione..
                  </option>
                  <option value="Motor">Motor</option>
                  <option value="Filtros">Filtros</option>
                  <option value="Llantas">Llantas</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="pb-4">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="text"
                  id="precio"
                  name="precio"
                ></Form.Control>
              </Form.Group>
              <div className="text-center">
                <Button variant="light">
                  <FilterListIcon/>
                  Filtrar
                </Button>
              </div>
            </Col>
            <Col sm={9} className="">
              <Row className="">
                <Col className="pb-2 pt-2 d-flex justify-content-center alig-items-center">
                  <Tarjeta
                    url={Imagen1}
                    repuesto="Llantas pesadas"
                    descripcion="Llantas 500x200"
                    precio="160.25"
                    cantidad="4"
                    marca="Toyota"
                    establecimiento="Super repuestos"
                    botones={
                      <>
                        <Row>
                          <Col className="pt-2">
                            <Button variant="primary">Contactar</Button>
                          </Col>
                          <Col className="pt-2">
                            <Button variant="secondary">Comparar</Button>
                          </Col>
                        </Row>
                      </>
                    }
                  />
                </Col>
                <Col className="pb-2 pt-2 d-flex justify-content-center alig-items-center">
                  <Tarjeta
                    url={Imagen2}
                    repuesto="Llanta livianas"
                    descripcion="Llantas 200x200"
                    precio="60"
                    cantidad="4"
                    marca="Toyota"
                    establecimiento="Mega repuestos"
                    botones={
                      <>
                        <Row>
                          <Col className="pt-2">
                            <Button variant="primary">Contactar</Button>
                          </Col>
                          <Col className="pt-2">
                            <Button variant="secondary">Comparar</Button>
                          </Col>
                        </Row>
                      </>
                    }
                  />
                </Col>
                <Col className="pb-2 pt-2 d-flex justify-content-center alig-items-center">
                  <Tarjeta
                    url={Imagen3}
                    repuesto="Llanta para moto"
                    descripcion="Llantas dobles"
                    precio="49.25"
                    cantidad="2"
                    marca="Toyota"
                    establecimiento="Hiper repuestos"
                    botones={
                      <>
                        <Row>
                          <Col className="pt-2">
                            <Button variant="primary">Contactar</Button>
                          </Col>
                          <Col className="pt-2">
                            <Button variant="secondary">Comparar</Button>
                          </Col>
                        </Row>
                      </>
                    }
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
