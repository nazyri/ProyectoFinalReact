import '../styles/Contacto.css';

function Contacto() {
  return (
    <div className="contact-page">
      <h1>¡Estamos aquí para ayudarte!</h1>
      <p className="intro-text">
        En nuestra tienda saludable, nos apasiona ofrecerte los mejores productos para tu bienestar. 
       <br /> Si tienes alguna pregunta, inquietud o necesitas más información sobre nuestros productos, ¡no dudes en contactarnos!
      </p>
      <div className="contact-container">
        <div className="contact-icon-container">
          <img src="/src/img/IMG_0653 - Fleyzen media.png" alt="Logo de la tienda" className="contact-icon-large" />
        </div>
        <div className="contact-info">
          <h2>Contacta con nosotros</h2>
          <div className="contact-item">
            <a href="tel:+1234567890" className="contact-link">
              Teléfono: +1 234 567 890
            </a>
          </div>
          <div className="contact-item">
            <a href="mailto:example@gmail.com" className="contact-link">
              Email: example@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              Facebook
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              Instagram
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              TikTok
            </a>
          </div>
          <div className="contact-item">
            <a href="https://wa.me/+1234567890" target="_blank" rel="noopener noreferrer" className="contact-link">
              WhatsApp: +1 234 567 890
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <h3>¡Esperamos verte pronto en nuestra tienda!</h3>
      </div>
    </div>
  );
}

export default Contacto;
