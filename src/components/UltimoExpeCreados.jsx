//UltimoExpeCreados
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { TableVirtuoso } from 'react-virtuoso';
import { v4 as uuidv4 } from 'uuid';


const DataApi = [
  ['https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg', 'Luna', '12-03-2024', 'canino', 'Persa', 'Blanco','12-03-2010', 'Luis Cardona', '33481474' ],
  ['https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg', 'Sol','12-03-2024', 'Exotico', 'canino', 'Persa', 'Blanco','12-03-2010', 'Luis Cardona', '33481474' ],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Jack','12-03-2024'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Spy','12-03-2024'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Sony','12-03-2024'],
  ['https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg', 'Garfield','12-03-2024', 'canino', 'Persa', 'Blanco','12-03-2010', 'Luis Cardona', '33481474' ],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Leo','12-03-2024'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Max','12-03-2024'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Oso','12-03-2024'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Rex','12-03-2024'],
  ['https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg', 'Manchas','12-03-2024' , 'canino', 'Persa', 'Blanco','12-03-2010', 'Luis Cardona', '33481474' ],
  ['https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg', 'Nieve','13-03-2024' , 'canino', 'Persa', 'Blanco','12-03-2010', 'Luis Cardona', '33481474' ],
  //['https://www.ngenespanol.com/wp-content/uploads/2023/02/dragon-de-komodo-el-lagarto-mas-grande-del-mundo.jpg', 'Lagarto','14-03-2024']
];

function createData(id, imagen, nombre, FechaRegistro) {
    return { id: uuidv4(), imagen, nombre, FechaRegistro };
}

const columns = [
    {
        width: 120,
        label: 'Imagen',
        dataKey: 'imagen'
    },
    {
        width: 120,
        label: 'nombre',
        dataKey: 'nombre'
    },
    {
        width: 120,
        label: 'FechaRegistro',
        dataKey: 'FechaRegistro'
    }
];

const rows = DataApi.map((item, index) => {
    return createData(index, ...item);
});

const TablaComponentes = {
    Scroller: React.forwardRef((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead,
    TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

export const UltimoExpeCreados = () => {
  // Obtenemos la función de navegación
  
    function handleRowClick(id) {
      console.log(DataApi[id]);
      const registro = DataApi[id]; // Suponiendo que DataApi es tu arreglo de datos
      window.location.href = `/perfil?id=${id}`;
    }

function fixedHeaderContent() {
        return (
          <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
            {['Imagen', 'Nombre', 'Fecha Creacion'].map(label => (
              <TableCell
                key={label}
                variant="head"
                align='center'
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
            <TableRow key={row.id} style={{ cursor: 'pointer' }} onClick={() => handleRowClick(row.id)}>
                <React.Fragment>
                    {['imagen', 'nombre', 'FechaRegistro'].map(key => (
                        <TableCell
                            key={key}
                            align='center'
                            sx={{
                                backgroundColor:'rgba(129, 153, 146, 0.7)',
                                color: '#000000',
                                fontSize: '20px'
                            }}
                        >
                            {key === 'imagen' ? (
                                <img
                                    src={row[key]}
                                    alt={row[key]}
                                    style={{
                                        maxWidth: '100px',
                                        height: '100px',
                                        borderRadius: '50%'
                                    }}
                                />
                            ) : (
                                row[key]
                            )}
                        </TableCell>
                    ))}
                </React.Fragment>
            </TableRow>
        );
    }
    
    
    const reversedRows = rows.slice().reverse(); // Invertir el orden de las filas

    return (
        <Paper style={{ height: 400, width: '100%', marginLeft: '10%' }}>
            <TableVirtuoso
                data={reversedRows}
                components={TablaComponentes}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent} />
        </Paper>
    );
}
