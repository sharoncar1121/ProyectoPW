
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

const sample = [
  ['12-03-2024', '23:30', 'funciona', 'si funciona'],
  ['12-03-2024', '22:30', 'Satoru', 'Vacío inconmensurable'],
  ['12-03-2024', '21:40', 'Sukuna', 'Relicario demoniaco'],
  ['21-02-2024', '12:30', 'Baxter', 'Vacunación'],
  ['30-01-2024', '01:30', 'Firulais','Desparacitación'],
  ['28-01-2024', '02:30', 'ayuda :(', 'Chequeo'],
  ['09-03-2023', '05:30', 'autzilio', 'Operación'],
  ['11-03-2024', '12:30', 'ya va dando', 'ya no se :('],
  ['11-03-2024', '11:30', 'ya va dando', 'ya no se :('],
  ['11-03-2024', '13:30', 'ya va dando', 'ya no se :('],
  ['30-04-2023', '04:30', 'ya va dando', 'ya no se :('],
  ['30-04-2023', '04:30', 'ya va dando', 'ya no se :('],
];

function createData(id, fecha, hora, paciente, motivo) {
  return { id, fecha, hora, paciente, motivo};
}

const columns = [
  {
    width: 60,
    label: 'Fecha',
    dataKey: 'fecha',
    date: true,
  },
  {
    width: 120,
    label: 'Hora',
    dataKey: 'hora',
    date: true,
  },
  {
    width: 120,
    label: 'Paciente',
    dataKey: 'paciente',
  },
  {
    width: 120,
    label: 'Motivo',
    dataKey: 'motivo',
  }
];

const rows = sample.map((item, index) => {
  return createData(index, ...item);
}).sort((a, b) => {
  // Convertir las fechas a objetos Date para comparación
  const dateA = new Date(a.fecha.split('-').reverse().join('-'));
  const dateB = new Date(b.fecha.split('-').reverse().join('-'));

  // Ordena primero por fecha
  const dateComparison = dateB - dateA;
  
  // Si las fechas son iguales, ordena por hora
  if (dateComparison === 0) {
    return a.hora.localeCompare(b.hora);
  }
  
  return dateComparison;
});

const VirtuosoTableComponents = {
  // eslint-disable-next-line react/display-name
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  // eslint-disable-next-line react/prop-types, no-unused-vars
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  // eslint-disable-next-line react/display-name
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: '#6AA098',
            color: '#000000',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  const currentDate = new Date();
  // Formateamos la fecha actual en formato 'DD-MM-YYYY'
  const formatCurrentDate = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
          sx={{
            backgroundColor: row.fecha === formatCurrentDate ? 'rgba(182, 106, 82, 0.7)' : 'rgba(129, 153, 146, 0.7)',
            color: '#000000',
          }}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export const ListaCitas = () => {
  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
