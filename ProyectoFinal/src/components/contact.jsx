import { useState } from 'react';
import { mostrarAlerta } from './SweetAlert';

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar si hay campos vacíos
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      await mostrarAlerta('warning', 'Todos los campos son obligatorios.');
      return; // Detener el envío si hay campos vacíos
    }

    // Aquí puedes manejar el envío del formulario (ej. enviar a un servidor)
    console.log('Enviado:', { nombre, email, mensaje });

    // Reiniciar el formulario
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Tu email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Tu mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
