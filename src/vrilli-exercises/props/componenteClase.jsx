// Crea un componente de Clase de React llamado AlertaClase.
import { Component } from "react";

class ComponenteClase extends Component {

    render(){
        // Esto se podria mejora.Podrias pasar directamente como props en la funcion y darle valores predeterminados.
        // ejemplo: function Alerta({ mensaje = "Esta es una alerta.", esCritica = false }), esta es la manera en que se utiliza en React Moderno.
        const {mensaje, esCritica} = this.props;

        return(
            <>
                <hr />
                <div style={{backgroundColor: esCritica ? "red" : "green", padding: "10px", borderRadius: "5px"}}>
                    <p>{mensaje}</p>
                </div>
                <hr />
            </>
        )
    }
}

export default ComponenteClase;

