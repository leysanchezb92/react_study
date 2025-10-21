## 📝 Desafíos de Código: Props en React

Estos ejercicios están diseñados para aplicar y consolidar los conceptos clave sobre props, centrándose especialmente en la sintaxis de JSX, el acceso en componentes de clase y el flujo de datos unidireccional (callbacks).

# Desafío 1: Tarjeta de Perfil (Propiedades Mixtas)

### Objetivo: 
Practicar el paso correcto de diferentes tipos de datos (string, number, array) a través de props.

1. Crea un componente funcional llamado TarjetaPerfil.

2. Este componente debe aceptar las siguientes props:

- [x] nombre (string)

- [x] edad (number)

- [x] hobbies (array de strings, por ejemplo, ["Cine", "Leer", "Programar"])

3. Dentro de TarjetaPerfil, renderiza la información de la siguiente manera: El nombre y la edad en un encabezado.

4. Usa el array hobbies y el método map() para renderizar cada hobby como un elemento de lista (<li>).

5. En tu componente principal (App o Padre), renderiza TarjetaPerfil, asegurándote de usar la sintaxis de JSX correcta para cada tipo de dato (comillas "" vs. llaves {}).

## Desafío 2: Componente de Clase (Acceso this.props)

### Objetivo: Reforzar el acceso a las props dentro del método render() de un componente de clase.

1. Crea un componente de Clase de React llamado AlertaClase.

Este componente debe recibir dos props:

- [ ] mensaje (string)

- [ ] esCritica (booleano)

2. Dentro del método render() de AlertaClase, accede a las props obligatoriamente usando la sintaxis this.props.propName.

3. Renderiza el mensaje. Usa la prop esCritica para aplicar un estilo de fondo rojo (crítico) o verde (normal) al contenedor del mensaje.

## Desafío 3: Comunicación Hijo a Padre (Función Callback)

Objetivo: Implementar la comunicación de componente hijo a padre pasando una función como prop, respetando el flujo unidireccional.

Crea dos componentes funcionales: ContadorPadre y BotonAumento.

ContadorPadre:

Debe manejar el estado (useState) para almacenar el valor actual del contador.

Debe definir una función llamada manejarAumento que incremente el estado del contador.

Debe pasar manejarAumento como una prop llamada onAumentar al componente BotonAumento.

BotonAumento:

Debe recibir la prop onAumentar.

Al hacer click en el botón, debe ejecutar la función onAumentar que recibió por prop.

Muestra el valor actual del contador en ContadorPadre.

## Desafío 4: Componente Contenedor (props.children)

Objetivo: Utilizar la prop especial props.children para crear componentes envolventes (wrappers).

Crea un componente funcional llamado Tarjeta.

El componente Tarjeta debe devolver un div con un borde y un sombreado simple (simulando una tarjeta).

La clave del ejercicio: Tarjeta no debe aceptar props explícitas, sino que debe renderizar cualquier cosa que se le pase entre sus etiquetas de apertura y cierre usando props.children.

En tu componente principal, usa Tarjeta para envolver diferentes elementos (por ejemplo, un encabezado <h1>, un párrafo <p>, o incluso otro componente).

## Desafío 5: Valores Predeterminados (Desestructuración ES6)

Objetivo: Aplicar la desestructuración de ES6 para establecer valores por defecto para props opcionales.

Crea un componente funcional llamado BotonPerfil.

Este componente debe recibir una prop opcional textoBoton.

Usa la desestructuración directamente en los argumentos de la función para asignar el valor predeterminado: "Ver Perfil" si la prop textoBoton no se proporciona.

Renderiza un <button> que muestre el texto (ya sea el pasado por prop o el predeterminado).

Renderiza el componente dos veces en tu aplicación principal: una vez sin pasarle ninguna prop, y otra vez pasándole un texto diferente (ej. "Editar Cuenta").