
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
  ['21-04-2024', '12:30', 'Baxter', 'Vacunación'],
  ['30-01-2024', '01:30', 'Firulais','Desparacitación'],
  ['30-03-2024', '02:30', 'ayuda :(', 'Chequeo'],
  ['30-01-2023', '05:30', 'autzilio', 'Operación'],
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

const rows = Array.from({ length: 50 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
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
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
          sx={{
            backgroundColor: row.fecha === '30-01-2023' ? 'rgba(182, 106, 82, 0.7)' : 'rgba(129, 153, 146, 0.7)',
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
