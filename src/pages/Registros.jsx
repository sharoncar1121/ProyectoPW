import React, { useState } from 'react';
import { Filtro } from '../components/Filtro';
import { Typography } from '@mui/material';

export const Registros = () => {
  const [registros, setRegistros] = useState([
    // Aquí deberías tener tus registros iniciales
    { id: 1, nombre: 'Perro', raza: 'Labrador', fechaRegistro: '2022-01-01', especie: 'Canino' },
    // Otros registros...
  ]);

  const [registrosFiltrados, setRegistrosFiltrados] = useState([]);

  const handleSearchResult = (filteredRecords) => {
    // Actualiza la lista de registros filtrados en el estado
    setRegistrosFiltrados(filteredRecords);
  };

  return (
    <div>
      <div style={{ textAlign: 'center', paddingTop: '20px', color: '#181E1C' }}>
        <Typography variant="h1" fontFamily="Roboto" fontWeight="bold">
          Registro
        </Typography>
      </div>

      <div style={{paddingTop: '80px', textAlign: 'left', marginLeft: '50px'}}>
        {/* Renderiza el componente Filtro y pasa la función handleSearchResult como prop */}
        <Filtro onSearchResult={handleSearchResult} />

      {/* Renderiza la lista de registros, ya sea la lista completa o filtrada */}
      {registrosFiltrados.length > 0 ? (
        <ul>
          {registrosFiltrados.map((registro) => (
            <li key={registro.id}>
              {registro.id} - {registro.nombre} - {registro.raza} - {registro.fechaRegistro} - {registro.especie}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay registros que coincidan con los criterios de búsqueda.</p>
      )}
      </div>
    </div>
  );
};
