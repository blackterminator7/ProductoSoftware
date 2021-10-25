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
    establecimiento: "Impresa Repuestos",
    tipo: "Neumaticos",
  },
  {
    establecimiento: "Impresa Repuestos",
    tipo: "Piezas",
  },
  {
    establecimiento: "Didea Repuestos",
    tipo: "Neumaticos",
  },
];

class Inventario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventarios: [],
      modalInsertar: false,
      modalEliminar: false,
      form: {
        establecimiento: "",
        tipo: "",
        tipoModal: "",
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

  seleccionInventario = (inventario) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        establecimiento: inventario[0],
        tipo: inventario[1],
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
        name: "establecimiento",
        label: "Establecimiento",
      },
      {
        name: "tipo",
        label: "Tipo",
      },
      {
        name: "acciones",
        label: "Acciónes",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <BotonesTable
                editar={() => {
                  this.seleccionInventario(tableMeta.rowData);
                  this.modalInsertar();
                }}
                eliminar={() => {
                  this.seleccionInventario(tableMeta.rowData);
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
          titulo="Inventario de establecimientos"
          noRegistro="No hay registro de inventarios"
          columnas={columns}
          datos={data}
        />
        <ModalCU
          abrirCrear={this.state.modalInsertar}
          tipoModal={this.state.tipoModal}
          titulo="inventario"
          formulario={
            <>
              <Form.Group>
              <Form.Label>Tipo</Form.Label>
                <Form.Control
                  type="text"
                  id="tipo"
                  name="tipo"
                  placeholder="Neumaticos"
                  required={true}
                  value={form ? form.tipo : ""}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
              <Form.Label>Establecimiento</Form.Label>
                <Form.Control
                  as="select"
                  id="establecimiento"
                  name="establecimiento"
                  required={true}
                  value={form ? form.establecimiento : ""}
                  onChange={this.handleChange}
                >
                  <option value="" disabled={true}>
                    Seleccione..
                  </option>
                  <option value="Llantas">Impresa Repuestos</option>
                  <option value="Escapes">Didea Repuestos</option>
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

export default Inventario;
