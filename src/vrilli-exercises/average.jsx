// Dado 5 números obtener el promedio de los mismo e informar el resultado.

import { useState } from "react"

export function Average() {
    const [average, setAverage] = useState([])
    const [result, setResult] = useState('')

    const averageOperation = () => {
        const numbers = average.split(',').map(num => Number(num.trim()))

        const addTotal= numbers.reduce((acum,num)=>{
            return acum + num
        })
        // Para Calcular correctamente el promedio hay que dividir (dividiendo, no sumando la longitud)
        const averageTotal = addTotal / average.length
        setResult(`el promedio de los datos es ${averageTotal}`)
    };

    return(
        <> 
            <hr />
            <hr />
            <h1>Promedio</h1>
            <label htmlFor="average">Ingrese 5 numeros para realizar el promedio de ellos: </label>
            <input type="text" name="average" id="average" value={average} onChange={e => { setAverage(e.target.value)}}/>
            <button type="submit" onClick={averageOperation}>Carcular promedio</button>
            <div>
                {result}
            </div>
        </>
    )
}
