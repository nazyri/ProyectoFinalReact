// import { useState } from 'react';
// import '../styles/Modal.css'

// const Modal = ({ modalAbierto, cerrarModal }) => {
//   const [archivo, setArchivo] = useState(null);
//   const [descripcion, setDescripcion] = useState('');
//   const [precio, setPrecio] = useState('');

//   const manejarCambioArchivo = (e) => {
//     setArchivo(e.target.files[0]);
//   };

//   const manejarEnvio = (e) => {
//     e.preventDefault();
//     console.log(archivo, descripcion, precio);
//     cerrarModal(); // Cerrar el modal
//   };

//   if (!modalAbierto) return null;

//   return (
//     <div className="overlay-modal">
//       <div className="modal">
//         <h2>Añadir Producto</h2>
//         <form onSubmit={manejarEnvio}>
//           <input type="file" onChange={manejarCambioArchivo} required/>
//           <input type="text" placeholder="Descripción del producto" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required/>
//           <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required/>
//           <button type="submit">Añadir</button>
//         </form>
//         <button className="boton-cerrar" onClick={cerrarModal}>Cerrar</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;

