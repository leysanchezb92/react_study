// Dado dos números enteros obtener su Suma, Resta, multiplicación y Divion.

import { useState } from "react"

export function Calculator() {
    const[firstNumber, setFirstNumber] = useState(0)
    const[secondNumber, setSecondNumber] = useState(0)
    const[result, setResult] = useState({})

    const calculateOperations = () => {
        const num1 = Number(firstNumber)
        const num2 = Number(secondNumber)

        const sum = num1 + num2
        const resta = num1 - num2
        const mult = num1 * num2
        const div = num2 === 0 ? 'el valor del numero dos debe ser superior a 0' : num1 / num2;
        
        const newResult = {
            suma : sum,
            resta: resta,
            division : div,
            multiplicacion: mult
        }

        setResult(newResult)

    }
    return (
    <>
        <h1> Calculator</h1>
        <h3>Ingrese los numeros a los cuales se hara suma, resta, multiplicación y division</h3>
        <label htmlFor="number1">Primer numero: </label>
        <input type="number" name="number1" id="number1" value={firstNumber} onChange={e => { setFirstNumber(e.target.value)}}/>
        <label htmlFor="number2">Segundo numero: </label>
        <input type="number" name="number2" id="number2" value={secondNumber} onChange={e => { setSecondNumber(e.target.value)}}/>
        <button type="submit" onClick={calculateOperations}>Calcular operaciones</button>
        <hr />
        <div>el resultado de tus operaciones es:
            {result && (
                <div>
                    <p>Suma: {result.suma}</p>
                    <p>Resta: {result.resta}</p>
                    <p>Multiplicacion: {result.multiplicacion}</p>
                    <p>Division: {result.division}</p>
                </div>
            )}
        </div>
    </>
)}