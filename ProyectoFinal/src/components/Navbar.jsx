import '../styles/Navbar.css'

function Navbar() {
  return (
    <div>

      <nav>
        <ul>
            <li><link to="/" />Inicio</li>
            <li><link to="/" />Destacadas</li>
            <li><link to="/" />Principal</li>
            <li><link to="/" />Acerca de Nosotros</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar





// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css'; // Importa el archivo de estilos si lo usas

// function Navbar() {
//   return (
//     <div>
//     <nav>
//       <ul>
//         <li><Link to="/">Inicio</Link></li>
//         <li><Link to="/page1">Destacada</Link></li>
//         <li><Link to="/page2">Acerca de Nosotros</Link></li>
//         <li><Link to="/page3">Principal</Link></li>
//       </ul>
//     </nav>
//     </div>
//   );
// }

// export default Navbar;
