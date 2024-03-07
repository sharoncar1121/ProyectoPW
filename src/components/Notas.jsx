import { Typography } from "@mui/material"


export const Notas = () => {
  return (

    <>

<div style={{ textAlign: 'center', paddingTop: '20px',paddingBottom: '20px', color: '#181E1C' }}>
        <Typography variant="h5" fontFamily="Roboto" fontWeight="bold">
          Notas
        </Typography>
      </div>
    <div>
      
        <textarea
        id = "Notas"
        rows="10"
        cols="100"
        style={{ width: '100%', maxWidth: '720px', margin: '0 auto', borderRadius: '10px', marginTop: '10px' }}
        placeholder="Ingrese las notas aquí"
        ></textarea>
      
    </div>
    </>
  )
}
