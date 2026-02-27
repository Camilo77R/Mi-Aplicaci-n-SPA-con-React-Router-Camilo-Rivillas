import { useNavigate } from "react-router-dom";

function Servicios(){
    const navigate = useNavigate()

    return(
        <>
            <h1>Servicios</h1>
            <button onClick={() => navigate("/")}>Volver a Dashboard</button>
        </>
    )
}

export default Servicios;