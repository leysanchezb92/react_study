export function TarjetaPerfil(props){
    return(<>
        <div className="bg-white rounded-xl shadow-2x1 transform hover:scale-[1.02] transition duration-300"> 
            <h2>Tarjeta de perfil</h2>
            <p className="text-xl text-gray-800 mb-3">Nombre: {props.nombre}</p>
            <p className="text-xl text-gray-800 mb-3">Edad: {props.edad} años</p>
            <h3>Hobbies e intereses: </h3>
            <ul>
                {props.hobbies.map((hobbies, index) => (
                    <li className="text-xl text-gray-800 mb-3" key={index}>{hobbies}</li>
                ))}
            </ul>
        </div>
    </>)
}