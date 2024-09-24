import { useState } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import '../styles/Home.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteProducts, putProducts, postProducts } from '../services/FetchProducts'; 
import { mostrarAlerta } from '../components/SweetAlert';

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', description: 'Descripción 1', price: 100, imgSrc: '/src/img/WhatsApp Image 2024-09-19 at 8.38.19 AM (1).jpeg' },
    { id: 2, title: 'Card 2', description: 'Descripción 2', price: 200, imgSrc: '/src/img/WhatsApp Image 2024-09-19 at 8.34.00 AM.jpeg' },
    { id: 3, title: 'Card 3', description: 'Descripción 3', price: 300, imgSrc: '/src/img/WhatsApp Image 2024-09-13 at 1.50.26 PM.jpeg' },
  ]);
  
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [editCard, setEditCard] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [newProductOpen, setNewProductOpen] = useState(false);

  const handleDelete = async (id) => {
    try {
      await deleteProducts('/users/', id);
      setCards(prevCards => prevCards.filter(card => card.id !== id));
    } catch (error) {
      console.error('Error al eliminar la tarjeta:', error);
    }
  };

  const handleEdit = (card) => {
    setEditCard(card);
    setNewTitle(card.title);
    setNewDescription(card.description);
    setNewPrice(card.price);
  };

  const handleUpdate = async () => {
    try {
      await putProducts(`/users/${editCard.id}`, { title: newTitle, description: newDescription, price: newPrice });
      setCards(prevCards => prevCards.map(card => (
        card.id === editCard.id 
          ? { ...card, title: newTitle, description: newDescription, price: newPrice } 
          : card
      )));
      setEditCard(null);
      setNewTitle('');
      setNewDescription('');
      setNewPrice('');
    } catch (error) {
      console.error('Error al editar la tarjeta:', error);
    }
  };

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'password') {
      setIsAdmin(true);
      setEmail('');
      setPassword('');
    } else {
      mostrarAlerta("error", "Credenciales incorrectas")
    }
  };

  const handleAddProduct = async () => {
    // Validación de los campos
    if (!newTitle || !newDescription || !newPrice || !newImage) {
        mostrarAlerta("error", "Por favor, completa todos los campos.");
        return;
    }

    const newProduct = {
        title: newTitle,
        description: newDescription,
        price: newPrice,
        imgSrc: URL.createObjectURL(newImage),
    };

    try {
        const addedProduct = await postProducts(newProduct);
        setCards(prevCards => [...prevCards, addedProduct]);
        setNewTitle('');
        setNewDescription('');
        setNewPrice('');
        setNewImage(null);
        setNewProductOpen(false);
    } catch (error) {
        console.error('Error al agregar el producto:', error);
    }
  };

  const addToCart = (card) => {
    setCart(prevCart => [...prevCart, card]);
    mostrarAlerta('success', `${card.title} ha sido agregado al carrito.`);
  };

  const toggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart);
  };

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        <button onClick={() => setModalAbierto(true)}>Iniciar Sesión como Admin</button>
        
        {modalAbierto && (
          <div className="login-form" style={{ margin: '20px 0' }}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo Electrónico" style={{ width: '100%', marginBottom: '10px' }} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" style={{ width: '100%', marginBottom: '10px' }} />
            <button onClick={handleLogin}>Iniciar Sesión</button>
          </div>
        )}

        {isAdmin && (
          <>
            <button onClick={() => setNewProductOpen(!newProductOpen)}>
              {newProductOpen ? 'Cancelar Agregar Producto' : 'Agregar Producto'}
            </button>
            
            {newProductOpen && (
              <div className="add-product-form" style={{ margin: '20px 0' }}>
                <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Título del Producto" style={{ width: '100%', marginBottom: '10px' }} />
                <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Descripción" style={{ width: '100%', marginBottom: '10px' }} />
                <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} placeholder="Precio" style={{ width: '100%', marginBottom: '10px' }} />
                <input type="file" accept="image/*" onChange={(e) => setNewImage(e.target.files[0])} style={{ marginBottom: '10px' }} />
                <button onClick={handleAddProduct}>Agregar Producto</button>
              </div>
            )}
          </>
        )}

        <button onClick={toggleCart} style={{ margin: '20px 0' }}>
          {showCart ? 'Ocultar Carrito' : 'Mostrar Carrito'}
        </button>

        {showCart && (
          <div className="cart">
            <h3>Carrito</h3>
            {cart.length === 0 ? (
              <p>No hay productos en el carrito.</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    <img src={item.imgSrc} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
                    {item.title} - ${item.price}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="grid">
          {cards.map(card => (
            <div className="cards" key={card.id}>
              <img src={card.imgSrc} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <p className="card-price">Precio: ${card.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(card)}>Agregar al carrito</button>
                {isAdmin && (
                  <>
                    <button className="btn btn-danger" onClick={() => handleDelete(card.id)}>Eliminar</button>
                    <button className="btn btn-warning" onClick={() => handleEdit(card)}>Editar</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {editCard && (
          <div className="edit-form">
            <h3>Editar Tarjeta</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '18rem' }}>
              <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Nuevo título" style={{ width: '100%' }} />
              <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Nueva descripción" style={{ width: '100%' }} />
              <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} placeholder="Nuevo precio" style={{ width: '100%' }} />
              <button onClick={handleUpdate}>Actualizar</button>
              <button onClick={() => setEditCard(null)}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
