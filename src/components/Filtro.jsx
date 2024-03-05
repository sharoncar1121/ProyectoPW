import React, { useState } from 'react';
import { TextField, Button, Radio, FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Filtro = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleRadioChange = (event) => {
    const newFilter = event.target.value === selectedFilter ? '' : event.target.value;
    setSelectedFilter(newFilter);
  };

  const handleSearch = () => {
    // Aquí puedes realizar la búsqueda y aplicar los filtros necesarios
    const filteredRecords = tusRegistros.filter((registro) => {
      const matchesSearchTerm = registro.nombre.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilters =
        (!selectedFilter || registro[selectedFilter].toString() === searchTerm);

      return matchesSearchTerm && matchesFilters;
    });

    // Aquí puedes hacer algo con los registros filtrados, como actualizar el estado
    // o pasarlos a otro componente para su renderización.
    console.log('Registros filtrados:', filteredRecords);

    // También se puede llamar a la función que se ha pasado como prop para informar a otro componente sobre los resultados
    onSearchResult(filteredRecords);
  };

   return (
    <div style={{ display: 'flex', flexDirection: 'column',
    maxWidth: '400px', border: '1px solid #181E1C',
    boxShadow: '1px 2px 6px 1px  rgba(0, 0, 0, 0.4)',
    borderRadius: '15px', padding: '10px', backgroundColor: '#DFDDD3' }}>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <TextField
          label="Buscar"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px', backgroundColor: '#F2F3EF',
          border: '1px solid #181E1C', borderRadius: '10px' }}
        />
        <Button variant="contained" onClick={handleSearch}
        endIcon={<SearchIcon/>}
        style={{backgroundColor: '#181E1C',
        color: '#F2F3EF', borderRadius: '10px'}}>
          Buscar
        </Button>
      </div>

      <FormControl component="fieldset">
        <RadioGroup
          aria-label="filtro"
          name="filtro"
          value={selectedFilter}
          onChange={handleRadioChange}
        >
           <FormControlLabel value="id" control={<Radio />} label="ID" style={{ marginBottom: '10px' }} />
          <FormControlLabel value="raza" control={<Radio />} label="Raza" style={{ marginBottom: '10px' }} />
          <FormControlLabel value="nombre" control={<Radio />} label="Nombre" style={{ marginBottom: '10px' }} />
          <FormControlLabel value="fechaRegistro" control={<Radio />} label="Fecha de Registro" style={{ marginBottom: '10px' }} />
          <FormControlLabel value="especie" control={<Radio />} label="Especie" style={{ marginBottom: '10px' }} />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
