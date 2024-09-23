import { useState } from 'react';
import '../styles/Modal.css';

const Modal = ({ modalAbierto, cerrarModal, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!modalAbierto) return null; // No mostrar nada si el modal está cerrado

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password); // Llamar a la función para manejar el login
  };

  return (
    <div className="overlay-modal">
      <div className="modal">
        <h2>Iniciar Sesión como Administrador</h2>
        <form onSubmit={submitHandler}>
          <input 
            type="email" 
            placeholder="Correo" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
        <button className="boton-cerrar" onClick={cerrarModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
