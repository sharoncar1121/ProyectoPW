import { Expediente } from "../components/expediente"
import {FormVacunacion} from '../components/FormVacunacion'
import {Desparasitacion} from '../components/Desparasitacion'
import {Notas} from '../components/Notas'
import BotonGuardar from '../components/BotonGuardar'

export const Perfil = () => {
  return (
  <> 
    <Expediente/>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px' }}>
        <FormVacunacion />
      </div>
      <div aria-disabled style={{ paddingTop: '80px' }}>
        <Desparasitacion/>
      </div>
      <div aria-disabled style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px' }}>
        <Notas/>
      </div>
      <div style={{ display: 'flex',  justifyContent: 'right', paddingBlock: '40px', paddingRight:'10%'}}>
      <BotonGuardar/>
      </div>
      
  </>
  )
}