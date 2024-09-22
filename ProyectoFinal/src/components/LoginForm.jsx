import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../services/fetch";

function LoginForm() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers("users");
        setUsers(data);
      } catch (error) {
        console.error("Error fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!codigo.trim() || !nombre.trim() || !correo.trim() || !clave.trim()) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const user = users.find(user =>
      user.nombre === nombre && user.codigo === codigo && user.correo === correo && user.clave === clave
    );

    if (user) {
      navigate("/Home");
    } else {
      alert("Error de autenticación. Inténtelo de nuevo.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" id="nombre" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" id="codigo" placeholder="Ingrese su código" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        <input type="text" id="correo" placeholder="Ingrese su correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <input type="password" id="clave" placeholder="Ingrese su clave" value={clave} onChange={(e) => setClave(e.target.value)} />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default LoginForm;
