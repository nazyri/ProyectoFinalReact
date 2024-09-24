import { useState } from 'react';
import Carito from '../components/Carrito';
import Navbar from '../components/Navbar';
import { deleteProducts } from '../services/FetchProducts'; 

const Destacadas = () => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCart((prevCart) => [...prevCart, producto]);
  };

  const eliminarDelCarrito = async (producto) => {
    try {
      await deleteProducts(`/products/`, producto.id); 
      setCart((prevCart) => prevCart.filter((item) => item.id !== producto.id)); // Actualiza el carrito
    } catch (error) {
      console.error("Error al eliminar el producto del carrito:", error);
    }
  };

  const productosDestacados = [
    { id: 1, nombre: 'Ensalada Grande', descripcion: 'ensalada de lechuga, tomate y especias', precio: 20, imagen: '/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (6).jpeg' },
    { id: 2, nombre: 'Ensalada chica', descripcion: 'ensalada de lechuga, tomate y especias', precio: 15, imagen: '/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (4).jpeg' },
    { id: 3, nombre: 'sandwitch natural + jugo natural', descripcion: 'pan integral, lechuga tomate y salsas naturales, jugo natural de naranja', precio: 45, imagen: '/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (2).jpeg' },
    { id: 4, nombre: 'ensalada de frutas', descripcion: 'fresas, nueces y kiwi', precio: 35, imagen: '/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (1).jpeg' },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <h1>Productos Destacados</h1>
        <div className="cards-container">
          {productosDestacados.map((producto) => (
            <Carito key={producto.id} producto={producto} onAgregar={agregarAlCarrito} />
          ))}
        </div>
        <div className="carrito">
          <h2>Carrito</h2>
          {cart.length === 0 ? (
            <p className="empty-cart">El carrito está vacío</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={item.imagen} alt={item.nombre} style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
                <p>{item.nombre} - ${item.precio}</p>
                <button onClick={() => eliminarDelCarrito(item)} style={{ marginLeft: '10px', color: 'red' }}>Eliminar</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Destacadas;
