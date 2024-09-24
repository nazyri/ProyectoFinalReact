import "../styles/Register.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUsers, getUsers } from "../services/fetch";
import { mostrarAlerta } from "./SweetAlert";

const RegisterForm = () => {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [datos, setDatos] = useState ([])

  useEffect(() => {
    const get = async () =>{
      const dataUsers = await getUsers("users")
      setDatos(dataUsers)
    }
    get()
  },[])

  const crearUsuario = async (e) => {
    e.preventDefault();

    if (!nombre || !codigo || !correo || !clave) {
      // alert("Espacios vacíos");
      mostrarAlerta("error", "llene los espacios vacios")
      return;
    } else{
      const usuario = datos.find((user) => user.correo === correo)
      if (usuario) {
        // alert("El usuario ya existe")
        mostrarAlerta("error","El usuario ya existe");
      }else{
      const user = {
        nombre: nombre,
        codigo: codigo,
        correo: correo,
        clave: clave
      };
      await postUsers(user);
      navigate("/Login");
    }}}
  


  return (
    <div className="register">
      <img className="container-img" src="/src/img/IMG_0653 - Fleyzen media.png" alt="Imagen de registro" />
      <div className="container-register">
        <form className="form2" onSubmit={crearUsuario} style={{ marginLeft: '-650px' }}>
          <h2 className="Titulo-register">Register</h2>
          <p>Usuario</p>
          <input type="text" placeholder="Nombre de usuario" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <p>Codigo</p>
          <input type="text" placeholder="Ingrese su código" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
          <p>Correo</p>
          <input type="text" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          <p>Clave</p>
          <input type="password" placeholder="Clave" value={clave} onChange={(e) => setClave(e.target.value)} />
          <br /><br />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;