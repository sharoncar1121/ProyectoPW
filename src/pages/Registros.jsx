import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Filtro } from '../components/Filtro';

const DataApi = [
  {
    imagen: 'https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg',
    nombre: 'Luna',
    fechaRegistro: '12-03-2024',
    especie: 'Felino',
    raza: 'Persa',
    color: 'Blanco',
    fechaNacimiento: '12-03-2010',
    propietario: 'Luis Cardona',
    id: '147'
  },
  {
    imagen: 'https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg',
    nombre: 'Sol',
    fechaRegistro: '12-03-2024',
    especie: 'Felino',
    raza: 'Ginger',
    color: 'Negro',
    fechaNacimiento: '12-03-2010',
    propietario: 'Luis Cardona',
    id: '48'
  },
  {
    imagen: 'https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1.jpg',
    nombre: 'Jack',
    fechaRegistro: '12-03-2024',
    especie: 'Canino',
    id: '1',
    raza: 'Golden Retriever',
    color: 'Dorado',
    fechaNacimiento: '15-08-2019',
    propietario: 'Ana Rodríguez'
  },
  {
    imagen: 'https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1.jpg',
    nombre: 'Spy',
    fechaRegistro: '12-03-2024',
    especie: 'Canino',
    id: '2',
    raza: 'Labrador',
    color: 'Negro',
    fechaNacimiento: '10-10-2020',
    propietario: 'Carlos Gutiérrez'
  },
  {
    imagen: 'https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1.jpg',
    nombre: 'Sony',
    fechaRegistro: '12-03-2024',
    especie: 'Canino',
    id: '3',
    raza: 'Bulldog Francés',
    color: 'Blanco y marrón',
    fechaNacimiento: '03-05-2018',
    propietario: 'María Pérez'
  },
  {
    imagen: 'https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg',
    nombre: 'Garfield',
    fechaRegistro: '12-03-2024',
    especie: 'Felino',
    raza: 'Persa',
    color: 'Naranja',
    fechaNacimiento: '22-07-2012',
    propietario: 'Juan López',
    id: '14'
  },
  {
    imagen: 'https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1.jpg',
    nombre: 'Leo',
    fechaRegistro: '12-03-2023',
    especie: 'Canino',
    id: '4',
    raza: 'Pastor Alemán',
    color: 'Negro y marrón',
    fechaNacimiento: '20-04-2017',
    propietario: 'Laura Martínez'
  },
  {
    imagen: 'https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1.jpg',
    nombre: 'Max',
    fechaRegistro: '12-03-2024',
    especie: 'Canino',
    id: '5',
    raza: 'Chihuahua',
    color: 'Café',
    fechaNacimiento: '05-12-2020',
    propietario: 'Pedro Gómez'
  },
  {
    imagen: 'https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1.jpg',
    nombre: 'Oso',
    fechaRegistro: '12-03-2024',
    especie: 'Canino',
    id: '6',
    raza: 'Shih Tzu',
    color: 'Blanco y negro',
    fechaNacimiento: '12-09-2019',
    propietario: 'Sofía Rodríguez'
  },
  {
    imagen: 'https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1.jpg',
    nombre: 'Rex',
    fechaRegistro: '12-03-2024',
    especie: 'Canino',
    id: '7',
    raza: 'Pug',
    color: 'Beige',
    fechaNacimiento: '30-03-2016',
    propietario: 'Daniel Pérez'
  },
  {
    imagen: 'https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg',
    nombre: 'Manchas',
    fechaRegistro: '12-03-2024',
    especie: 'Felino',
    raza: 'Persa',
    color: 'Atigrado',
    fechaNacimiento: '10-05-2015',
    propietario: 'Ana Ruiz',
    id: '33'
  },
  {
    imagen: 'https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg',
    nombre: 'Nieve',
    fechaRegistro: '13-03-2024',
    especie: 'Felino',
    raza: 'Siamés',
    color: 'Blanco',
    fechaNacimiento: '18-11-2017',
    propietario: 'María Fernández',
    id: '74'
  },
];



function createData(id, data) {
  return { id, ...data };
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
    dataKey: 'fechaRegistro'
  }
];

const initialRows = DataApi.map((data, index) => {
  return createData(index, data);
});

export const Registros = () => {
  const [filteredRows, setFilteredRows] = useState(initialRows);

  const filterData = (searchTerm, selectedFilter) => {
    const filteredData = initialRows.filter(row => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      switch (selectedFilter) {
        case 'nombre':
          return row.nombre.toLowerCase().includes(lowerCaseSearchTerm);
        case 'fechaRegistro':
          return row.fechaRegistro.toLowerCase().includes(lowerCaseSearchTerm);
        case 'raza':
          return row.raza && row.raza.toLowerCase().includes(lowerCaseSearchTerm);
        case 'especie':
          return row.especie && row.especie.toLowerCase().includes(lowerCaseSearchTerm);
        default:
          return true;
      }
    });
    setFilteredRows(filteredData);
  };

  // Maneja el clic en la fila
  function handleRowClick(id) {
    console.log(DataApi[id]);
    const registro = DataApi[id]; // Suponiendo que DataApi es tu arreglo de datos
    window.location.href = `/perfil?id=${id}`;
  }

  // Genera el contenido de la fila
  function rowContent(_index, row) {
    return (
      <TableRow key={row.id} style={{ cursor: 'pointer' }} onClick={() => handleRowClick(row.id)}>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={'left'}
            width={'41%'}
            sx={{
              backgroundColor: 'rgba(129, 153, 146, 0.7)',
              color: '#000000',
              fontSize: '20px'
            }}>
            {column.dataKey === 'imagen' ? (
              <img src={row[column.dataKey]} alt={row[column.label]} style={{ maxWidth: '100px', height: '100px', borderRadius: '50%' }} />
            ) : (
              row[column.label]
            )}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  return (
    <div style={{ padding: '20PX' }}>
      <div style={{ textAlign: 'center', paddingTop: '20px', color: '#181E1C' }}>
        <Typography variant="h2" fontFamily="Roboto" fontWeight="bold">
          Registro
        </Typography>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '50px' }}>
        <Filtro onFilterChange={filterData} />

        <TableContainer component={Paper} style={{ marginLeft: '20px', maxHeight: '400px', overflowY: 'auto', maxWidth: '800PX' }}>
          <Table sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }}>
            <TableHead>
              <TableRow sx={{
                backgroundColor: 'rgba(129, 153, 146, 0.7)',
                color: '#000000',
                fontSize: '20px'
              }}>
                <TableCell width="120px">Imagen</TableCell>
                <TableCell width="120px">Nombre</TableCell>
                <TableCell width="120px">Fecha de Registro</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <TableRow key={row.id} style={{ cursor: 'pointer' }} onClick={() => handleRowClick(row.id)}>
                  <TableCell align={'left'} width={'41%'} sx={{ backgroundColor: 'rgba(129, 153, 146, 0.7)', color: '#000000', fontSize: '20px' }}>
                    <img src={row.imagen} alt={row.nombre} style={{ maxWidth: '100px', height: '100px', borderRadius: '50%' }} />
                  </TableCell>
                  <TableCell align={'left'} width={'41%'} sx={{ backgroundColor: 'rgba(129, 153, 146, 0.7)', color: '#000000', fontSize: '20px' }}>
                    {row.nombre}
                  </TableCell>
                  <TableCell align={'left'} width={'41%'} sx={{ backgroundColor: 'rgba(129, 153, 146, 0.7)', color: '#000000', fontSize: '20px' }}>
                    {row.fechaRegistro}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
