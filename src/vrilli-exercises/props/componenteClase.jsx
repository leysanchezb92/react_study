// Crea un componente de Clase de React llamado AlertaClase.
import { Component } from "react";

class ComponenteClase extends Component {

    render(){
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

