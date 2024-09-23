import { useState } from "react";
import { postProducts } from "../services/FetchProducts";
// import Navbar from "../components/Navbar";

function AgregarProductos() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [descripcion,setDescripcion]= useState('')
    const [precio,setPrecio] =useState('')

    const Productos = () => {

        if (!selectedImage || !descripcion || !precio) {
            alert("seleccione una imagen, por favor llene los campos vacios")
            return
        } else{
        const porducts = {
            imagen: selectedImage,
            descripcion: descripcion,
            precio: precio
        }
        postProducts('products', porducts)
        }
    }


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        
        if (file) {
          // Preview the selected image
          const reader = new FileReader();
          reader.onloadend = () => {
            setSelectedImage(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          setSelectedImage(null);
        }
      };

  return (
    <div>
      {/* <Navbar/> */}
    <div className="form-container">
    <form onSubmit={Productos}>
      <input type="file" placeholder="Suba la imagen" onChange={handleImageChange} className="form-input-file"/>
      <img src={selectedImage}/>
      <input type="text" placeholder="Ingrese la descripcion del producto" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="form-input"/>
      <input type="text" placeholder="Ingrese el precio de su producto" value={precio} onChange={(e) => setPrecio(e.target.value)} className="form-input"/>
      <button type="submit" className="submit-button">Agregar Producto</button>
    </form>
    </div>
    </div>
  )
}

export default AgregarProductos
