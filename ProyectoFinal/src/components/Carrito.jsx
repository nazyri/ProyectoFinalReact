import '../styles/Carrito.css'

const Carito = ({ producto, onAgregar }) => {
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <button onClick={() => onAgregar(producto)}>Agregar al Carrito</button>
    </div>
  );
};

export default Carito;
