
import { useState } from 'react';

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
        <input type="email" placeholder="Tu email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <textarea placeholder="Tu mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
