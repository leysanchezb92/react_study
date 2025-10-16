// Ejercicio 1: Lista de Compras Interactiva (Manejo de Arrays) 🛒
// 🎯 Objetivo
// Construir un componente que permita al usuario agregar, ver y eliminar elementos de una lista. Este ejercicio se enfoca en la inmutabilidad de arrays (cómo agregar y eliminar elementos sin modificar el array original).

// 🛠️ Tareas
// Define el Estado: Crea un estado inicial como un array vacío llamado productos.

// Entrada de Datos: Crea un input de texto para que el usuario escriba un producto y vincúlalo a un estado auxiliar (nuevoProducto).

// Función Agregar: Crea una función que use el operador spread (...) para agregar el nuevoProducto al array productos al hacer clic en un botón.

// Renderiza la Lista: Utiliza el método .map() para mostrar cada producto como un elemento de lista (<li>).

// Función Eliminar: Añade un botón "X" al lado de cada producto. Al hacer clic, este botón debe eliminar el producto de la lista usando el método .filter() para crear un nuevo array sin el elemento a eliminar.

import { useState } from "react"

export function Products() {
    const[tarea, setTarea] = useState([])

    return(<>
        <div></div>
        <button type="submit"></button>
    </>)
}