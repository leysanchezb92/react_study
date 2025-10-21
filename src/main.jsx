import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Calculator } from './vrilli-exercises/calculator'
import { Average } from './vrilli-exercises/average'
import { Semaforo } from './vrilli-exercises/semaforo'
import { TarjetaPerfil } from './vrilli-exercises/props/tarjetaPerfil'
import ComponenteClase from './vrilli-exercises/props/componenteClase'

// Datos de ejemplo para la tarjeta
const datosUsuario = {
    nombre: "María Fernanda",
    edad: 28,
    hobbies: ["Lectura de fantasía", "Cocina vegetariana", "Clases de yoga", "Programación front-end"]
};

const alertaCritica = {
  mensaje: "El servidor principal ha perdido la conexión. ¡Acción inmediata requerida!",
  esCritica: true,
};

const alertaNormal = {
  mensaje: "La actualización de la base de datos se completó con éxito.",
  esCritica: false,
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculator />
    <Average />
    <Semaforo />
    <ComponenteClase mensaje = {alertaCritica.mensaje} esCritica = {alertaCritica.esCritica}/>
    <ComponenteClase mensaje = {alertaNormal.mensaje} esCritica = {alertaNormal.esCritica}/>
    <TarjetaPerfil nombre = {datosUsuario.nombre} edad = {datosUsuario.edad} hobbies = {datosUsuario.hobbies}/>
  </StrictMode>,
)
