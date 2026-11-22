import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

// Layouts y Páginas Públicas
import MainLayout from '../layouts/MainLayout';
import Inicio from '../pages/Inicio'; 
import Login from '../pages/Login';

// Módulos Internos (Sistema SIGCI-EYS)
import Dashboard from '../pages/Dashboard';
import Personal from '../pages/Personal';
import Asistencia from '../pages/Asistencia';
import Legajo from '../pages/Legajo';
import Bitacora from '../pages/Bitacora';
import Reportes from '../pages/Reportes';
import Pacientes from '../pages/Pacientes';
import Sesiones from '../pages/Sesiones';
import Citas from '../pages/Citas';
import Inventarios from '../pages/Inventarios';

const P = {
  panel: Dashboard,
  personal: Personal,
  asistencia: Asistencia,
  legajo: Legajo,
  bitacora: Bitacora,
  supervision: Bitacora,
  reportes: Reportes,
  pacientes: Pacientes,
  sesiones: Sesiones,
  inventarios: Inventarios,
  citas: Citas
};

const Protegida = ({ id, children }) => {
  const { menu } = useApp();
  return menu.includes(id) ? children : <Navigate to="/panel" replace />;
};

export default function AppRoutes() {
  const { user } = useApp(); 

  // SI NO HAY SESIÓN INICIADA (Muestra la Landing Page y el Login)
  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Inicio />} />        {/* Muestra el banner al arrancar */}
        <Route path="/login" element={<Login />} />    {/* Pantalla de acceso */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  // SI HAY SESIÓN INICIADA (Muestra el sistema interno protegido)
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {Object.entries(P).map(([id, C]) => (
          <Route 
            key={id} 
            path={`/${id}`} 
            element={
              <Protegida id={id}>
                <C />
              </Protegida>
            } 
          />
        ))}
        <Route path="*" element={<Navigate to="/panel" replace />} />
      </Route>
    </Routes>
  );
}