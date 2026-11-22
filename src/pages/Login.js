import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const navigate = useNavigate();
  const { db, entrar } = useApp();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setNotice('');

    const account = db.usuarios.find(
      (item) => item.correo.toLowerCase() === usuario.trim().toLowerCase()
    );

    if (!account || password !== 'demo123') {
      setError('Credenciales inválidas. Usa un correo de la lista y la contraseña demo123.');
      return;
    }

    entrar(account.rol);
    navigate('/panel');
  };

  const handleDemo = () => {
    setError('');
    setNotice('');
    entrar('Administrador');
    navigate('/panel');
  };

  const handleForgotPassword = () => {
    setError('');
    setNotice('La recuperación de contraseña no está habilitada en esta demostración.');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Mitad Izquierda: Branding Institucional */}
      <div style={{ 
        flex: 1, 
        backgroundColor: '#0062CC', // Azul base de la imagen
        color: 'white', 
        padding: '50px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decoración curva de fondo (Opcional, simula la onda inferior derecha) */}
        <div style={{ position: 'absolute', bottom: '-15%', right: '-10%', width: '600px', height: '600px', backgroundColor: '#0056b3', borderRadius: '50%', opacity: 0.5, zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-25%', right: '-5%', width: '600px', height: '600px', backgroundColor: '#004999', borderRadius: '50%', opacity: 0.3, zIndex: 0 }}></div>

        {/* Top: Logo y Botón de regreso al Inicio */}
        <div 
          onClick={() => navigate('/')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            zIndex: 1, 
            cursor: 'pointer',
            width: 'fit-content',
            transition: 'opacity 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          title="Volver a la página principal"
        >
          {/* Círculo blanco con corazón naranja */}
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            border: '2.5px solid white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E25E1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <span style={{ fontSize: '22px', fontWeight: '800', color: 'white', letterSpacing: '0.5px' }}>
            Enfoque y Salud
          </span>
        </div>

        {/* Medio: Mensaje Principal */}
        <div style={{ zIndex: 1, maxWidth: '90%' }}>
          <div style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '16px' }}>SIGCI-EYS</div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', margin: '0 0 24px 0' }}>
            Un espacio organizado para cuidar mejor.
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, opacity: 0.9 }}>
            Gestión institucional responsable para que el equipo pueda enfocarse en lo que más importa: las personas.
          </p>
        </div>

        {/* Bottom: Texto inferior */}
        <div style={{ zIndex: 1, fontSize: '12px', opacity: 0.8 }}>
          Sistema Integral de Gestión y Control Institucional
        </div>
      </div>

      {/* Mitad Derecha: Formulario de Login */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', padding: '40px' }}>
        
        <div style={{ width: '100%', maxWidth: '420px' }}>
          
          {/* Cabecera del Formulario */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '20px', height: '2px', backgroundColor: '#E25E1A' }}></div>
              <span style={{ color: '#0062CC', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>PORTAL INSTITUCIONAL</span>
            </div>
            <h2 style={{ fontSize: '2rem', color: '#1A202C', margin: '0 0 8px 0', fontWeight: '800' }}>Bienvenido de nuevo</h2>
            <p style={{ color: '#718096', margin: 0, fontSize: '14px' }}>Ingresa tus credenciales institucionales para continuar.</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {error && <p role="alert" style={{ color: '#B42318', fontSize: '13px', margin: 0 }}>{error}</p>}
            {notice && <p role="status" style={{ color: '#435776', fontSize: '13px', margin: 0 }}>{notice}</p>}
            
            {/* Input Usuario */}
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#1A202C' }}>Usuario</label>
              <input 
                type="text" 
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Tu usuario institucional"
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #E2E8F0', boxSizing: 'border-box', outlineColor: '#0062CC', fontSize: '15px' }}
                required
              />
            </div>
            
            {/* Input Contraseña */}
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#1A202C' }}>Contraseña</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Tu contraseña"
                  style={{ width: '100%', padding: '14px', paddingRight: '45px', borderRadius: '8px', border: '1px solid #E2E8F0', boxSizing: 'border-box', outlineColor: '#0062CC', fontSize: '15px' }}
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#718096', display: 'flex' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button type="button" onClick={handleForgotPassword} style={{ background: 'none', border: 0, padding: 0, color: '#0062CC', fontSize: '14px', cursor: 'pointer', fontWeight: '500' }}>¿Olvidaste tu contraseña?</button>
              </div>
            </div>
            
            {/* Botones */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
              <button type="submit" style={{ backgroundColor: '#0062CC', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '16px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                Ingresar 
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </button>
              
              {/* Separador */}
              <div style={{ height: '1px', backgroundColor: '#E2E8F0', margin: '8px 0' }}></div>
              
              <button type="button" onClick={handleDemo} style={{ backgroundColor: '#EBF4FF', color: '#0062CC', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '16px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                Ver demostración
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </button>
            </div>

            {/* Disclaimer */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px', color: '#718096', fontSize: '12px', lineHeight: '1.5' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <span>Acceso restringido a personal autorizado. Esta vista es una maqueta: no autentica usuarios ni guarda contraseñas. La demostración contiene únicamente datos ficticios.</span>
            </div>

            {/* Volver al sitio */}
            <div style={{ marginTop: '20px' }}>
              <button onClick={() => navigate('/')} type="button" style={{ background: 'none', border: 'none', color: '#0062CC', fontSize: '14px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
                Volver al sitio
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
