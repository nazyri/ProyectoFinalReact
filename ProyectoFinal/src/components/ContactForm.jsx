import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';
import { mostrarAlerta } from './SweetAlert'; // Asegúrate de importar la función

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar si hay campos vacíos
    const { name, email, phone, company, subject, message } = formData;
    if (!name.trim() || !email.trim() || !phone.trim() || !company.trim() || !subject.trim() || !message.trim()) {
      await mostrarAlerta('warning', 'Todos los campos son obligatorios.');
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      phone,
      company,
      subject,
      message,
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then((response) => {
        console.log('Correo enviado!', response.status, response.text);
        // Reiniciar el formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Teléfono:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <br />
      <label>
        Empresa:
        <input type="text" name="company" value={formData.company} onChange={handleChange} />
      </label>
      <br />
      <label>
        Asunto:
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
      </label>
      <br />
      <label>
        Mensaje:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
