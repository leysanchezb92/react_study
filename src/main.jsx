import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Calculator } from './vrilli-exercises/calculator'
import { Average } from './vrilli-exercises/average'
import { Semaforo } from './vrilli-exercises/semaforo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculator />
    <Average />
    <Semaforo />
  </StrictMode>,
)
