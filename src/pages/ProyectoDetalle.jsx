import { useParams } from "react-router-dom";

function ProyectoDetalle(){
    const { codigo } = useParams()

    return(
        <>
            <h1>Proyecto Detalle</h1>
            <p>Codigo del proyecto: {codigo}</p>
        </>
    )
}

export default ProyectoDetalle;