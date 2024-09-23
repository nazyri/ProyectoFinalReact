import { useState } from 'react';
import { getUsers, deleteMethod } from '../services/fetch';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'password') {
      setIsAdmin(true);
      fetchUsers();
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await deleteMethod('/users/', id);
    fetchUsers(); // Refresca la lista de usuarios
  };

  return (
    <div>
      {!isAdmin ? (
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <button type="submit">Iniciar sesión</button>
        </form>
      ) : (
        <div>
          <h2>Panel de Administración</h2>
          {users.map(user => (
            <div key={user.id}>
              <span>{user.name}</span>
              <button onClick={() => handleDelete(user.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
