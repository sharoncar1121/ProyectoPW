
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
  ['21-03-2024', '23:30', 'Baxter', 'chequeo'],
  ['21-03-2024', '22:30', 'Ranger', 'vacuna'],
  ['21-03-2024', '21:40', 'Dino', 'Desparacitación'],
  ['22-03-2024', '12:30', 'Baxter', 'chequeo'],
  ['23-03-2024', '01:30', 'Firulais','Desparacitación'],
  ['15-03-2023', '02:30', 'Baxter', 'Chequeo'],
  ['09-03-2023', '05:30', 'Baxter', 'Operación'],
  ['11-03-2024', '12:30', 'Dexter', 'Desparacitación'],
  ['11-03-2024', '11:30', 'Dino', 'Desparacitación'],
  ['15-03-2023', '04:30', 'Baxter', 'Chequeo'],
  ['30-04-2023', '04:30', 'Dino', 'Desparacitación'],
  ['30-04-2023', '04:30', 'Dino', 'Desparacitación'],
];

function createData(id, fecha, hora, paciente, motivo) {
  return { id, fecha, hora, paciente, motivo };
}

const currentDate = new Date();

const formatCurrentDate = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;


const todayData = sample
  .filter(item => item[0] === formatCurrentDate)
  .sort((a, b) => {
   
    const horaA = new Date(`2000-01-01T${a[1]}`);
    const horaB = new Date(`2000-01-01T${b[1]}`);
    return horaA - horaB;
  }).map((item, index) => createData(index, ...item));


const otherData = sample
  .filter(item => item[0] !== formatCurrentDate)
  .sort((a, b) => {
 
    const dateA = new Date(`${a[0]}T${a[1]}`);
    const dateB = new Date(`${b[0]}T${b[1]}`);
    return dateA - dateB;
  }).map((item, index) => createData(todayData.length + index, ...item));


const rows = [...todayData, ...otherData];

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
      {['Fecha', 'Hora', 'Paciente', 'Motivo'].map(label => (
        <TableCell
          key={label}
          variant="head"
          align='left'
          sx={{
            backgroundColor: '#6AA098',
            color: '#000000',
          }}
        >
          {label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {['fecha', 'hora', 'paciente', 'motivo'].map(key => (
        <TableCell
          key={key}
          align='left'
          sx={{
            backgroundColor: row.fecha === formatCurrentDate ? 'rgba(182, 106, 82, 0.7)' : 'rgba(129, 153, 146, 0.7)',
            color: '#000000',
          }}
        >
          {row[key]}
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
