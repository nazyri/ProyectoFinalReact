import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css'

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then((response) => {
        console.log('Correo enviado!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Teléfono:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Empresa:
        <input type="text" name="company" value={formData.company} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Asunto:
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Mensaje:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
