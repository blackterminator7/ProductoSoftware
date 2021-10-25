import React, { Component } from "react";
import DataTable from "../datatable/DataTable";
import BotonesTable from "../datatable/BotonesTable";
import BotonesModalRegistrar from "../modal/BotonesRegistrar";
import BotonesModalEliminar from "../modal/BotonesEliminar";
import { Button } from "react-bootstrap";
import ModalCU from "../modal/ModalCU";
import { Form } from "react-bootstrap";

const data = [
  {
    nombre: "Didea Repuestos",
    telefono: "7452-2748",
    departamento: "San Salvador",
    municipio: "San Salvador",
  },
  {
    nombre: "Impresa Repuestos",
    telefono: "7452-2750",
    departamento: "La Paz",
    municipio: "Zacatecoluca",
  },
];

class Establecimiento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      establecimientos: [],
      modalInsertar: false,
      modalEliminar: false,
      form: {
        nombre: "",
        telefono: "",
        departamento: "",
        municipio: "",
      },
    };
  }

  /* componentDidMount() {
    axios
      .get("http://127.0.0.1:8001/api/cuentas/")
      .then((response) => {
        this.setState({ cuentas: response.data });
        axios
          .get("http://127.0.0.1:8000/api/repuestos/")
          .then((response) => {
            this.setState({ repuestos: response.data });
          })
          .catch((error) => {});
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Por el momento no hay conexión con la base de datos",
        });
      });
  } */

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  seleccionEstablecimiento = (establecimiento) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        nombre: establecimiento[0],
        telefono: establecimiento[1],
        departamento: establecimiento[2],
        municipio: establecimiento[3],
      },
    });
  };

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };

  render() {
    const { form } = this.state;
    const columns = [
      {
        name: "nombre",
        label: "Nombre",
      },
      {
        name: "telefono",
        label: "Teléfono",
      },
      {
        name: "departamento",
        label: "Departamento",
      },
      {
        name: "municipio",
        label: "Municipio",
      },
      {
        name: "acciones",
        label: "Acciónes",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <BotonesTable
                editar={() => {
                  this.seleccionEstablecimiento(tableMeta.rowData);
                  this.modalInsertar();
                }}
                eliminar={() => {
                  this.seleccionEstablecimiento(tableMeta.rowData);
                  this.setState({ modalEliminar: true });
                }}
              />
            );
          },
        },
      },
    ];
    return (
      <>
        <DataTable
          agregar={
            <Button
              variant="success"
              onClick={() => {
                this.setState({ form: null, tipoModal: "insertar" });
                this.modalInsertar();
              }}
            >
              Agregar
            </Button>
          } 
          titulo="Establecimientos"
          noRegistro="No hay registro de establecimientos"
          columnas={columns}
          datos={data}
        />
        <ModalCU
          abrirCrear={this.state.modalInsertar}
          tipoModal={this.state.tipoModal}
          titulo="establecimiento"
          formulario={
            <>
              <Form.Group>
              <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Empresa Repuesto"
                  required={true}
                  value={form ? form.nombre : ""}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
              <Form.Label>Telefóno</Form.Label>
                <Form.Control
                  type="text"
                  id="telefono"
                  name="telefono"
                  placeholder="9999-9999"
                  required={true}
                  value={form ? form.telefono : ""}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
              <Form.Label>Dirección</Form.Label>
                <Form.Control
                  as="select"
                  id="direccion"
                  name="direccion"
                  required={true}
                  value={form ? form.direccion : ""}
                  onChange={this.handleChange}
                >
                  <option value="" disabled={true}>
                    Seleccione..
                  </option>
                  <option value="Llantas">Zacatecoluca</option>
                  <option value="Escapes">San Jacinto</option>
                </Form.Control>
              </Form.Group>
            </>
          }
          pieModalCrear={
            <BotonesModalRegistrar
              tipoModal={this.state.tipoModal}
              cancelar={() => this.modalInsertar()}
            />
          }
          abrirEliminar={this.state.modalEliminar}
          pieModalEliminar={
            <BotonesModalEliminar
              cancelar={() => this.setState({ modalEliminar: false })}
            />
          }
        />
      </>
    );
  }
}

export default Establecimiento;
