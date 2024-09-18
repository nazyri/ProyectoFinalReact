import Contact from '../components/contact';
import '../styles/Contacto.css'; // Asegúrate de crear este archivo para los estilos
  function Contacto() {
  
    return (
      <div className="contact-page">
        <h1>Contacto</h1>
        <div className="contact-info">
          <div className="contact-item">
            <a href="tel:+1234567890" className="contact-link">
              <span className="icon">📞</span>
              Teléfono: +1 234 567 890
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">🔗</span>
              Facebook
            </a>
          </div>
          <div className="contact-item">
            <a href="mailto:example@gmail.com" className="contact-link">
              <span className="icon">📧</span>
              Gmail: example@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">🔗</span>
              TikTok
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">🔗</span>
              Instagram
            </a>
          </div>
          <div className="contact-item">
            <a href="https://wa.me/+1234567890" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">💬</span>
              WhatsApp: +1 234 567 890
            </a>
          </div>
        </div>
        <Contact/>
      </div>
    );
  };
  
export default Contacto
