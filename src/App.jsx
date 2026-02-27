import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Dashboard from './pages/Dashboard';
import Servicios from './pages/Servicios';
import Portafolio from './pages/Portafolio';
import Soporte from './pages/Soporte';
import ProyectoDetalle from './pages/ProyectoDetalle';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/proyectos/:codigo" element={<ProyectoDetalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App