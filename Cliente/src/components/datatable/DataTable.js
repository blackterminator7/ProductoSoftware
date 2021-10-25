import React from "react";
import MUIDataTable from "mui-datatables";
import { Container, Row, Col } from "react-bootstrap";

export default function dataTable(props) {
  const options = {
    download: "false",
    print: "false",
    responsive: "simple",
    selectableRows: "none",
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 20, 30],
    tableBodyHeight: "100%",
    tableBodyMaxHeight: "100%",
    textLabels: {
      body: {
        noMatch: props.noRegistro,
        toolTip: "Sort",
        columnHeaderTooltip: (column) => `Ordenar por ${column.label}`,
      },
      pagination: {
        next: "Página siguiente",
        previous: "Página previa",
        rowsPerPage: "Filas por página:",
        displayRows: "de",
      },
      toolbar: {
        search: "Búsqueda",
        downloadCsv: "Download CSV",
        print: "Print",
        viewColumns: "Ver columnas",
        filterTable: "Filtros de tabla",
      },
      filter: {
        all: "TODOS",
        title: "FILTROS",
        reset: "REINICIAR",
      },
      viewColumns: {
        title: "Mostrar columnas",
        titleAria: "Mostrar/Ocultar columnas de tabla",
      },
      selectedRows: {
        text: "fila(s) seleccionada",
        delete: "Eliminar",
        deleteAria: "Eliminar filas seleccionadas",
      },
    },
  };
  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col>
          <div className="pb-4">{props.agregar}</div>
          <MUIDataTable
            title={props.titulo}
            data={props.datos}
            columns={props.columnas}
            options={options}
          />
        </Col>
      </Row>
    </Container>
  );
}
