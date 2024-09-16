import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        {/* <li><Link to="/Destacada">Destacadas</Link></li>
        <li><Link to="/Principal">Principal</Link></li>
        <li><Link to="/AcercaNosotros">Acerca de Nosotros</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
        <li><Link to="/Ayuda">Ayuda</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;

