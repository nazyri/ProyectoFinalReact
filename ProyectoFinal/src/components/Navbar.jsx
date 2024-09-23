import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <h1 className='h11'><li><a href="/Admin">Administrador</a></li></h1>
        <h1 className='h11'><li><a href="/Home">Home</a></li></h1>
        <h1 className='h11'><li><a href="/Destacada">Destacada</a></li></h1>
        <h1 className='h11'><li><a href="/Principal">Principal</a></li></h1>
        <h1 className='h11'><li><a href="/AcercaNosotros">Acerca Nosotros</a></li></h1>
        <h1 className='h11'><li><a href="/Contacto">Contacto</a></li></h1>
        <h1 className='h11'><li><a href="/Ayuda">Ayuda</a></li></h1>
        <h1 className='h11'><li><a href="/AgregarProductos">Agregar productos</a></li></h1>
      </ul>
    </nav>
  )
};

export default Navbar;

