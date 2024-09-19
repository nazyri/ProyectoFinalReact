import '../styles/AyudaForm.css'
import { useState, useEffect } from 'react';

const AyudaForm = () => {
  const [consulta, setConsulta] = useState('');
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    // Cargar consultas desde localStorage al iniciar
    const storedConsultas = JSON.parse(localStorage.getItem('consultas')) || [];
    setConsultas(storedConsultas);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (consulta.trim() === '') return; // Evitar entradas vacías

    const newConsultas = [...consultas, consulta];
    setConsultas(newConsultas);
    setConsulta('');
    
    // Guardar consultas en localStorage
    localStorage.setItem('consultas', JSON.stringify(newConsultas));
  };

  return (
    <div className='div1'>
      <h1>Consulta sobre Comida Saludable</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={consulta} onChange={(e) => setConsulta(e.target.value)} placeholder="Escribe tu consulta aquí..." rows="4" style={{ width: '100%' }}/>
        <button type="submit">Enviar Consulta</button>
      </form>

      <h2>Consultas Anteriores:</h2>
      <ul>
        {consultas.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default AyudaForm;
