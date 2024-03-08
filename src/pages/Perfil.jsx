import { Expediente } from "../components/expediente"
import {FormVacunacion} from '../components/FormVacunacion'

export const Perfil = () => {
  return (
  <> 
    <Expediente></Expediente>
    <div style={{ width: '100%', background:'#f34591'}}>
    <FormVacunacion></FormVacunacion>
    </div>
  </>
  )
}