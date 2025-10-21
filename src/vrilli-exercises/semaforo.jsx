// Crear un componente que simule un semáforo que cambia de color y mensaje al presionar un botón. Este ejercicio se centra en cómo actualizar un objeto en el estado de forma inmutable.

import {useState} from "react"

export function Semaforo(){
    const [estadoLuz, setEstadoLuz] = useState({
        color: 'red',
        mensaje: 'Detente'
    })


    const changeColor = () => {

        if (estadoLuz.color === 'red') {
            setEstadoLuz({
                color: 'yellow',
                mensaje: 'Precaucion'
            })
        } else if (estadoLuz.color === 'yellow') {
            setEstadoLuz({
                color: 'green',
                mensaje: 'Avanza'
            })
        } else {
            setEstadoLuz({
                color: 'red',
                mensaje: 'Detente'
            })
        }

        return;    
    }

    return(
        <>
        <div style={{textAlign: "center", marginTop: "20px", backgroundColor: "#292727ff", padding: "20px", borderRadius: "10px"}}>
            <hr />
            <p style={{color: estadoLuz.color}}>{estadoLuz.mensaje}</p>
            <button type="submit" onClick={changeColor}>el color</button>
            <hr />
        </div>
        </>
    )
}