import { Typography, TextField } from '@mui/material';

export const Notas = () => {
  return (
    <>
      <div style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px', color: '#181E1C' }}>
        <Typography variant="h3" fontFamily="Roboto" fontWeight="bold">
          Notas
        </Typography>
      </div>
      <TextField
        id="Notas"
        rows={10}
        multiline
        style={{
          width: '80%',
          maxWidth: '900px',
          margin: '0 auto',
          borderRadius: '10px',
          marginTop: '10px',
          backgroundColor: '#DFDDD3',
          boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
        }}
        placeholder="Ingrese las notas aquí"
      />
    </>
  );
};
