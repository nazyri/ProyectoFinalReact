import "../styles/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUsers } from "../services/fetch";

const RegisterForm = () => {
  const navigate = useNavigate
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const crearUsuario = async (e) => {
    e.preventDefault();

    if (!nombre || !codigo || !correo || !clave) {
      alert("Espacios vacíos");
      return;
    }

    const user = {
      nombre,
      codigo,
      correo,
      clave
    };

    try {
      await postUsers('users', user);
      navigate("/Login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register">
      <img className="container-img" src="/src/img/IMG_0653 - Fleyzen media.png" alt="Imagen de registro" />
      <div className="container-register">
        <form className="form" onSubmit={crearUsuario}>
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