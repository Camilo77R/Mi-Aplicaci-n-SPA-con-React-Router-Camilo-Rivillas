import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProyectoDetalle(){
    const { codigo } = useParams()
    const navigate = useNavigate()

    return(
        <>
            <h1>Proyecto Detalle</h1>
            <p>Código del proyecto: {codigo}</p>

            <h2>Preguntas y Respuestas</h2>
            <ol>
                <li>
                    <strong>¿Qué es una SPA?</strong>
                    <p>Es una web que parece una sola página, aunque tiene varias secciones. No se recarga, solo cambia lo que ves.</p>
                </li>
                <li>
                    <strong>¿Para qué sirve BrowserRouter?</strong>
                    <p>Es lo que hace posible que puedas moverte entre páginas en React sin que se recargue todo.</p>
                </li>
                <li>
                    <strong>¿Cuál es la función de Route?</strong>
                    <p>Sirve para decir qué parte de la web se muestra según la dirección que pongas en el navegador.</p>
                </li>
                <li>
                    <strong>¿Qué hace useParams?</strong>
                    <p>Te da los datos que están en la URL, como el ID de algo, para que puedas usarlo en tu componente.</p>
                </li>
                <li>
                    <strong>¿Cuándo usarías useNavigate?</strong>
                    <p>Lo usas para cambiar de página desde el código, como cuando quieres ir a otra sección después de hacer algo.</p>
                </li>
            </ol>

            <button onClick={() => navigate("/portafolio")}>Volver al Portafolio</button>
        </>
    )
}

export default ProyectoDetalle;