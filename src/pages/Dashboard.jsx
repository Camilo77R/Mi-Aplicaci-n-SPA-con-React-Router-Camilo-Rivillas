import { useNavigate } from "react-router-dom";

function Dashboard(){
    const navigate = useNavigate()

    return(
        <>
            <h1>Dashboard</h1>
            <button onClick={() => navigate("/servicios")}>Ir a Servicios</button>
        </>
    )
}

export default Dashboard;