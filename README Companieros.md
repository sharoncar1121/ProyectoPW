# Markdown a los compañeros:
## Para utilizar los typography 

deben hacer npm install del siguiente font:

> npm install @fontsource/roboto

se deben colocar estos import en main.jsx para que las fuentes de los typography funcionen
> import '@fontsource/roboto/300.css';
> 
> import '@fontsource/roboto/400.css';
> 
> import '@fontsource/roboto/500.css';
> 
> import '@fontsource/roboto/700.css';


## Para utilizar los DatePicker

los DatePickers de MUI tienen los siguientes pasos para su funcionamiento:

hacer npm i de x-date-pickers
>npm install @mui/x-date-pickers

se tiene que instalar el dayjs que es el adaptador de fechas
>npm install dayjs

luego hacer el import de lo siguiente en sus componentes a usar el DatePicker
>import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
>
>import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
>
>import { DatePicker } from '@mui/x-date-pickers/DatePicker'

la estructura para su funcionamiento es la siguiente:
```html
  <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker label="Seleccione la Fecha" />
  </LocalizationProvider>
  ```

