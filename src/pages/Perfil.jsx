import { Expediente } from "../components/expediente"
import {FormVacunacion} from '../components/FormVacunacion'
import {Desparasitacion} from '../components/Desparasitacion'
import {Notas} from '../components/Notas'
import BotonGuardar from '../components/BotonGuardar'

export const Perfil = () => {
  return (
  <> 
    <Expediente/>
    <div >
      <FormVacunacion/>
      <Desparasitacion/>
      <Notas/>
      <BotonGuardar/>
    </div>
  </>
  )
}